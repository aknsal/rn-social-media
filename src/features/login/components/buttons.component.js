/* @flow weak */

import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const LoginButton = ({}) => (
  <Button
    style={styles.button}
    icon="login"
    mode="contained"
    contentStyle={styles.buttonContent}
    onPress={() => console.log("Pressed")}
  >
    Login
  </Button>
);

export const RegisterButton = ({}) => (
  <Button
    style={styles.button}
    icon="lock-outline"
    mode="contained"
    contentStyle={styles.buttonContent}
    onPress={() => console.log("Pressed")}
  >
    Register
  </Button>
);

export const GoogleButton = ({}) => (
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
);

export const FacebookButton = ({}) => (
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
);

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  buttonContent: {
    height: 45,
  },
});
