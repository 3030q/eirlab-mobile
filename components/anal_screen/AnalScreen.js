import React from 'react';
import invitro from '../search/invitro.png'
import city_lab from '../search/city-lab.png'
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
    TouchableOpacity, ScrollView, Linking
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    logo: {
        width: 440,
        height: 300,
        marginTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    title_sub: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    textus: {
        marginLeft: 20
    },
    cost: {
        borderWidth: 2,
        borderColor: "#7FB4B9",
        padding: 10,
        width: 120,
        alignItems: "center",
        textAlign: "center",
        marginLeft: 153,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: "#7FB4B9",
        color: "white"
    }
})
const AnalScreen = ({route, navigation}) => {
    const {name, description, purpose, preparation, total_price, url} = route.params
    return (
        <View style={styles.container}>
            {
                name.length % 3 === 0 ?
                    <Image source={invitro} style={styles.logo}/> : <Image source={city_lab} style={styles.logo}/>

            }
            <ScrollView>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.title_sub}>Описание</Text>
                <Text style={styles.textus}>{description}</Text>
                <Text style={styles.title_sub}>Назначение</Text>
                <Text style={styles.textus}>{purpose}</Text>
                <Text style={styles.title_sub}>Подготовка к анализу</Text>
                <Text style={styles.textus}>{preparation}</Text>
                <Text style={styles.cost} onPress={() => {
                    Linking.openURL(url)
                }
                }>{total_price} руб.</Text>
            </ScrollView>
        </View>
    );
};

export default AnalScreen;