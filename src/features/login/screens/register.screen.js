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
import {
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
} from "../components/textInput.component";
import { RegisterButton } from "../components/buttons.component";
import { LoginAccountNavigate } from "../components/touchable.component";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.accountScreen}>
      <View style={styles.accountOptions}>
        <Title style={{ fontSize: 28 }}> Create Account</Title>
        <Paragraph style={{ marginLeft: 9, fontSize: 18 }}>
          Please fill acurate details{" "}
        </Paragraph>
        <EmailInput />
        <PasswordInput />
        <ConfirmPasswordInput />
        <RegisterButton />
        <LoginAccountNavigate navigation={navigation} />
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
});
