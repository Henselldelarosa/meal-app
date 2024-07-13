import React from 'react'
import  {View, FlatList, StyleSheet} from 'react-native'
import MealItem from './MealItem'

const MealsList = ({item}) => {

  const renderMealItem = (itemData) => {
    const item = itemData.item

    const mealItemPriops={
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }

    return(
      <MealItem
      {...mealItemPriops}
      />
    )
  }

  return (
    <View style={styles.container}>
       <FlatList
       data={item}
       keyExtractor={(item) => item.id}
       renderItem={renderMealItem}
       />
    </View>
   )
}

export default MealsList

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16
  },
})
