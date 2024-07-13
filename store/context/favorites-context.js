import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
})

const FavoriteContextProvider =({children})=> {
  const [favoriteMealIds, setFavoriteMealsId] = useState([])

  const addFavorite = (id) => {
    setFavoriteMealsId((current) => [...current, id])
  }

  const removeFavorite = (id) => {
    setFavoriteMealsId((current) =>
      current.filter((mealId) => mealId !== id)
    )
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return (<FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>)
}

export default FavoriteContextProvider
