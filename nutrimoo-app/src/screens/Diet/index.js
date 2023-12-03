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
import { useState , useEffect } from "react";
import { DietStorage } from "../../storage/storage";
import { fetchAndStoreDiets } from "../../services/dietService";


const DietScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const { animalStage, animalGoal } = route.params;
  console.log(animalStage);
  console.log(animalGoal);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAndStoreDiets(animalStage, animalGoal);
      console.log(await DietStorage.getDiets());

      setData(await DietStorage.getDiets());
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.TextoText}>RAÇÃO</Text>
      <Text style={styles.TextoText}>100g</Text>
      <Text style={styles.TextoText}>20g</Text>
      <Text style={styles.TextoText}>400g</Text>
      <Text style={styles.TextoText}>1000g</Text>
    </View>
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
            <TouchableOpacity>
              <View style={{ backgroundColor: "transparent", margin: 20 }}>
                <MaterialIcons name="menu" size={32} color="#073021" />
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
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DietScreen;
