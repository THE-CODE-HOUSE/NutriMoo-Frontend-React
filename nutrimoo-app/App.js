import React from 'react';
import { View } from 'react-native';
import ListScreen from './src/screens/ListScreen';
import AnimalInfo from './src/screens/Animal_Info';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <AnimalInfo />
    </View>
  );
}
