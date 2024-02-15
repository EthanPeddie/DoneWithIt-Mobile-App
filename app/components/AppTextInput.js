import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={defaultStyle.colors.medium}
        style={{ marginRight: 10 }}
      />
      <TextInput style={defaultStyle.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: defaultStyle.colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
});

export default AppTextInput;
