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
  
  const { animalStage } = route.params;
  
  console.log(animalStage);


  const openList = (animalGoal) => {
    console.log(animalStage);
    navigation.navigate('List', {animalStage, animalGoal});
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

            <TouchableOpacity>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="menu" size={32} color="#073021" />
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
              <TouchableOpacity style={styles.button} onPress={() => openList("Ganhar Peso")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>GANHAR PESO</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => openList("Manter Peso")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>MANTER PESO</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => openList("Perder Peso")}>
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
