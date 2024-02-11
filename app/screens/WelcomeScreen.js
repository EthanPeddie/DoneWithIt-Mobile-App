import { View, Text, ImageBackground,StyleSheet, Image } from 'react-native'
import React from 'react'

import AppButton from '../components/Button'

export default function WelcomeScreen() {
  return (
   <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={(require('../assets/logo-red.png'))} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.container}>

        <AppButton title='login' onPress={() => console.log('Tap')} />
        <AppButton title='register' color='secondary' onPress={() => console.log('Click')} />

      </View>
   </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  container: {
   padding: 20
  },
  tagLine: {
    paddingVertical: 10,
    fontWeight: '600',
    fontSize: 20
  }
})