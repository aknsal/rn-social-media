import { StatusBar as StatusBarExpo } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigator from "./src/infrastructure/navigation/index";

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3f6355",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <Navigator />
        <StatusBarExpo style="auto" />
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
