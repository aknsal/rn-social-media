/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../features/login/screens/account.screen";

const Stack = createNativeStackNavigator();

const AccountNavigator = ({}) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Account Screen"
      component={AccountScreen}
    />
  </Stack.Navigator>
);

export default AccountNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
