import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, Pressable, Text, TextInput} from "react-native";
import logo from './logo.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
    logo: {
        width: 350,
        height: 350,
    },
    login_btn: {
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
const MainPage = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Pressable style={styles.login_btn} onPress={() => {
                navigation.navigate('Login')
            }}><Text style={styles.text}>Войти</Text></Pressable>
            <Pressable style={styles.login_btn}><Text style={styles.text}>Регистрация</Text></Pressable>
        </View>
    );
};

export default MainPage;