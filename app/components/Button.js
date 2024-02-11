import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../config/colors'

export default function AppButton({title,onPress,color="primary"}) {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        width: 300,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        color: colors.white
    }
})