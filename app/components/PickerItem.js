import { View, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
