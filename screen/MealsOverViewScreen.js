import React,{useLayoutEffect} from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealsList from '../components/mealsList/MealsList'


const MealsOverViewScreen = ({route, navigation}) => {
  const categoryId = route.params.categoryId

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  })

  useLayoutEffect(() =>{
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

    navigation.setOptions({
      title:categoryTitle
    })
  },[categoryId, navigation])

  return <MealsList item={displayMeals}/>
}

export default MealsOverViewScreen
