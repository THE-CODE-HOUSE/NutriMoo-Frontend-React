import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import SignUpScreen from './src/screens/SignUp';
import AddAnimalScreen from './src/screens/AddAnimal'
import SelectCowNutritionGoal from './src/screens/SelectCowNutritionGoal';
import SelectAnimalType from './src/screens/SelectAnimalType';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <SelectCowNutritionGoal />
    </View>
  );
}


