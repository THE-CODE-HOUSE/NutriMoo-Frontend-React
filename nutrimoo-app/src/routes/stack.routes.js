import React, { useState, useEffect } from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { useAuth } from '../context/authContext';

import HomeScreen from "../screens/Home";
import SignInScreen from "../screens/SignIn";
import ListScreen from "../screens/ListScreen";
import SelectAnimalType from "../screens/SelectAnimalType";
import SelectCowNutritionGoal from "../screens/SelectCowNutritionGoal";
import SignUpScreen from "../screens/SignUp";

import { UserStorage } from '../storage/storage';

const StackRoutes = () => {

  const { isAuthenticated } = useAuth();
  

  return (
    <Navigator
      screenOptions={{
        headerShown: false, // Isso remove o cabeçalho em todas as telas
      }}
    >
      {isAuthenticated ? (
          <Screen name="Home" component={HomeScreen} />
        ) : (
          <Screen name="SignIn" component={SignInScreen} />
        )}
      <Screen name="List" component={ListScreen} />
      <Screen name="SelectAnimalType" component={SelectAnimalType} />
      <Screen name="SelectCowNutritionGoal" component={SelectCowNutritionGoal} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
    </Navigator>
  );
};
export default StackRoutes;
