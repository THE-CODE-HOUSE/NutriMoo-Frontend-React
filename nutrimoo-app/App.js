import React from 'react';
import { View } from 'react-native';
import ListScreen from './src/screens/ListScreen';
import SignInScreen from './src/screens/SignIn';
import SignUpScreen from './src/screens/SignUp';
import AddAnimalScreen from './src/screens/AddAnimal'
import SelectCowNutritionGoal from './src/screens/SelectCowNutritionGoal';
import SelectAnimalType from './src/screens/SelectAnimalType';
import AdvancedInfo from './src/screens/AdvancedInfo';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <AdvancedInfo />
    </View>
  );
}


