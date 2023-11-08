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
} from "react-native";

import styles from "./styles";
import { CustomDropDown } from "../../components/CustomDropDown";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";


const AddAnimalScreen = () => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />

        <ImageBackground
          source={require("../../../assets/images/background.png")}
          style={styles.image}
        >
        <View style={styles.homeBar}>
          <TouchableOpacity>
            <View style={{ backgroundColor: "transparent" , margin: 20}}>
            <MaterialIcons name="menu" size={32} color="#073021" />
            </View>
          </TouchableOpacity>
          <Text style= {{ fontSize: 24 , fontWeight: "bold", marginLeft: 45, color: '#073021' }}>ADICIONAR ANIMAL</Text>
        </View>


          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.8, backgroundColor: "white", height: "100%" },
              ]}
            >
            </View>

            <Text style={styles.contText}>ID</Text>
            <View style={styles.shadowBox}>
              {
                <MaterialCommunityIcons
                  name="identifier"
                  size={24}
                  color="#073021"
                  style={styles.iconStyle}
                />
              }
              <TextInput
                placeholder="Número de Identificação"
                autoCorrect={false}
                keyboardType="nome"
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>

            <CustomDropDown title={'ESTÁGIO'} zIndex={2000} titleColor={'#073021'} />

            <CustomDropDown title={'RAÇA'} zIndex={2000} titleColor={'#073021'} />
            
            
            <Text style={styles.contText}>Peso</Text>
            <View style={styles.shadowBox}>
              {
                <MaterialCommunityIcons
                  name="cow"
                  size={24}
                  color="#073021"
                  style={styles.iconStyle}
                />
              }
              <TextInput
                placeholder="Peso em Kg"
                autoCorrect={false}
                keyboardType="nome"
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>


            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>CONCLUÍDO</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddAnimalScreen;