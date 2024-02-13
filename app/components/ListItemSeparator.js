import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListItemSeparator() {
  return <View style={styles.seperate}></View>;
}

const styles = StyleSheet.create({
  seperate: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
