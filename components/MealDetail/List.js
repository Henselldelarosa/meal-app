import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const List = ({mapplable}) => {
  return (
    mapplable.map((ingredient) => (
    <View  style={styles.listItem} key={ingredient}>
        <Text style={styles.text}>{ingredient}</Text>
    </View>
        ))

  )
}

export default List

const styles = StyleSheet.create({
  listItem:{
    borderRadius: 6,
    backgroundColor: '#e2b497',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12
  },

  text:{
    color:'#351401',
    textAlign: 'center'
  }
})
