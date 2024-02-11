import { View,StyleSheet } from 'react-native'
import React from 'react'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Card from './app/components/Card'


export default function App() {
  return (
    <View style={
      {
      backgroundColor: "#f8f4f4",
      padding: 15,
      paddingTop: 100
    }
      }>
       <Card image={require('../my-app/app/assets/jacket.jpg')} title="Red jacket for sale!" subtitle="$100" />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
})