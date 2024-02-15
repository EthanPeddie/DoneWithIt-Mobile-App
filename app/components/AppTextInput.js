import { View, StyleSheet, TextInput, Platform } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={colors.medium}
        style={{ marginRight: 10 }}
      />
      <TextInput style={styles.appText} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  appText: {
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
});

export default AppTextInput;
