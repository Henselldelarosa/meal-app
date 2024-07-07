import React from 'react'
import { Pressable, Text, View, StyleSheet,useWindowDimensions, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CategoryGridTile = ({title, color, onPress}) => {
  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()


  return (
    <View style={styles.gridItem}>
      <Pressable
      style={({pressed}) => [styles.button, pressed ? styles.buttonpressd : null]}
      android_ripple={{color: '#ccc'}}
      onPress={onPress}
      >
        <View style={[styles.innerContainer,  {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem:{
    flex:1,
    margin:16,
    height:150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor:'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width:0, height: 2},
    shadowRadius:8,
    overflow: Platform.OS === 'android'? 'hidden': ''
  },

  button:{
    flex:1
  },

  buttonpressd:{
    opacity: .5
  },

  innerContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    borderRadius:8
  },

  title:{
    fontWeight:'bold',
    fontSize:18,
  },
})
