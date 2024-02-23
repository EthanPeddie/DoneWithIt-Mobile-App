import { View, StyleSheet } from "react-native";
import React from "react";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return (
    <View>
      <AppText style={styles.message}>{error}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    color: "red",
  },
});

export default ErrorMessage;
