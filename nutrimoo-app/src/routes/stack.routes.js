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
import AddAnimalScreen from '../screens/AddAnimal';
import DietScreen from '../screens/Diet';

import { UserStorage } from '../storage/storage';
import "core-js/stable/atob";
import {jwtDecode} from 'jwt-decode';
import { useAuth } from '../context/authContext';


const StackRoutes = () => {

  //Abaixo temos o estado de autenticação que vem do nosso contexto (Ler o arquivo authContext.js)
  const { isAuthenticated } = useAuth();
  //E o estado que checa se o usauario esta inicialmente autenticado
  const [isInitialAuthenticated, setIsInitialAuthenticated] = useState(false);
  
//Esse useEffect é utilizado para checar a validade do token
  useEffect(() => {
    const checkToken = async () => {
      //Token puxado do storage
      const token = await UserStorage.getUser();
      if (token) {
        try {
          //Utilizamos o jwtDecode para decodificar o token
          const decodedToken = jwtDecode(token);
          //Checamos se a data de expiração do token, em milésimos, é < que a data atual
          const isTokenExpired = decodedToken.exp * 1000 < Date.now();

          //Se não tiver expirado o usuario é autenticado
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
  
  //Isso é utilizado para uma solução que tive para que sempre que abrir o app seja checado se o usuario está autenticado
  const isNowAuthenticated = isAuthenticated || isInitialAuthenticated;

  return (
    <Navigator
      screenOptions={{
        headerShown: false, // Isso remove o cabeçalho em todas as telas
      }}
    >
      {/*Caso estaja autenticado já abre diretamente a tela de Home senão vai para a tela de login*/}
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
      <Screen name="AddAnimalScreen" component={AddAnimalScreen} />
      <Screen name="DietScreen" component={DietScreen} />
    </Navigator>
  );
};
export default StackRoutes;
