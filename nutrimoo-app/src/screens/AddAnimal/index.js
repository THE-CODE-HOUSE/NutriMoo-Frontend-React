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
  ToastAndroid,
} from "react-native";

import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectList } from "react-native-dropdown-select-list";
import { addAnimal } from "../../services/animalService";

const AddAnimalScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [animalType, setAnimalType] = React.useState("VL");
  const [animalBreed, setAnimalBreed] = React.useState("VL");
  const [tag, setTag] = React.useState("");
  const [weight, setWeight] = React.useState(0.0);
  const regexRFID = /^076\d{12}$/;
  const [errorMessage, setErrorMessage] = useState("");

  

  const animalTypes = [
    { key: "VL", value: "Vaca em lactação" },
    { key: "BN", value: "Bezerra/Novilha" },
    { key: "VA", value: "Vaca" },
    { key: "BO", value: "Boi" },
    { key: "TO", value: "Touro" },
  ];

  const animalBreeds = [
    { key: "HO", value: "Holandesa" },
    { key: "JE", value: "Jersey" },
    { key: "GU", value: "Guernsey" },
    { key: "AB", value: "Aberdeen Angus" },
    { key: "HE", value: "Hereford" },
    { key: "CH", value: "Charolês" }
  ];

  function getAnimalTypeValueByKey(keyToFind){
    const animalTypeEntry = animalTypes.find(({key})=> key ===keyToFind);
    return animalTypeEntry ? animalTypeEntry.value : null;
  }

  function getAnimalBreedValueByKey(keyToFind){
    const animalBreedsEntry = animalBreeds.find(({key})=> key ===keyToFind);
    return animalBreedsEntry ? animalBreedsEntry.value : null;
  }

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  const handleAdd = async() => {
    if(tag === "" || !regexRFID.test(tag) ){
      setErrorMessage(
        tag === ""
        ? "Por favor, insira o ID do animal."
        : "ID Inválido. Verifique se está no formato correto."
      )
      return;
    }
    if (weight <= 15) {
      setErrorMessage("Peso inválido. O peso está abaixo do mínimo esperado.");
      return; 
    } else if (weight >= 2000) {
      setErrorMessage("Peso inválido. O peso está acima do máximo permitido.");
      return; 
    }
    setErrorMessage("");
    try{
      const animalBreedValue = getAnimalBreedValueByKey(animalBreed);
      const animalTypeValue = getAnimalTypeValueByKey(animalType);
      var gender = "Fêmea";
      if(animalType == "BO"|| animalType == "TO"){
        gender = "Macho";
      }
    
      await addAnimal(tag, animalTypeValue, animalBreedValue, gender, weight, date);
      navigation.goBack();
      ToastAndroid.show("Animal Adicionado com Sucesso!", ToastAndroid.SHORT);
  
    }catch (error) {
      if (error.message === "A tag já existe") {
        setErrorMessage("A tag já está em uso. Por favor, tente novamente.");
    }else{
      setErrorMessage("Erro ao Adicionar Animal. Por favor, tente novamente.");
      console.log(error);
    }
    } finally {
    }
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
                marginLeft: 45,
                color: "#073021",
              }}
            >
              ADICIONAR ANIMAL
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
                placeholder="Número de Identificação"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={(text)=> setTag(text)}
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>

            <Text style={styles.contText}>ESTÁGIO</Text>
            <SelectList
              setSelected={setAnimalType}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              data={animalTypes}
              search={false}
              placeholder={"Selecione um departamento"}
              defaultOption={{ key: "VL", value: "Vaca em lactação" }}
            />

            <Text style={styles.contText}>RAÇA</Text>
            <SelectList
              setSelected={setAnimalBreed}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              data={animalBreeds}
              search={false}
              placeholder={"Selecione um departamento"}
              defaultOption={{ key: "JE", value: "Jersey" }}
            />

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
                placeholder="Peso em Kg"
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={(text)=> setWeight(text)}
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>

            <Text style={styles.contText}>DATA DE NASCIMENTO</Text>
            <TouchableOpacity
              style={{
                width: "85%",
                height: 50,
                marginTop: 10,
                borderRadius: 20,
                backgroundColor: "white",
                elevation: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => showMode("date")}
            >
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  maximumDate={new Date()}
                  minimumDate={new Date(1970, 1, 1)}
                />
              )}

              <MaterialCommunityIcons
                name={"calendar"}
                style={{ color: "#000", fontSize: 24 }}
              />

              <Text style={{ fontWeight: "bold" }}>
                {date.toLocaleDateString("pt-BR")}
              </Text>
            </TouchableOpacity>
            
            {errorMessage ? (
              <Text style={{ color: "red", marginTop: 10, fontWeight: "400" }}>
                {errorMessage}
              </Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
              <Text style={styles.buttonText}>ADICIONAR</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddAnimalScreen;
