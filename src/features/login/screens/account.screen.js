/* @flow weak */

import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const AccountScreen = ({}) => (
  <View style={styles.accountScreen}>
    <View style={styles.accountOptions}>
      <Button
        style={styles.button}
        color="#3f6355"
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>
      <Button
        style={styles.button}
        icon="lock-outline"
        color="#3f6355"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Register
      </Button>
    </View>
  </View>
);

export default AccountScreen;

const styles = StyleSheet.create({
  accountScreen: {
    flex: 1,
    backgroundColor: "#dcfaee",
    justifyContent: "center",
    alignItems: "center",
  },
  accountOptions: {
    width: "50%",
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
});
