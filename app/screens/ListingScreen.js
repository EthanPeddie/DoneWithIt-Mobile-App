import { View, StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    subtitle: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch is in best condintion",
    subtitle: "50",
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen>
      <View style={styles.screen}>
        <ListItem
          title="Kaung Myat Thu"
          subtitle="Junior React Native Developer"
          image={require("../assets/profile.jpeg")}
        />
      </View>
      <View style={styles.screen}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={"$" + item.subtitle}
              image={item.image}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.white,
  },
});
