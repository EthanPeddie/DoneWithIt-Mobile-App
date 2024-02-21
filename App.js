import React from "react";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="Kaung Myat Thu"
        image={require("./app/assets/profile.jpeg")}
        subtitle="Hello World"
        onPress={() => console.log("tag")}
      />
      <ListItem
        title="Kaung Myat Thu"
        image={require("./app/assets/profile.jpeg")}
      />
    </Screen>
  );
}
