import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View>
      <Text 
      style={{
        color:'black',
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold',
        letterSpacing:2,
        lineHeight:20,
        textAlign:'left',
        padding:0

      
      }}>
           Card 
           hello word!- "Hi, I just completed my first React Native Assignment" . 
      </Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})