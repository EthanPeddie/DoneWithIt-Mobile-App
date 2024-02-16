import { View, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function PickerItem({ label }) {
  return (
    <View>
      <AppText style={styles.text}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
