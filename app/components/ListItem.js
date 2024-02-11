import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

import AppText from './AppText'
import colors from '../config/colors'

export default function ListItem({image,title,subtitle}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    textContainer: {
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 4
    },
    subtitle: {
        color: colors.medium
    }
})