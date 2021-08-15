/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./account.navigator";
import HomeScreenNavigator from "./home.navigator";

const isAuthenticated = true;

const Navigation = ({}) => (
  <NavigationContainer>
    {isAuthenticated ? <HomeScreenNavigator /> : <AccountNavigator />}
  </NavigationContainer>
);

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
