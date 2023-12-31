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
  //Recebe as informações das outras paginas para utilizar como filtro
  const {animalStage, animalGoal} = route.params;

  useEffect(() => {
    const fetchData = async () => {
      await fetchAndStoreAnimals();
      //Pega todas as informações do storage
      setData(await AnimalStorage.getAnimals());
    };

    fetchData();
  }, []);

  //Aqui os dados são filtrados
  const filteredData = data.filter(item => {
    const stageMatch = item.stage === animalStage;
    const goalMatch = item.goal === animalGoal;
    return stageMatch && goalMatch;
  });

  const openInfo = (animalData) => {
    navigation.navigate('AnimalInfo',{animalData});
  };

  //Componentes da lista
  const renderItem = ({ item }) => {

    let cor1, cor2;

    // Definindo as cores baseadas no gênero
    if (item.stage ==="Bezerra/Novilha") {
        cor2 = "#fcee6f";
        cor1 = "#f5df1b";
    } else if(item.gender === "Macho") {
        cor1 = "#afe3eb";
        cor2 = "#c3f1f8";
    } else if (item.gender === "Fêmea") {
        cor2 = "#f8d7da";
        cor1 = "#f5b7b1";
    }

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

            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View style={{ backgroundColor: "transparent", marginLeft: 20 }}>
              <MaterialIcons name="home" size={32} color="#073021" />
              </View>
            </TouchableOpacity>
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
                data={animalStage === "ALL" ? data: filteredData}
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

export default ListScreen;
