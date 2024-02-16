import { View, StyleSheet, Modal, Button, FlatList } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({ icon, items, placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyle.colors.medium}
              style={{ marginRight: 10 }}
            />
          )}
          <AppText>{placeholder}</AppText>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="chevron-down"
              size={25}
              color={defaultStyle.colors.medium}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PickerItem label={item.label} />}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: defaultStyle.colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default AppPicker;
