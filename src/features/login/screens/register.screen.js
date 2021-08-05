/* @flow weak */

import React, { useState } from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { windowWidth } from "../../../utils/dimensions";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  Text,
  TouchableRipple,
} from "react-native-paper";
import styled from "styled-components";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.accountScreen}>
      <View style={styles.accountOptions}>
        <Title style={{ fontSize: 28 }}> Create Account</Title>
        <Paragraph style={{ marginLeft: 9, fontSize: 18 }}>
          Please fill acurate details{" "}
        </Paragraph>
        <TextInput
          label="Email*"
          style={styles.emailInput}
          mode="outlined"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={(email) => {
            setEmail(email);
            console.log(email);
          }}
          returnKeyType="next"
          autoCompleteType="email"
        />
        <TextInput
          label="Password*"
          style={styles.passwordInput}
          value={password}
          mode="outlined"
          secureTextEntry
          onChangeText={(password) => {
            setPassword(password);
            console.log(password);
          }}
          returnKeyType="next"
        />
        <TextInput
          label="Confirm Password*"
          style={styles.confirmPasswordInput}
          value={password}
          mode="outlined"
          secureTextEntry
          onChangeText={(confirmPassword) => {
            setConfirmPassword(confirmPassword);
            console.log(confirmPassword);
          }}
          onSubmitEditing={() => console.log(email, password)}
        />
        <Button
          style={styles.button}
          icon="lock-outline"
          mode="contained"
          contentStyle={styles.buttonContent}
          onPress={() => console.log("Pressed")}
        >
          Register
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text> Already have an account? </Text>
          <TouchableRipple
            onPress={() => navigation.navigate("Login Screen")}
            rippleColor="#77998c"
          >
            <Text style={{ color: "#3f6355", fontSize: 16 }}>Login</Text>
          </TouchableRipple>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  accountScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  accountOptions: {
    width: windowWidth - 50,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  buttonContent: {
    height: 45,
  },
  emailInput: {
    marginTop: 60,
  },
  passwordInput: {
    marginTop: 10,
  },
  confirmPasswordInput: {
    marginTop: 10,
    marginBottom: 40,
  },
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
    fontSize: 18,
  },
});
