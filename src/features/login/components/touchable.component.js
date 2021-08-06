/* @flow weak */

import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

export const ForgotPassword = ({}) => (
  <TouchableRipple
    onPress={() => console.log("Pressed")}
    rippleColor="#77998c"
    style={styles.forgotPasswordContainer}
  >
    <Text style={styles.forgotPassword}>Forgot Password</Text>
  </TouchableRipple>
);

export const CreateAccount = ({ navigation }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    }}
  >
    <Text> Do not Have an account? </Text>
    <Pressable
      style={{ height: 40, justifyContent: "center" }}
      onPress={() => navigation.navigate("Register Screen")}
    >
      <Text style={{ color: "#3f6355", fontSize: 16, fontWeight: "bold" }}>
        Create One
      </Text>
    </Pressable>
  </View>
);

export const LoginAccountNavigate = ({ navigation }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    }}
  >
    <Text> Already have an account? </Text>
    <Pressable
      style={{ height: 40, justifyContent: "center" }}
      onPress={() => navigation.navigate("Login Screen")}
    >
      <Text style={{ color: "#3f6355", fontSize: 16, fontWeight: "bold" }}>
        Login
      </Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    width: "50%",

    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  forgotPassword: {
    fontSize: 14,
  },
});
