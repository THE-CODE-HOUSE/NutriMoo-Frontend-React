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
  Button
} from "react-native";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const HomeScreen = () => {
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
                <MaterialIcons name="menu" size={32} color="gray" />
              </View>
            </TouchableOpacity>

            <Text style={{ fontSize: 24, fontWeight: "bold" }}>HOME</Text>

            <TouchableOpacity>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="person" size={32} color="gray" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.retangulo}>
          <View style={[ styles.retangulo,{ opacity: .9, backgroundColor: "#FBF6E9", height: "100%" }]}></View>

          <TouchableOpacity style = {styles.botao}>

            <Image source={require("../../../assets/images/cow.png")} style={{width: "30%"}} />
            
            <View style= {styles.corview}>
                <Text style = {styles.textobotao}>
                    LISTA DE ANIMAL
                </Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style = {styles.botao}>

            <MaterialIcons name="add" size={92} color="#073021" />
            
            <View style= {styles.corview}>
                <Text style = {styles.textobotao}>
                    CADASTRO USUÁRIOS
                </Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style = {styles.botao}>

            <Image source={require("../../../assets/images/diet.png")} style={{width: "30%"}} />
            
            <View style= {styles.corview}>
                <Text style = {styles.textobotao}>
                    LISTA DE DIETAS
                </Text>
            </View>

          </TouchableOpacity>
          
        </View>

      </ImageBackground>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;