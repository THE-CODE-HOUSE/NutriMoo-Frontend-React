import React from 'react';
import { View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import SignUpScreen from './src/screens/SignUp';


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <SignUpScreen />
    </View>
  );
}

