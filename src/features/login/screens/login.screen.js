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

const LoginScreen = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.accountScreen}>
      <View style={styles.accountOptions}>
        <Title style={{ fontSize: 28 }}> Welcome Back, </Title>
        <Paragraph style={{ marginLeft: 9, fontSize: 18 }}>
          Login To Continue{" "}
        </Paragraph>
        <TextInput
          label="Email"
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
          label="Password"
          style={styles.passwordInput}
          value={password}
          mode="outlined"
          secureTextEntry
          onChangeText={(password) => {
            setPassword(password);
            console.log(password);
          }}
          onSubmitEditing={() => console.log(email, password)}
        />
        <Button
          style={styles.button}
          icon="login"
          mode="contained"
          contentStyle={styles.buttonContent}
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>

        <TouchableRipple
          onPress={() => console.log("Pressed")}
          rippleColor="#77998c"
          style={styles.forgotPasswordContainer}
        >
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableRipple>
        <View style={{ alignItems: "center", height: 16 }}>
          <View
            style={{ width: "80%", height: 1, backgroundColor: "grey" }}
          ></View>
        </View>
        <Button
          style={styles.button}
          icon="google"
          mode="contained"
          color="white"
          contentStyle={styles.buttonContent}
          onPress={() => console.log("Pressed")}
        >
          Sign in with Google
        </Button>
        <Button
          style={styles.button}
          icon="facebook"
          mode="contained"
          color="#4267B2"
          contentStyle={styles.buttonContent}
          onPress={() => console.log("Pressed")}
        >
          Sign in with Facebook
        </Button>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text> Do not Have an account? </Text>
          <TouchableRipple
            onPress={() => console.log("Pressed")}
            rippleColor="#77998c"
          >
            <Text style={{ color: "#3f6355", fontSize: 16 }}>Create One</Text>
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
    marginBottom: 30,
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
