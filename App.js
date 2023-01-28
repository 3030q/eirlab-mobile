import { StyleSheet, Text, View } from 'react-native';
import MainPage from "./components/main-page/MainPage";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Login from "./components/login/Login";
import Search from "./components/search/Search";
import MainPageSecond from "./components/main-page/MainPageSecond";
import AnalScreen from "./components/anal_screen/AnalScreen";
import Diary from "./components/Diary/Diary";
import DiaryElement from "./components/DiaryElement/DiaryElement";


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="MainPage">
              <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }}/>
              <Stack.Screen name="MainPageSecond" component={MainPageSecond} options={{ headerShown: false }}/>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
              <Stack.Screen name="Anal" component={AnalScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Diary" component={Diary} options={{ headerShown: false }}/>
              <Stack.Screen name="DiaryElement" component={DiaryElement} options={{ headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App
