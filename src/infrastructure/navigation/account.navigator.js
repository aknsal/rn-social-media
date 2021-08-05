/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../features/login/screens/login.screen";
import RegisterScreen from "../../features/login/screens/register.screen";

const Stack = createNativeStackNavigator();

const AccountNavigator = ({}) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Login Screen"
      component={LoginScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Register Screen"
      component={RegisterScreen}
    />
  </Stack.Navigator>
);

export default AccountNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
