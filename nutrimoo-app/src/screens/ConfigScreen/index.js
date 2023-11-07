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

const ConfigScreen = () => {


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
          <Text style= {{ fontSize: 24 , fontWeight: "bold", marginLeft: 45, color: '#073021' }}>CONFIGURAÇÕES</Text>
        </View>


        <View style={styles.retangulo}>
          <View style={[ styles.retangulo,{ opacity: .9, backgroundColor: "#FBF6E9", height: "100%" }]}></View>
        
          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <Image
                source={require("../../../assets/images/perfil.png")}
                style={styles.logo}
            />
            <View style={{ marginLeft: 12.5 }}>
                <Text style={{ fontSize: 25, color: '#073021', fontWeight: "bold" }}>
                JOÃO CLEBER
                </Text>
                <Text style={{ fontSize: 15, color: '#073021', textAlign: 'center'}}>
                Fazenda Cleber
                </Text>
            </View>
            </View>

            <Text style={{ fontSize: 30, color: '#073021', fontWeight: "bold", marginTop: "5%",  }}>
            GERAL
            </Text>

          <TouchableOpacity style = {styles.botao}>

            <MaterialIcons name="account-circle"size={50} color="#073021" style={{margin:20, marginTop: 30}} />
            
            <View style= {styles.corview}>
                <Text style = {styles.textobotao}>
                    CONFIGURAÇÕES DE USUÁRIO
                </Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity style = {styles.botao}>

            <MaterialIcons name="payments"size={50} color="#073021" style={{margin:20, marginTop: 30}} />

            <View style= {styles.corview}>
                <Text style = {styles.textobotao}>
                    MÉTODOS DE PAGAMENTO
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.botao}>

            <MaterialIcons name="card-membership"size={50} color="#073021" style={{margin:20, marginTop: 30}} />

            <View style= {styles.corview}>
                <Text style = {styles.textobotao}>
                        GERENCIAR ASSINATURA
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.botao}>

            <MaterialIcons name="headset-mic"size={50} color="#073021" style={{margin:20, marginTop: 30}} />

            <View style= {styles.corview}>
                <Text style = {styles.textobotao}>
                SUPORTE        AVALIAÇÃO, MEIOS DE CONTATO,         TERMOS
                </Text>
            </View>
        </TouchableOpacity>
    


        </View>

      </ImageBackground>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
};

export default ConfigScreen;