import React, { useState } from "react";
import { Text, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Enter your email" />
    </Screen>
  );
}
