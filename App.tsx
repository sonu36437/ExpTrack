import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import RootNavigator from "./src/Navigation/RootNavigator";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack=createNativeStackNavigator();

export default function App() {
  StatusBar.setHidden(true);

 
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name ="root"component={RootNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
 
  
  );
}
