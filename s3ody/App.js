import { StyleSheet, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "./pages/Home";
import Commponant from "./pages/Commponant";
import Sendcach from "./pages/Sendcach";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Commponant"
          component={Commponant}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Sendcach"
          component={Sendcach}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
