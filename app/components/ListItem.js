import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./AppText";
import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ListItem({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 4,
  },
  subtitle: {
    color: colors.medium,
  },
});
