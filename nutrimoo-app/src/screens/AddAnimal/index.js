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
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectList } from "react-native-dropdown-select-list";

const AddAnimalScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [departament, setDepartament] = React.useState("PR");
  const [departament1, setDepartament1] = React.useState("PR");

  const departaments = [
    { key: "PR", value: "Produção" },
    { key: "VT", value: "Veterinária" },
    { key: "NU", value: "Nutrição" },
  ];

  const departaments1 = [
    { key: "PR", value: "Produção" },
    { key: "VT", value: "Veterinária" },
    { key: "NU", value: "Nutrição" },
  ];

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
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>

            <Text style={styles.contText}>ESTÁGIO</Text>
            <SelectList
              setSelected={setDepartament}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              data={departaments}
              search={false}
              placeholder={"Selecione um departamento"}
              defaultOption={{ key: "PR", value: "Produção" }}
            />

            <Text style={styles.contText}>RAÇA</Text>
            <SelectList
              setSelected={setDepartament1}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              data={departaments1}
              search={false}
              placeholder={"Selecione um departamento"}
              defaultOption={{ key: "PR", value: "Produção" }}
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
                keyboardType="default"
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
                  minimumDate={new Date(1995, 1, 1)}
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

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ADICIONAR</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddAnimalScreen;