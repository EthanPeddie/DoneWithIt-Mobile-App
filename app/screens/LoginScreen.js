import { Image, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <Image
              style={styles.logo}
              source={require("../assets/logo-red.png")}
            />
            <AppTextInput
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange}
              keyboardType="email-addresss"
              placeholder="Email address"
              textContentType="emailAddress"
            />
            <AppTextInput
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange}
              secureTextEntry
              placeholder="Enter your password"
              textContentType="password"
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
