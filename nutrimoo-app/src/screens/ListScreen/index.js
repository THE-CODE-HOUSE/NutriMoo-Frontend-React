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

const ListScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await cowData();
      console.log(apiData);

      AnimalStorage.setAnimals(apiData);

      setData(apiData);
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.customButton, { backgroundColor: item.cor1 }]}
    >
      <View style={[styles.rectangle, { backgroundColor: item.cor2 }]}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}> ID </Text>
        <Text style={{ fontSize: 16 }}> Raça </Text>
        <Text style={{ fontSize: 16 }}> Estado </Text>
      </View>
    </TouchableOpacity>
  );

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
                <MaterialIcons name="menu" size={32} color="#073021" />
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
                keyExtractor={(item) => item.id.toString()}
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
      cor1: "#afe3eb",
      cor2: "#c3f1f8",
    },
    {
      id: 2,
      tag: "0001",
      breed: "Gemana",
      stage: "Boi",
      cor1: '#ebb9bb',
      cor2: '#f9c6c7',
    },
    {
      id: 3,
      tag: "0001",
      breed: "Brasileira",
      stage: "Vaca",
      cor1: "#afe3eb",
      cor2: "#c3f1f8",
    },
    {
      id: 4,
      tag: "0001",
      breed: "Brasileira",
      stage: "Vaca",
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
