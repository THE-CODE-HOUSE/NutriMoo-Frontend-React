import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import SelectAnimalType from './src/screens/SelectAnimalTypeDiet';
import SelectAnimalTypeDiet from './src/screens/SelectAnimalTypeDiet';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <SelectAnimalTypeDiet />
    </View>
  );
}
