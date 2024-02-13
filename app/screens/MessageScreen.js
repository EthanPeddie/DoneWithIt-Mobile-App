import { FlatList, StyleSheet } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profile.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/profile.jpeg"),
  },
];

export default function MessageScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Selected", item)}
            renderRightActions={() => <ListItemDeleteAction />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
