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
  FlatList,
  ToastAndroid,
} from "react-native";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { DietStorage } from "../../storage/storage";
import { fetchAndStoreDiets } from "../../services/dietService";
import Toast from "react-native-root-toast";

const DietScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  //Recebe as informações das outras paginas para utilizar como filtro
  const { animalStage, animalGoal } = route.params;

  //Abaixo temos a logica para pegar os dados da api e guardar no storage
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Essa função vem do service de animais
        await fetchAndStoreDiets(animalStage, animalGoal);
        setData(await DietStorage.getDiets());
      } catch (error) {
        // Mostrar o toast com a mensagem de erro
        Toast.show(`Erro: ${error.message}`, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: '#000000', // Fundo preto
          textColor: '#ffffff', // Texto branco
          opacity: 1
        });
        navigation.goBack();
      }
    };
  
    fetchData();
  }, []);

  const renderItem = ({ item }) => {

    return (
      <View style={styles.ContainerLinhaBranca}>
        <Text style={styles.TextoText}>{item.nome}</Text>
        <Text style={styles.TextoText}>{item.carbohydrates*1000}g</Text>
        <Text style={styles.TextoText}>{item.protein*1000}g</Text>
        <Text style={styles.TextoText}>{item.fat*1000}g</Text>
        <Text style={styles.TextoText}>{item.cms}Kg</Text>
      </View>
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
                color: "#073021",
                marginTop: 22,
                textAlign: "center",
              }}
            >
              DIETA E {"\n"}
              FORMULAÇÃO
            </Text>
            <TouchableOpacity onPress={() =>navigation.navigate("Home")}>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="home" size={32} color="#073021" />
              </View>
            </TouchableOpacity>
          </View>

          <Image source={require("../../../assets/images/trigo.png")} />

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#073021",
              marginTop: 32,
              textAlign: "center",
            }}
          >
            TIPO DA DIETA
          </Text>

          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.9, backgroundColor: "#FBF6E9", height: "100%" },
              ]}
            ></View>

            <View style={styles.ContainerHeader}>
              <Text style={styles.headerText}>ALIMENTO</Text>
              <Text style={styles.headerText}>CARB.</Text>
              <Text style={styles.headerText}>PROTEÍNAS</Text>
              <Text style={styles.headerText}>GORDURA</Text>
              <Text style={styles.headerText}>QTD.</Text>
            </View>
            
            <FlatList
              data={data.foods}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DietScreen;
