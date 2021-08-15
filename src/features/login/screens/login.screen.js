/* @flow weak */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
import { EmailInput, PasswordInput } from "../components/textInput.component";
import {
  LoginButton,
  GoogleButton,
  FacebookButton,
} from "../components/buttons.component";
import {
  ForgotPassword,
  CreateAccount,
} from "../components/touchable.component";

const Or = styled(Text)`
  position: relative;
  top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.accountScreen}>
      <View style={styles.accountOptions}>
        <Title style={{ fontSize: 28 }}> Welcome Back, </Title>
        <Paragraph style={{ marginLeft: 9, fontSize: 18 }}>
          Login To Continue{" "}
        </Paragraph>
        <EmailInput />
        <PasswordInput login />
        <LoginButton navigation={navigation} />
        <ForgotPassword />

        <View style={{ alignItems: "center" }}>
          <Or>Or Continue with Social Handles </Or>
        </View>

        <GoogleButton />
        <FacebookButton />
        <CreateAccount navigation={navigation} />
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
