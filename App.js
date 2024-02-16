import React, { useState } from "react";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { id: 1, label: "Car" },
  { id: 2, label: "House" },
  { id: 3, label: "Apple" },
  { id: 4, label: "Cat" },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Enter your email" />
    </Screen>
  );
}
