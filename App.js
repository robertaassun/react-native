import { StatusBar } from "expo-status-bar";
import React from "react";
import {SafeAreaView, StyleSheet, Text } from "react-native";
import Login from "./src/views/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import ListaProdutos from "./src/views/ListaProdutos"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Login'
        component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name='ListaProdutos'
        component={ListaProdutos}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc8dd',
  }
})
export default App;