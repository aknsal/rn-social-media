import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/infrastructure/navigation/index";

export default function App() {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
