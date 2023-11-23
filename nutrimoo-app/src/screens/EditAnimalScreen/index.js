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

const EditAnimalScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [animalType, setAnimalType] = React.useState("VL");
  const [animalGoal, setAnimalGoal] = React.useState("MA");
  const [animalStatus, setAnimalStatus] = React.useState("");
  const animalGender = 'Touro';

  const animalTypes = [
    { key: "VL", value: "Vaca em lactação" },
    { key: "BN", value: "Bezerra/Novilha" },
    { key: "VA", value: "Vaca" },
    { key: "BO", value: "Boi" },
    { key: "TO", value: "Touro" },
  ];
  const animalGoals = [
    { key: "GA", value: "Ganhar peso" },
    { key: "MA", value: "Manter peso" },
    { key: "PE", value: "Perder peso" },
  ];
  const optionsByGender = {
    Touro: [
      { key: "FE", value: "Fértil" },
      { key: "NF", value: "Não fértil" },
    ],
    Vaca: [
      { key: "FE", value: "Fértil" },
      { key: "NF", value: "Não fértil" },
      { key: "PR", value: "Prenha" },
      { key: "NP", value: "Não prenha" },
    ],
    Boi: [{ key: "IN", value: "Infértil" }],
    Novilha: [{ key: "IN", value:"Infértil"}],
  };

  const [options, setOptions] = React.useState(optionsByGender[animalGender]);

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
                marginLeft: 45,
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
                placeholder="TAG 0012"
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
              data={animalTypes}
              search={false}
              placeholder={"Selecione um departamento"}
              defaultOption={{ key: "VL", value: "Vaca em lactação" }}
            />

            <Text style={styles.contText}>STATUS</Text>
            {animalGender === "Boi" || animalGender === "Novilha" ? (
              <View style={styles.shadowBox}>
              <TextInput
                placeholder={optionsByGender[animalGender][0].value}
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
                data={options}
                placeholder="Selecione uma meta"
                defaultOption={options.length > 0 ? options[0] : null}
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
                placeholder="Peso em Kg"
                autoCorrect={false}
                keyboardType="default"
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>

            <Text style={styles.contText}>META</Text>
            <SelectList
              setSelected={setAnimalGoal}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              data={animalGoals}
              search={false}
              placeholder={"Selecione uma meta"}
              defaultOption={{ key: "MA", value: "Manter peso" }}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>EDITAR</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EditAnimalScreen;
