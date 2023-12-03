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

const SelectCowNutritionGoal = ({navigation, route}) => {
  
  const { animalStage, from } = route.params;

  const openList = (animalGoal) => {
    navigation.navigate('List', {animalStage, animalGoal});
  }
  const openDietList = (animalGoal) =>{
    navigation.navigate('DietScreen', {animalStage, animalGoal});
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="arrow-back" size={32} color="#073021" />
              </View>
            </TouchableOpacity>

            <Text
              style={{ fontSize: 24, fontWeight: "bold", color: "#073021", marginTop: 22}}
            >
              META
            </Text>

            <TouchableOpacity onPress={() =>navigation.navigate("Home")}>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="home" size={32} color="#073021" />
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

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => from === "Animal" ? openList("Ganhar Peso") : openDietList("Ganhar Peso")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>GANHAR PESO</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => from === "Animal" ? openList("Manter Peso") : openDietList("Manter Peso")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>MANTER PESO</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => from === "Animal" ? openList("Perder Peso") : openDietList("Perder Peso")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>PERDER PESO</Text>
                </View>
              </TouchableOpacity>
            </View>


          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SelectCowNutritionGoal;
