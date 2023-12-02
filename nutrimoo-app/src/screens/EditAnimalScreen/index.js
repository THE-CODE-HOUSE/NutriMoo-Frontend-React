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

const EditAnimalScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [errorMessage, setErrorMessage] = useState("");
  
  const vacaTeste = {
      "tag": "076000000000018",
      "breed": "Jersey",
      "stage": "Vaca em lactação",
      "gender": "Fêmea",
      "weight": 700,
      "goal": "Ganhar Peso",
      "status": {
        "heartRate": 53.55,
        "temperature": 38.49,
        "activityLevel": "Ativo",
        "feedConsumptionRate": 6.32
      },
      "pregnant": false,
      "fertile": true,
      "birthDate": {
        "$date": "2019-12-18T00:33:56.979Z"
      }
  };

  const animalTypes = [
    { key: "VL", value: "Vaca em lactação" },
    { key: "BN", value: "Bezerra/Novilha" },
    { key: "VA", value: "Vaca" },
    { key: "BO", value: "Boi" },
    { key: "TO", value: "Touro" },
  ];
  const animalTypesFemale = [
    { key: "VL", value: "Vaca em lactação" },
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
      { key: "NF", value: "Não fértil" },
    ],
    VA: [
      { key: "FE", value: "Fértil" },
      { key: "NF", value: "Não fértil" },
      { key: "PR", value: "Prenha" },
      { key: "NP", value: "Não prenha" },
    ],
    BO: [{ key: "IN", value: "Infértil" }],
    BN: [{ key: "NF", value: "Não fértil"}],
    VL: [
      { key: "FE", value: "Fértil" },
      { key: "NF", value: "Não fértil" },
    ],
  };
  const determineInitialStatusKey = (animal) => {
    if (animal.fertile && animal.gender === "Fêmea") {
      return animal.pregnant ? "PR" : "FE";
    } else {
      return "NF";
    }
  };
  
  const initialAnimalStatusKey = determineInitialStatusKey(vacaTeste);
  const initialAnimalTypeKey = getKeyByValue(animalTypes, vacaTeste.stage);
  const initialAnimalGoalKey = getKeyByValue(animalGoals, vacaTeste.goal);

  const genderBasedAnimalTypes = vacaTeste.gender === "Fêmea" ? animalTypesFemale : animalTypesMale;
  const [animalType, setAnimalType] = useState(initialAnimalTypeKey);
  const [animalStatus, setAnimalStatus] = useState(initialAnimalStatusKey);
  const [animalGoal, setAnimalGoal] = useState(initialAnimalGoalKey);
  var [weight, setWeight] = useState(vacaTeste.weight);
  const tag = vacaTeste.tag;
  
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
      
      //console.log(tag, animalTypeValue, fertile ,pregnant, weight, animalGoalValue);
      await updateAnimal(tag,animalTypeValue,fertile,pregnant,weight,animalGoalValue);
    } catch (error) {

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
            <TouchableOpacity>
              <View style={{ backgroundColor: "transparent", marginLeft: 20 }}>
                <MaterialIcons name="menu" size={32} color="#073021" />
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
                placeholder={tag}
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
                  onChangeText={(text) => setWeight(parseFloat(text))}
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
