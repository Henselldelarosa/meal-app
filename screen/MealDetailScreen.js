import React, {useContext, useLayoutEffect} from 'react'
import {Image, StyleSheet, Text,View, ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'
import { FavoriteContext } from '../store/context/favorites-context'

const MealDetailScreen = ({route, navigation}) => {
  const favoriteMealsctx = useContext(FavoriteContext)

  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const mealIsFovorite = favoriteMealsctx.ids.includes(mealId)


  const handleChangeFavorite = () => {
    if(mealIsFovorite) {
      favoriteMealsctx.removeFavorite(mealId)
    }else{
      favoriteMealsctx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
        <IconButton
        onPress={handleChangeFavorite}
        color={'white'}
        Icon={mealIsFovorite ? 'star' : 'star-outline'}
        size={24}
        />)
      }
    })
  },[handleChangeFavorite, navigation])

  return (
    <ScrollView style={styles.scroll}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title} >{selectedMeal.title}</Text>

      <View style={styles} >
        <MealDetails
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          textStyle={styles.textStyle}
        />
      </View>

      <View style={styles.listOutterContainer}>
        <View style={styles.listContainer}>

          <Subtitle>Ingridients</Subtitle>
          <List mapplable={selectedMeal.ingredients}/>

          <Subtitle>Steps</Subtitle>
          <List mapplable={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  scroll:{
    marginBottom: 32
  },
  image:{
    width:'100%',
    height:350
  },

  title:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:24,
    margin:8
  },

  textStyle:{
    color:'white'
  },

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
    marginHorizontal:24
  },

  listOutterContainer:{
    alignItems:'center'
  },
  listContainer:{
    width:'80%',
    maxWidth:''
  },
})
