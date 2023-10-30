import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <SignInScreen />
    </View>
  );
}
