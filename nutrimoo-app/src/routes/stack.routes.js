import React, { useState, useEffect } from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import HomeScreen from "../screens/Home";
import SignInScreen from "../screens/SignIn";
import ListScreen from "../screens/ListScreen";
import SelectAnimalType from "../screens/SelectAnimalType";
import SelectCowNutritionGoal from "../screens/SelectCowNutritionGoal";
import SignUpScreen from "../screens/SignUp";
import SelectAnimalTypeDiet from '../screens/SelectAnimalTypeDiet';
import AnimalInfo from '../screens/AnimalInfo';
import AdvancedInfo from '../screens/AdvancedInfo';
import EditAnimalScreen from '../screens/EditAnimalScreen';

import { UserStorage } from '../storage/storage';
import "core-js/stable/atob";
import {jwtDecode} from 'jwt-decode';
import { useAuth } from '../context/authContext';


const StackRoutes = () => {

  const { isAuthenticated } = useAuth();
  const [isInitialAuthenticated, setIsInitialAuthenticated] = useState(false);
  

  useEffect(() => {
    const checkToken = async () => {
      const token = await UserStorage.getUser();
      console.log(token)
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const isTokenExpired = decodedToken.exp * 1000 < Date.now();

          if (!isTokenExpired) {
            setIsInitialAuthenticated(true);
          } else {
            // Token expirado, remover do armazenamento e manter desautenticado
            await UserStorage.removeUser();
          }
        } catch (error) {
          // Erro na decodificação do token (token inválido, etc.)
          await UserStorage.removeUser();
          console.log(error)
        } 
      }
    };

    checkToken();
  }, []);
  
  const isNowAuthenticated = isAuthenticated || isInitialAuthenticated;
  console.log(isInitialAuthenticated)

  return (
    <Navigator
      screenOptions={{
        headerShown: false, // Isso remove o cabeçalho em todas as telas
      }}
    >
      {isNowAuthenticated ? (
          <Screen name="Home" component={HomeScreen} />
        ) : (
          <Screen name="SignIn" component={SignInScreen} />
        )}
      <Screen name="List" component={ListScreen} />
      <Screen name="SelectAnimalType" component={SelectAnimalType} />
      <Screen name="SelectCowNutritionGoal" component={SelectCowNutritionGoal} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SelectAnimalTypeDiet" component={SelectAnimalTypeDiet} />
      <Screen name="AnimalInfo" component={AnimalInfo} />
      <Screen name="AdvancedInfo" component={AdvancedInfo} />
      <Screen name="EditAnimalScreen" component={EditAnimalScreen} />
    </Navigator>
  );
};
export default StackRoutes;
