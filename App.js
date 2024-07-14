import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverViewScreen from './screen/MealsOverViewScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import FavoriteScreen from './screen/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons'
// import FavoriteContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DraweNavigator = () => {

  return(
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor:'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#e4baa1'
    }}>
      <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        drawerIcon : ({color, size}) => (
          <Ionicons name='list' color={color} size={size}/>
        )
      }}
      />
      <Drawer.Screen
      name='Favorite'
      component={FavoriteScreen}
      options={{
        drawerIcon : ({color, size}) => (
          <Ionicons name='star' color={color} size={size}/>
        )
      }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
      {/* <FavoriteContextProvider> */}

      <Provider store={store}>

      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor:'white',
            contentStyle: {backgroundColor: '#3f2f25'}
          }}
          >
          <Stack.Screen
          name='Drawer'
          component={DraweNavigator}
          options={{
            headerShown: false
          }}
          />

          <Stack.Screen
          name='Meals'
          component={MealsOverViewScreen}
          />

          <Stack.Screen
          name='Details'
          component={MealDetailScreen}
          />
        </Stack.Navigator>


      </NavigationContainer>
    </Provider>
        {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({

});
