import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const HomeScreen = ({navigation}) => {

  const openListScreen = () => {
    navigation.navigate('SelectAnimalType');
  }

  const openSignUp = () => {
    navigation.navigate('SignUpScreen');
  }

  const openSelectTypeDiet = () => {
    navigation.navigate('SelectAnimalTypeDiet');
  }

  const openAddAnimalScreen = () =>{
    navigation.navigate('AddAnimalScreen');
  }

  return (
    <TouchableWithoutFeedback accessible={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />

        <ImageBackground
          source={require("../../../assets/images/background.png")}
          style={styles.container}
        >
          <View style={styles.homeBar}>
            <TouchableOpacity>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="menu" size={32} color="#073021" />
              </View>
            </TouchableOpacity>

            <Text
              style={{ fontSize: 24, fontWeight: "bold", color: "#073021" }}
            >
              HOME
            </Text>

            <TouchableOpacity>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="person" size={32} color="#073021" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.9, backgroundColor: "#FBF6E9", height: "100%" },
              ]}
            ></View>

            <TouchableOpacity style={styles.button} onPress={openListScreen}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../../assets/images/cow.png")} // Substitua com o caminho correto da imagem
                  style={styles.image}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>LISTA DE ANIMAIS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={openAddAnimalScreen}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../../assets/images/add_cow.png")} // Substitua com o caminho correto da imagem
                  style={styles.image}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>ADCIONAR ANIMAL</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={openSelectTypeDiet}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../../assets/images/diet.png")} // Substitua com o caminho correto da imagem
                  style={styles.image}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>LISTA DE DIETAS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={openSignUp}>
              <View style={styles.iconContainer}>
              <MaterialIcons name="add" size={92} color="#073021" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>CADASTRAR USUÁRIO</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
