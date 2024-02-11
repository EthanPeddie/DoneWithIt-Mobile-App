import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

import AppText from './AppText'
import colors from '../config/colors'

export default function Card({image,title,subtitle}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: colors.white,
        overflow: 'hidden',
        marginBottom: 10
    },
    image: {
        width: "100%",
        height: 200
    },
    detailContainer: {
        padding: 15
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
   
})