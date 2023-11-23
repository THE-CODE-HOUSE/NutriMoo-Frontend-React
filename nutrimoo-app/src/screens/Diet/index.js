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

const DietScreen = () => {
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
                <MaterialIcons name="arrow-back" size={32} color="#073021" />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#073021",
                marginTop: 22,
                textAlign: "center",
              }}
            >
              DIETA E {"\n"}
              FORMULAÇÃO
            </Text>
            <TouchableOpacity>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="menu" size={32} color="#073021" />
              </View>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../../assets/images/trigo.png")}
            style={styles.icon}
          />

          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.9, backgroundColor: "#FBF6E9", height: "100%" },
              ]}
            ></View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#073021",
                marginTop: 22,
                textAlign: "center",
              }}
            >
              TIPO DA DIETA
            </Text>
            <View style={{marginTop: 50}}>

                {/* CABEÇALHO */}

                <View style={styles.ContainerLinhaBranca}>
                          <View style={styles.ContainerHeader}>
                                    <View style={{flexDirection:'column',alignItems:'center'}}>
                                            <Text style={styles.headerText}>ALIMENTO</Text>
                                            <Text style={styles.TextoText}>RAÇÃO</Text>
                                    </View>

                                    <View style={{flexDirection:'column',alignItems:'center'}}>
                                            <Text style={styles.headerText}>CARB.</Text>
                                            <Text style={styles.TextoText}>100g</Text>
                                    </View>

                                    <View style={{flexDirection:'column',alignItems:'center'}}>
                                            <Text style={styles.headerText}>PROTEÍNAS</Text>
                                            <Text style={styles.TextoText}>20g</Text>
                                    </View>

                                    <View style={{flexDirection:'column',alignItems:'center'}}>
                                            <Text style={styles.headerText}>GORDURA</Text>
                                            <Text style={styles.TextoText}>400g</Text>
                                    </View>
                                    
                                    <View style={{flexDirection:'column',alignItems:'center'}}>
                                            <Text style={styles.headerText}>QTD.</Text>
                                            <Text style={styles.TextoText}>1000g</Text>
                                    </View>
                        
                            </View>

                              <View style={[styles.ContainerLinhaVerde, style= {marginTop: 70}]}>
                                    </View>

                                    <View style={[styles.ContainerLinhaVerde, style={marginTop: 70, borderBottomRightRadius: 30, borderBottomLeftRadius: 30}]}> 
                                    </View>

                                                         
                </View>

                {/* LISTA, PODE FAZER COM CONTAINER, DEPOIS ALTERO */}

            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DietScreen;