 import { View, StyleSheet, Image } from 'react-native'
 import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
 
 export default function ListingDetailScreen() {
   return (
     <View>
       <Image style={styles.image} source={require('../assets/jacket.jpg')} />
       <View style={styles.detailContainer}>
            <AppText style={styles.title}>Red jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
       </View>
       <View style={styles.userContainer} >
            <ListItem image={require('../assets/profile.jpeg')} 
                    title="Kaung Myat Thu"
                    subtitle="5 Listing"
            />
       </View>
     </View>
   )
 }
 const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 7
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    detailContainer: {
        margin: 13
    },
    userContainer: {
        marginVertical: 20
    }
 })