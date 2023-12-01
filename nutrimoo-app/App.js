import React from "react";
import { View } from "react-native";
import ListScreen from "./src/screens/ListScreen";
import SignInScreen from "./src/screens/SignIn";
import SelectAnimalTypeDiet from "./src/screens/SelectAnimalTypeDiet";
import DietScreen from "./src/screens/Diet";
import SignUpScreen from "./src/screens/SignUp";
import AddAnimalScreen from "./src/screens/AddAnimal";
import SelectCowNutritionGoal from "./src/screens/SelectCowNutritionGoal";
import SelectAnimalType from "./src/screens/SelectAnimalType";
import AdvancedInfo from "./src/screens/AdvancedInfo";
import EditAnimalScreen from "./src/screens/EditAnimalScreen";
import HomeScreen from "./src/screens/Home";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/authContext";
import AnimalInfo from "./src/screens/AnimalInfo";

export default function App() {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <AdvancedInfo/>
      </View>
    </AuthProvider>
  );
}
