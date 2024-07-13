import React, { useContext } from 'react'
import MealsList from '../components/mealsList/MealsList'
import { FavoriteContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import { StyleSheet, Text, View } from 'react-native'

const FavoriteScreen = () => {
  const favoriteMealsctx = useContext(FavoriteContext)

  const favoriteMeals = MEALS.filter( meal => favoriteMealsctx.ids.includes(meal.id))


  if(favoriteMeals.length === 0) {
    return(
    <View style={styles.noMealsContainer}>
      <Text style={styles.noMealsText}>You Have No Favorite Meals Yet</Text>
    </View>
    )
  }
  return (
    <MealsList item={favoriteMeals}/>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  noMealsContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  noMealsText:{
    fontSize:24,
    fontWeight:'bold',
    color:'white'
  }
})
