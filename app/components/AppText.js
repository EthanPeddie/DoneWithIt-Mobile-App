import { View, Text, Platform, StyleSheet } from "react-native";
import React from "react";

export default function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fonFamilty: Platform.OS == "android" ? "Roboto" : "Avenir",
  },
});
