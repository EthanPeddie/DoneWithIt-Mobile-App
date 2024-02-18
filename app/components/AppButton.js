import { View, Text, StyleSheet } from "react-native";
import React from "react";

import colors from "../config/colors";

export default function AppButton() {
  return (
    <View>
      <Text style={styles.button}>AppButton</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
  },
});
