/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm HomeScreen</Text>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
