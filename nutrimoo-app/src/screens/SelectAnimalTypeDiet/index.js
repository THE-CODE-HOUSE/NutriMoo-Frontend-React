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

const SelectAnimalTypeDiet = ({navigation}) => {
  const openSelectGoal = (animalStage) => {
    const from = "Diet";
    navigation.navigate("SelectCowNutritionGoal", { animalStage, from });
  };

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
              <View style={{ backgroundColor: "transparent", margin: 20 }} >
                <MaterialIcons name="arrow-back" size={32} color="#073021" />
              </View>
            </TouchableOpacity>

            <Text
              style={{ fontSize: 24, fontWeight: "bold", color: "#073021", marginTop: 22}}
            >
              TIPO DE {'\n'}
              ANIMAL
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

            <View style={styles.teste}>
              <TouchableOpacity style={styles.button} onPress={() => openSelectGoal("Vaca em Lactação")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>VACA EM LACTAÇÃO</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => openSelectGoal("Bezerra/Novilha")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>BEZERRA/ NOVILHA</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.teste}>
              <TouchableOpacity style={styles.button} onPress={() => openSelectGoal("Vaca")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>VACA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => openSelectGoal("Boi")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>BOI</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.teste}>
              <TouchableOpacity style={styles.button} onPress={() => openSelectGoal("Touro")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>TOURO</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SelectAnimalTypeDiet;
