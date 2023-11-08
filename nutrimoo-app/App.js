import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import AddAnimalScreen from './src/screens/AddAnimal';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <AddAnimalScreen/>
    </View>
  );
}