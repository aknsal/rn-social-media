/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Post } from "../components/post.component";
import { StatusBarView } from "../../../constants/statusBar/StatusBarHeightView.component";
import FABComponent from "../../../components/FAB";

const HomeScreen = ({}) => (
  <View style={styles.container}>
    <StatusBarView />
    <Post />
    <Text>I'm HomeScreen</Text>
    <FABComponent />
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
