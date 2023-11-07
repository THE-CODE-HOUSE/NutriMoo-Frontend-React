import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import HomeScreen from './src/screens/Home'


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <HomeScreen />
    </View>
  );
}
