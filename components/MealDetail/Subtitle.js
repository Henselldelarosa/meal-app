import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Subtitle = ({children}) => {
  return (
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>

  )
}

export default Subtitle

const styles = StyleSheet.create({

    subtitle:{
      color:'white',
      fontSize: 18,
      fontWeight:'bold',
      color:'#e2b497',
      textAlign:'center',
    },

    subtitleContainer:{
      borderBottomColor:'#e2b497',
      borderBottomWidth: 2,
      margin: 6,
      padding:6,
      marginHorizontal:12
    },
})
