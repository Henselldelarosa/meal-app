import React from 'react'
import {Image, Pressable, StyleSheet, Text, View, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'
const MealItem = ( {id, title, imageUrl, duration, complexity, affordability, onPress}) => {

  const navigation = useNavigation()

  const handleMealSelect = () => {

    navigation.navigate('Details', {
      mealId : id
    })
  }



  return (
    <View style={styles.outterContainer}>

      <Pressable
        style={({pressed}) => [styles.button, pressed ? styles.buttonpressd : null]}
        android_ripple={{color: '#ccc'}}
        onPress={handleMealSelect}
      >
        <View style={styles.innerContainer}>
          <View>
          <Image style={styles.image} source={{uri: imageUrl}}/>
          <Text style={styles.title}>{title}</Text>
        </View>

          <MealDetails
          complexity={complexity}
          duration={duration}
          affordability={affordability}
          />
        </View>
      </Pressable>

    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  outterContainer:{
    margin:16,
    borderRadius:8,
    backgroundColor:'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width:0, height: 2},
    shadowRadius:8,
    overflow: Platform.OS === 'android'? 'hidden': ''
  },

  innerContainer: {
    borderRadius:8,
    overflow:'hidden'
  },

  image:{
    width:'100%',
    height:200
  },

  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    margin:8
  },

  button:{
    flex:1
  },

  buttonpressd:{
    opacity: .5
  },

})
