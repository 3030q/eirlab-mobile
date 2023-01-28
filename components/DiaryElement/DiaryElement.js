import React, {useState} from 'react';
import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 40,
    },
    inpt: {
        borderWidth: 1,
        width: 300,
        height: 60,
        borderRadius: 30,
        textAlign: 'center',
        borderColor: '#7FB4B9',
        marginTop: 20
    },
    title: {
        marginTop: 70,
        fontSize: 25,
        textAlign: 'center'
    },
    btn: {
        fontSize: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        marginTop: 25,
        padding: 30,
        borderColor: '#7FB4B9',
        borderWidth: 3,
        backgroundColor: 'white',
        width: 200,
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: 50
    },
    result: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    anal: {
        borderWidth: 2,
        borderColor: "#7FB4B9",
        borderRadius: 30,
        width: 400,
        marginBottom: 10,
        textAlign: "center",
        alignItems: "center",
        marginTop:10,
        padding: 10
    },

    nothing: {
        marginTop: 100,
        fontSize: 20,
        fontWeight:"bold"
    }
})

const DiaryElement = ({route, navigation}) => {

    const {type, value} = route.params


    const [newValue, onChangeNewValue] = useState('')
    const [values, setValues] = useState([])


    function addNewValues () {
        setValues([...values, {v: newValue, date: new Date().toISOString().slice(0, 10)}])
    }

    const DiaryItem = ({param, date}) => (
        <View style={styles.anal}>
            <Text style={styles.anal_text}>{param} {value}</Text>
            <Text style={styles.anal_text}>{date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TextInput style={styles.inpt} onChangeText={onChangeNewValue} placeholder={'Введите значение'}/>
                <Pressable style={styles.btn} onPress={addNewValues}>
                    <Text style={styles.text_btn}>Добавить</Text>
                </Pressable>
            </SafeAreaView>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View>
                    <Text style={{width: 80, textAlign: 'center'}}>{type}</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
            </View>
            <View style={styles.result}>
                {
                     values ?
                        <FlatList data={values}
                                  renderItem={({ item }) => (
                                      <TouchableOpacity>
                                          <DiaryItem param={item.v} date={item.date}/>
                                      </TouchableOpacity>)}/>
                        :
                        <Text style={styles.nothing}>Ничего не найдено</Text>
                }
            </View>
        </View>
    );
};

export default DiaryElement;