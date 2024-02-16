import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppTextInput
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-addresss"
          placeholder="Email address"
          textContentType="emailAddress"
        />
        <AppTextInput
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          placeholder="Enter your password"
          textContentType="password"
        />
        <AppButton title="Login" onPress={() => console.log(email, password)} />
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
