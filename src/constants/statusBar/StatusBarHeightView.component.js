/* @flow weak */

import React from "react";
import { StatusBar, View } from "react-native";

export const StatusBarView = ({}) => (
  <View style={{ height: StatusBar.currentHeight }} />
);
