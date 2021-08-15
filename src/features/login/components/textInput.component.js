/* @flow weak */

import React, { useState } from "react";
import { TextInput } from "react-native-paper";

export const EmailInput = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <TextInput
      label="Email"
      style={{ marginTop: 60 }}
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
  );
};

export const PasswordInput = ({ login }) => {
  const [password, setPassword] = useState("");
  return (
    <TextInput
      label="Password"
      style={{ marginTop: 10, marginBottom: 10 }}
      value={password}
      mode="outlined"
      secureTextEntry
      onChangeText={(password) => {
        setPassword(password);
        console.log(password);
      }}
      returnKeyType={login ? "done" : "next"}
      onSubmitEditing={() => console.log("Pressed")}
    />
  );
};

//----------onSubmitEditing only on confirm password for Register and password in login screen

export const ConfirmPasswordInput = ({}) => {
  const [password, setConfirmPassword] = useState("");
  return (
    <TextInput
      label="Confirm Password"
      style={{ marginBottom: 40 }}
      value={password}
      mode="outlined"
      secureTextEntry
      onChangeText={(confirmPassword) => {
        setConfirmPassword(confirmPassword);
        console.log(confirmPassword);
      }}
      onSubmitEditing={() => console.log(email, password)}
    />
  );
};
