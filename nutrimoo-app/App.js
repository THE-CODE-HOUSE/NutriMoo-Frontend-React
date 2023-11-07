import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import ConfigScreen from './src/screens/ConfigScreen';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <ConfigScreen />
    </View>
  );
}
