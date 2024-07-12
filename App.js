import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverViewScreen from './screen/MealsOverViewScreen';
import MealDetailScreen from './screen/MealDetailScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor:'white',
          contentStyle: {backgroundColor: '#3f2f25'}
        }}
      >
        <Stack.Screen
        name=' Catergories'
        component={CategoriesScreen}
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
    </>
  );
}

const styles = StyleSheet.create({

});
