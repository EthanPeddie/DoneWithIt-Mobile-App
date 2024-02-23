import { StyleSheet } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, setTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
