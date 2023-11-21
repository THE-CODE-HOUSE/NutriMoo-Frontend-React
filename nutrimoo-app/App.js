import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import SelectAnimalType from './src/screens/SelectAnimalTypeDiet';
import SelectAnimalTypeDiet from './src/screens/SelectAnimalTypeDiet';
import DietScreen from './src/screens/Diet';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <DietScreen />
    </View>
  );
}
