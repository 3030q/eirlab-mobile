import React, {useEffect} from 'react';
import {
    TextBase,
    Text,
    View,
    StyleSheet,
    TextInput,
    SafeAreaView,
    Image,
    Pressable,
    FlatList,
    TouchableOpacity
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import invitro from './invitro.png'
import city_lab from './city-lab.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    search_area: {},
    inpt: {
        borderWidth: 1,
        margin: 23,
        width: 300,
        height: 60,
        borderRadius: 30,
        textAlign: 'center',
        borderColor: '#7FB4B9'
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
        marginLeft: 75
    },
    result: {
        flex: 1
    },
    anal: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 400,
        marginBottom: 10,
        paddingBottom: 30,
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 30,
        marginRight: 10,
    },
    title_text: {
        fontWeight: 'bold'
    },
    price: {
        fontSize: 20,
        color: "#7FB4B9"
    },
    lines: {
        flexDirection: 'column'
    },
    nothing: {
        marginTop: 100,
        fontSize: 20,
        fontWeight: "bold"
    }
})


const Search = ({navigation}) => {
    const [analyzes, setAnalyzes] = React.useState([])
    const [city, setCity] = React.useState('')
    const [value, onChangeValue] = React.useState('')
    const [isFetch, setIsFetch] = React.useState(false)

    const Item = ({name, price}) => (
        <View style={styles.anal}>
            {
                name.length % 3 === 0 ?
                <Image source={invitro} style={styles.logo}/> :
                <Image source={city_lab} style={styles.logo}/>
            }

            <View style={styles.lines}>
                <Text style={styles.title_text}>
                    {
                        name.length > 30
                            ?
                            name.replace(/(.{30})/g, "$1\n")
                            :
                            name
                    }</Text>
                <Text style={styles.price}>{price} руб.</Text>
            </View>
        </View>
    );

    function goToAnal({name, description, purpose, preparation, total_price, url}) {
        navigation.navigate('Anal', {
            name: name,
            description: description,
            purpose: purpose,
            preparation: preparation,
            total_price: total_price,
            url: url
        })
    }

    function getAnalyzes() {
        const response = axios.get('http://37.140.198.87:8080/v1/analysis',
            {
                params: {
                    city: city,
                    q: value
                }
            }).then(async function (response) {
            setAnalyzes(response.data)
            setIsFetch(true)
        }).catch(function (response) {
            //handle error
            console.log(response);
        })
        return response.data
    }

    return (
        <View style={styles.container}>
            <View style={styles.search_area}>
                <Text style={styles.title}>Поиск по анализам</Text>
                <SafeAreaView>
                    <TextInput style={styles.inpt} onChangeText={onChangeValue} placeholder={'Введите анализ'}/>
                    <RNPickerSelect
                        onValueChange={(value) => setCity(value)}
                        items={[
                            {label: 'Москва', value: 'Москва'},
                            {label: 'Екатеринбург', value: 'Екатеринбург'},
                            {label: 'Казань', value: 'Казань'},
                            {label: 'Тюмень', value: 'Тюмень'},
                            {label: 'Краснодар', value: 'Краснодар'},
                        ]}
                    />
                    <Pressable style={styles.btn} onPress={getAnalyzes}>
                        <Text style={styles.text_btn}>Поиск</Text>
                    </Pressable>
                </SafeAreaView>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View>
                    <Text style={{width: 80, textAlign: 'center'}}>Результат</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
            </View>
            <View style={styles.result}>
                {
                    isFetch ?
                        <FlatList data={analyzes}
                                  renderItem={({ item }) => (
                                      <TouchableOpacity onPress={() => navigation.navigate('Anal', {
                                          name:item.name,
                                          description: item.description,
                                          purpose: item.purpose,
                                          preparation: item.preparation,
                                          total_price: item.total_price,
                                          url:item.url
                                      })}>
                                          <Item name={item.name} price={item.total_price}/>
                                      </TouchableOpacity>)}/>
                        :
                        <Text style={styles.nothing}>Ничего не найдено</Text>
                }

                {/*{*/}

                {/*    analyzes ?*/}
                {/*        analyzes.map(analysis => {*/}
                {/*            return (*/}
                {/*                <FlatList*/}
                {/*                    data={analysis}*/}
                {/*                />*/}
                {/*        )*/}
                {/*        })*/}
                {/*        : <Text>Ничего нет</Text>*/}
                {/*}*/}
            </View>
        </View>
    );
};


export default Search;