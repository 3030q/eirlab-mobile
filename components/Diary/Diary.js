import React, {useState} from 'react';
import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import invitro from "../search/invitro.png";

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

    anal_text: {

    },
    nothing: {
        marginTop: 100,
        fontSize: 20,
        fontWeight:"bold"
    }
})

const Diary = ({navigation}) => {
    const [analType, onChangeAnalType] = useState('')
    const [analTypeValue, onChangeAnalTypeValue] = useState('')
    const [analTypes, setAnalTypes] = useState([])
    const [analyze, setAnalyze] = useState([])
    const [currentAnalyzeType, setCurrentAnalyzeType] = useState('')
    const [currentAnalyzeTypeValue, setCurrentAnalyzeTypeValue] = useState('')
    const [value, setValue] = useState('')

    const DiaryItem = ({type, value}) => (
        <View style={styles.anal}>
            <Text style={styles.anal_text}>{type}</Text>
        </View>
    );
    function addAnalType() {
        setAnalTypes([...analTypes, {type:analType, value: analTypeValue}])
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TextInput style={styles.inpt} onChangeText={onChangeAnalType} placeholder={'Введите тип анализа'}/>
                <TextInput style={styles.inpt} onChangeText={onChangeAnalTypeValue} placeholder={'Введите ед.изм'}/>
                <Pressable style={styles.btn} onPress={addAnalType}>
                    <Text style={styles.text_btn}>Добавить</Text>
                </Pressable>
            </SafeAreaView>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View>
                    <Text style={{width: 80, textAlign: 'center'}}>Анализы</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
            </View>
            <View style={styles.result}>
                {
                    analTypes ?
                        <FlatList data={analTypes}
                                  renderItem={({ item }) => (
                                      <TouchableOpacity onPress={() =>navigation.navigate("DiaryElement", {
                                          type: item.type,
                                          value: item.value
                                      })}>
                                          <DiaryItem type={item.type} value={item.value}/>
                                      </TouchableOpacity>)}/>
                        :
                        <Text style={styles.nothing}>Ничего не найдено</Text>
                }
            </View>
        </View>
    );
}

export default Diary;