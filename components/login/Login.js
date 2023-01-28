import React from 'react';
import {Image, StyleSheet, View, Text, TextInput, SafeAreaView, Pressable} from "react-native";
import logo from "../main-page/logo.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        marginTop: 150,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 70
    },
    input: {
        borderWidth: 1,
        margin: 23,
        width: 300,
        height: 60,
        borderRadius: 30,
        textAlign: 'center',
    },

    text_btn: {
        fontSize: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        marginTop: 30,
        padding: 30,
        borderColor: '#7FB4B9',
        borderWidth: 3,
        backgroundColor: 'white',
    }
})
const Login = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [test, setTest] = React.useState(null)

    async function login_func() {
        let form = new FormData()
        form.append('username', email)
        form.append('password', password)
        await axios({
            method: "post",
            url: "http://37.140.198.87:8080/v1/user/jwt/login",
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(async function (response) {
                await AsyncStorage.setItem('token', response.data.access_token)
                console.log(await AsyncStorage.getItem('token'))
                navigation.navigate('MainPageSecond')
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.title}>Вход</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder={'Email'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
            </SafeAreaView>
            <Pressable onPress={login_func}>
                <Text style={styles.text_btn}>Войти</Text>
            </Pressable>
        </View>
    );
}
export default Login;