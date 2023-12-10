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
  Modal,
  Button,
} from "react-native";

import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { updateAnimal } from "../../services/animalService";
import Toast from "react-native-root-toast";

const EditAnimalScreen = ({navigation,route}) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [errorMessage, setErrorMessage] = useState("");
  //Recebe da da pagina anterior os dados do animal
  const {animalData} = route.params;
  
  const goBack = () => {
    navigation.navigate("Home");
  };

  const animalTypes = [
    { key: "VL", value: "Vaca em Lactação" },
    { key: "BN", value: "Bezerra/Novilha" },
    { key: "VA", value: "Vaca" },
    { key: "BO", value: "Boi" },
    { key: "TO", value: "Touro" },
  ];
  const animalTypesFemale = [
    { key: "VL", value: "Vaca em Lactação" },
    { key: "BN", value: "Bezerra/Novilha" },
    { key: "VA", value: "Vaca" }
  ];
  const animalTypesMale = [
    { key: "BO", value: "Boi" },
    { key: "TO", value: "Touro" }
  ];
  
  const animalGoals = [
    { key: "GA", value: "Ganhar Peso" },
    { key: "MA", value: "Manter Peso" },
    { key: "PE", value: "Perder Peso" },
  ];
  const optionsByGender = {
    TO: [
      { key: "FE", value: "Fértil" },
      { key: "NF", value: "Não Fértil" },
    ],
    VA: [
      { key: "FE", value: "Fértil" },
      { key: "NF", value: "Não Fértil" },
      { key: "PR", value: "Prenha" },
      { key: "NP", value: "Não Prenha" },
    ],
    BO: [{ key: "IN", value: "Infértil" }],
    BN: [{ key: "NF", value: "Não Fértil"}],
    VL: [
      { key: "FE", value: "Fértil" },
      { key: "NF", value: "Não Fértil" },
    ],
  };
  const determineInitialStatusKey = (animal) => {
    if (animal.fertile && animal.gender === "Fêmea") {
      return animal.pregnant ? "PR" : "FE";
    } else {
      return "NF";
    }
  };
  
  const initialAnimalStatusKey = determineInitialStatusKey(animalData);
  const initialAnimalTypeKey = getKeyByValue(animalTypes, animalData.stage);
  const initialAnimalGoalKey = getKeyByValue(animalGoals, animalData.goal);

  const genderBasedAnimalTypes = animalData.gender === "Fêmea" ? animalTypesFemale : animalTypesMale;
  const [animalType, setAnimalType] = useState(initialAnimalTypeKey);
  const [animalStatus, setAnimalStatus] = useState(initialAnimalStatusKey);
  const [animalGoal, setAnimalGoal] = useState(initialAnimalGoalKey);
  var [weight, setWeight] = useState(animalData.weight);
  
  function getKeyByValue(array, value) {
    const item = array.find(item => item.value === value);
    return item ? item.key : null;
  }
  
  function getValueByKey(array, key) {
    const item = array.find(item => item.key === key);
    return item ? item.value : null;
  }
  
  const handleEdit = async() => {
    if (weight <= 15) {
      setErrorMessage("Peso inválido. O peso está abaixo do mínimo esperado.");
      return; 
    } else if (weight >= 2000) {
      setErrorMessage("Peso inválido. O peso está acima do máximo permitido.");
      return; 
    }
    setErrorMessage("");
    try{
      var fertile = false;
      var pregnant = false;
      if(animalStatus == "FE" || animalStatus == "NP"){
        fertile = true;
      } else if (animalStatus == "PR"){
        fertile = true;
        pregnant = true;
      }
      const animalTypeValue = getValueByKey(animalTypes, animalType);
      const animalGoalValue = getValueByKey(animalGoals, animalGoal);
      
      await updateAnimal(animalData.tag,animalTypeValue,fertile,pregnant,weight,animalGoalValue);

      Toast.show("Animal editado com sucesso.");
      setTimeout(() => {
        goBack();
      }, 1500);

    } catch (error) {
      Toast.show("Animal Não foi Editado",error);
    }
  };
  
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />

        <ImageBackground
          source={require("../../../assets/images/background.png")}
          style={styles.image}
        >
          <View style={styles.homeBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ backgroundColor: "transparent", marginLeft: 20 }}>
              <MaterialIcons name="arrow-back" size={32} color="#073021" />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: '20%',
                color: "#073021",
              }}
            >
              EDITAR ANIMAL
            </Text>
          </View>

          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.8, backgroundColor: "white", height: "100%" },
              ]}
            ></View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                color: "#073021",
                fontWeight: "bold",
                alignSelf: "flex-start",
                marginLeft: 32.5,
              }}
            >
              ID
            </Text>
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
                placeholder={animalData.tag}
                autoCorrect={false}
                keyboardType="default"
                style={styles.textinputWithIcon}
                maxLength={40}
                editable={false}
              />
            </View>

            <Text style={styles.contText}>ESTÁGIO</Text>
            <SelectList
                setSelected={setAnimalType}
                boxStyles={styles.selectList}
                dropdownStyles={{ backgroundColor: "white" }}
                data={genderBasedAnimalTypes}
                search={false}
                placeholder={"Selecione um tipo de animal"}
                defaultOption={{ key: animalType, value: getValueByKey(genderBasedAnimalTypes, animalType) }}
              />


            <Text style={styles.contText}>STATUS</Text>
            {animalType === "BO" || animalType === "BN" ? (
              <View style={styles.shadowBox}>
              <TextInput
                placeholder={optionsByGender[animalType][0].value}
                autoCorrect={false}
                keyboardType="default"
                style={styles.textinputWithIcon}
                maxLength={40}
                editable={false}
              />
            </View>
            ) : (
              <SelectList
                setSelected={setAnimalStatus}
                boxStyles={styles.selectList}
                dropdownStyles={{ backgroundColor: "white" }}
                search={false}
                data={optionsByGender[animalType]}
                placeholder="Selecione um status"
                defaultOption={{ key: animalStatus, value: getValueByKey(optionsByGender[animalType], animalStatus) }}
              />
            )}

            <Text style={styles.contText}>PESO</Text>
            <View style={styles.shadowBox}>
              {
                <MaterialCommunityIcons
                  name="weight-kilogram"
                  size={24}
                  color="#073021"
                  style={styles.iconStyle}
                />
              }
               <TextInput
                  value={weight.toString()}
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={(text) => setWeight(text === '' ? 0 : parseFloat(text))}
                  style={styles.textinputWithIcon}
                  maxLength={40}
                />
            </View>

            <Text style={styles.contText}>META</Text>
            <SelectList
              setSelected={setAnimalGoal}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              search={false}
              data={animalGoals}
              placeholder="Selecione uma meta"
              defaultOption={{ key: animalGoal, value: getValueByKey(animalGoals, animalGoal) }}
            />

            {errorMessage ? (
              <Text style={{ color: "red", marginTop: 10, fontWeight: "400" }}>
                {errorMessage}
              </Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>EDITAR</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EditAnimalScreen;
