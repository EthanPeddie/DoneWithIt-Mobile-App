import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ name, items, placeholder }) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
