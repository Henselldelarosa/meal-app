import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { useNavigation } from '@react-navigation/native'



const CategoriesScreen = ({navigation}) => {

  const renderCategoryItem =(itemData) => {

    const handleNavigate = () => {
        navigation.navigate('Meals', {
          categoryId: itemData.item.id
        })
    }

    return (
    <CategoryGridTile
    title={itemData.item.title}
    color={itemData.item.color}
    onPress={handleNavigate}
    />
  )
  }

  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(itemData) => itemData.id}
    renderItem={renderCategoryItem}
    numColumns={2}

    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})
