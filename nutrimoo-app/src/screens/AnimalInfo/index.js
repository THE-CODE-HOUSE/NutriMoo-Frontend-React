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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert } from "react-native";
import Toast from "react-native-root-toast";
import { deleteAnimal } from "../../services/animalService";

const AnimalInfo = ({ navigation,route }) => {

  const {animalData} = route.params;
  console.log(animalData.weight);

  const openEditAnimal = () => {
    //navigation.navigate('EditAnimalScreen');
    console.log("Tela de editar aberta!");
    navigation.navigate('EditAnimalScreen',{animalData});
  };

  const openAdvancedInfo = () => {
    navigation.navigate('AdvancedInfo',{animalData});
  };

  const goBack = () => {
    navigation.goBack();
  };

  const showConfirmationDialog = () => {
    Alert.alert(
      "Remover animal",
      "Essa ação não poderá ser desfeita",
      [
        {
          text: "Cancelar",
          onPress: () => Toast.show("Animal não foi removido."),
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: async () => {
            try {
              await deleteAnimal(animalData.tag);
              Toast.show("Animal removido com sucesso.");
              setTimeout(() => {
                goBack();
              }, 1500); // Ajuste o tempo conforme necessário
            } catch (error) {
              Toast.show("Falha ao remover animal.");
              console.error(error);
            }
          }
        },
      ],
      { cancelable: false }
    );
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const getStatusText = (animal) => {
    if (animal.fertile) {
      return animal.pregnant ? "Prenha e Fértil" : "Fértil";
    } else {
      return "Não Fértil";
    }
  };



  



  return (
    <TouchableWithoutFeedback accessible={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true}/>

        <ImageBackground
          source={require("../../../assets/images/background.png")}
          style={styles.container}
        >
          <View style={styles.homeBar}>
            <TouchableOpacity
              style={{ marginTop: 30, marginLeft: 20 }}
              onPress={goBack}
            >
              <View style={{ backgroundColor: "transparent" }}>
                <MaterialIcons name="arrow-back" size={32} color="#073021" />
              </View>
            </TouchableOpacity>
            <Image
              style={{ marginLeft: "25%", marginTop: "10%", height: "100%" }}
              source={require("../../../assets/images/logo_nm.png")}
            />
          </View>

          <Text style={{ fontSize: 40, fontWeight: "bold" }}>{animalData.tag}</Text>
          <Text style={{ fontSize: 16 }}>{animalData.breed}</Text>

          <Image
            style={{}}
            source={require("../../../assets/images/vaca_triste.png")}
          />

          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.9, backgroundColor: "#FBF6E9", height: "55%" },
              ]}
            >
              <View
                style={{
                  marginLeft: "65%",
                  backgroundColor: "#FBF6E9",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 500,
                  height: "12.5%",
                  width: "13%",
                  marginTop: -20,
                  resizeMode: "contain",
                  elevation: 5,
                }}
              >
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={openEditAnimal}
                >
                  <MaterialCommunityIcons
                    size={27}
                    name="square-edit-outline"
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    Editar
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: "2.5%" }}>
                <View style={styles.titletext}>
                  <Text style={styles.titletext}>Estágio:</Text>
                  <Text style={styles.textobotao}>
                    {animalData.stage}
                  </Text>
                </View>

                <View>
                  <Text style={styles.titletext}>Data de Nascimento:</Text>
                  <Text style={styles.textobotao}>
                    {formatDate(animalData.birthDate)}
                  </Text>
                </View>

                <View>
                  <Text style={styles.titletext}>
                    Peso:
                  </Text>
                  <Text style={styles.textobotao}>{animalData.weight} kg</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.titletext}>Status:</Text>
                  
                  <TouchableOpacity
                    style={{
                      backgroundColor: "grey",
                      width: "35%",
                      height: "40%",
                      elevation: 10,
                      borderRadius: 25,
                      alignSelf: "center",
                      marginLeft: "5%",
                      marginTop: "-1%",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "#EAE3BD" }}>
                      Lactação Vazia
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FF897D",
                      width: "20%",
                      height: "40%",
                      elevation: 10,
                      borderRadius: 25,
                      alignSelf: "center",
                      marginLeft: "5%",
                      marginTop: "-1%",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      Prenhe
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: "row", height: "100%" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#BA1A1A",
                    borderRadius: 25,
                    width: "30%",
                    height: "10%",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 10,
                  }}
                  onPress={showConfirmationDialog}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    Remover animal
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#345A48",
                    borderRadius: 25,
                    marginLeft: "10%",
                    width: "30%",
                    height: "10%",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 10,
                  }}
                  onPress={openAdvancedInfo}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    + Infos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AnimalInfo;
