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
  Button,
} from "react-native";

import { ImageBackground } from "react-native";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const ListScreen = () => {


  return (
    <TouchableWithoutFeedback accessible={false}>
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ImageBackground
        source={require("../../../assets/images/background.png")}
        style={styles.container}>

            <View style={styles.homeBar}>
            
                  <TouchableOpacity>
                    <View style={{ backgroundColor: "transparent" , margin: 20}}>
                        <MaterialIcons name="menu" size={32} color="#073021" />
                    </View>
                  </TouchableOpacity>
                
                  <Text style= {{ fontSize: 24 , fontWeight: "bold", marginLeft: 45, color: '#073021' }}>LISTA DE ANIMAIS</Text>
                
            </View>


            <View style={styles.retangulo}>
                  <View style={[ styles.retangulo,{ opacity: .9, backgroundColor: "#FBF6E9", height: "100%" }]}>
                    
                    <View style={{flexDirection: 'row', height: '100%'}}>
                      
                      <TouchableOpacity  style={[styles.customButton, {backgroundColor: '#afe3eb'}]} >
                        <View style={[styles.rectangle, { backgroundColor: '#c3f1f8'}]}>                  
                            <Text style = {{fontWeight: 'bold', fontSize: 20}}> ID </Text>
                            <Text style = {{fontSize: 16}}> Raça </Text>
                            <Text style = {{fontSize: 16}}> Estado </Text>
                        </View>         
                      </TouchableOpacity>

                      <TouchableOpacity  style={[styles.customButton, {backgroundColor: '#ebb9bb'}]} >
                        <View style={[styles.rectangle, { backgroundColor: '#f9c6c7'}]}>                  
                            <Text style = {{fontWeight: 'bold', fontSize: 20}}> ID </Text>
                            <Text style = {{fontSize: 16}}> Raça </Text>
                            <Text style = {{fontSize: 16}}> Estado </Text>
                        </View>         
                      </TouchableOpacity>
                    
                    </View>

              </View>
            
            </View>

      </ImageBackground>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
};

export default ListScreen;