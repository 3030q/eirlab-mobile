import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import logo from "./logo.png";

const styles = StyleSheet.create({
    logo: {
        width: 350,
        height: 350,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginTop: 30,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        padding: 30,
        borderColor: '#7FB4B9',
        borderWidth: 3,
        backgroundColor: 'white',
        width:300
    },
    text: {
        fontSize: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
const MainPageSecond = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Pressable style={styles.btn} onPress={() => {
                navigation.navigate('Search')
            }}><Text style={styles.text}>Поиск</Text></Pressable>
            <Pressable style={styles.btn} onPress={() => {
                navigation.navigate('Diary')
            }}><Text style={styles.text}>Дневник</Text></Pressable>
        </View>
    );
};

export default MainPageSecond;