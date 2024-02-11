import { View,StyleSheet } from 'react-native'
import React from 'react'
import WelcomeScreen from './app/screens/WelcomeScreen'


export default function App() {
  return (
    <View style={styles.background}>
        <WelcomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
})