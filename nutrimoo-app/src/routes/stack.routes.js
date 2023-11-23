import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import HomeScreen from "../screens/Home";
import ListScreen from "../screens/ListScreen";
import SelectAnimalType from "../screens/SelectAnimalType";
import SelectCowNutritionGoal from "../screens/SelectCowNutritionGoal";
import SignUpScreen from "../screens/SignUp";

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false, // Isso remove o cabeçalho em todas as telas
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="List" component={ListScreen} />
      <Screen name="SelectAnimalType" component={SelectAnimalType} />
      <Screen name="SelectCowNutritionGoal" component={SelectCowNutritionGoal} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
    </Navigator>
  );
};
export default StackRoutes;
