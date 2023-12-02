import React, { useState, useEffect } from "react";
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
  FlatList,
} from "react-native";

import { ImageBackground } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { AnimalStorage } from "../../storage/storage";
import { fetchAndStoreAnimals } from "../../services/animalService";

const ListScreen = ({navigation,route}) => {
  const [data, setData] = useState([]);
  const {animalStage, animalGoal} = route.params;
  console.log(animalStage);
  console.log(animalGoal);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAndStoreAnimals();
      console.log(await AnimalStorage.getAnimals());

      setData(await AnimalStorage.getAnimals());
    };

    fetchData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      console.log("sadadsad");
      const storedData = await AnimalStorage.getAnimals();
      console.log("sss" + storedData);
      if (storedData !== null) {
        setData(storedData);
      }
    };

    loadData();
  }, []);

  const openInfo = (animalData) => {
    console.log(animalData);
    navigation.navigate('AnimalInfo',{animalData});
  };

  const renderItem = ({ item }) => {

    let cor1, cor2;

    // Definindo as cores baseadas no gênero
    if (item.gender === "Macho") {
        cor1 = "#afe3eb";
        cor2 = "#c3f1f8";
    } else if (item.gender === "Fêmea") {
        cor2 = "#f8d7da";
        cor1 = "#f5b7b1";
    } else { // Indefinido ou outro valor
        cor2 = "#f0f0f0";
        cor1 = "#d6d6d6";
    }

    if (((item.goal === animalGoal) && (item.stage === animalStage)) || animalStage === "ALL") {
      return (
        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: cor1 }]}
          onPress={() => openInfo(item)}
        >
          <View style={[styles.rectangle, { backgroundColor: cor2 }]}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}> {item.tag} </Text>
            <Text style={{ fontSize: 16 }}> {item.breed} </Text>
            <Text style={{ fontSize: 16 }}> {item.stage} </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      // Se o item não tem o goal desejado, retorna null para não renderizar nada
      return null;
    }
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
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="arrow-back" size={32} color="#073021" />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 45,
                color: "#073021",
              }}
            >
              LISTA DE ANIMAIS
            </Text>
          </View>

          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.9, backgroundColor: "#FBF6E9", height: "100%" },
              ]}
            >
              <FlatList
                style={styles.listAnimals}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.tag.toString()}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const cowData = async () => {
  return [
    {
      id: 1,
      tag: "0001",
      breed: "Holandes",
      stage: "Novilha",
      goal: "manter peso",
      cor1: "#afe3eb",
      cor2: "#c3f1f8",
    },
    {
      id: 2,
      tag: "0001",
      breed: "Gemana",
      stage: "Boi",
      goal: "Manter Peso",
      cor1: "#afe3eb",
      cor2: "#c3f1f8",
    },
    {
      id: 3,
      tag: "0001",
      breed: "Brasileira",
      goal: "Manter Peso",
      stage: "VACA",
      cor1: "#afe3eb",
      cor2: "#c3f1f8",
    },
    {
      id: 4,
      tag: "0001",
      breed: "Brasileira",
      stage: "Vaca em Lactação",
      goal: "Ganhar Peso",
      cor1: '#ebb9bb',
      cor2: '#f9c6c7',
    },
    {
      id: 5,
      tag: "0001",
      breed: "Brasileira",
      stage: "Vaca",
      cor1: '#ebb9bb',
      cor2: '#f9c6c7',
    },
    {
      id: 6,
      tag: "0001",
      breed: "Brasileira",
      stage: "Vaca",
      cor1: "#afe3eb",
      cor2: "#c3f1f8",
    },
    {
      id: 7,
      tag: "0001",
      breed: "Brasileira",
      stage: "Vaca",
      cor1: '#cbd171',
      cor2: '#f4fc79',
    },
    // mais itens...
  ];
};

export default ListScreen;
