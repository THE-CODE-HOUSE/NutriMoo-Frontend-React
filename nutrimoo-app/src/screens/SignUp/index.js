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
  ToastAndroid,
} from "react-native";

import styles from "./styles";
import { SelectList } from "react-native-dropdown-select-list";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { submitRegister } from "../../services/authService";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const [departament, setDepartament] = React.useState("PR");
  const [role, setRole] = React.useState("");

  const departaments = [
    { key: "PR", value: "Produção" },
    { key: "VT", value: "Veterinária" },
    { key: "NU", value: "Nutrição" },
  ];

  function getDepartmentValueByKey(keyToFind) {
    const departmentEntry = departaments.find(({ key }) => key === keyToFind);
    return departmentEntry ? departmentEntry.value : null;
  }

  const roles = {
    PR: [
      { key: "PD", value: "Produtor" },
      { key: "GE", value: "Gerente" },
      { key: "TR", value: "Trabalhador" },
    ],
    VT: [{ key: "VE", value: "Veterinário" }],
    NU: [{ key: "NT", value: "Nutricionista" }],
  };

  function getRoleValueByKey(keyToFind) {
    for (let category in roles) {
      const roleEntry = roles[category].find(({ key }) => key === keyToFind);
      if (roleEntry) {
        return roleEntry.value;
      }
    }
    return null; // Retorna null se a chave não for encontrada
  }

  const handleSignUp = async () => {
    if (name === "") {
      setErrorMessage("Por favor, insira seu nome.");
      return;
    }

    if (email === "" || !regexEmail.test(email)) {
      setErrorMessage(
        email === ""
          ? "Por favor, insira seu e-mail."
          : "E-mail inválido. Verifique se está no formato correto."
      );
      return;
    }

    if (password === "" || password.length < 6) {
      setErrorMessage(
        password === ""
          ? "Por favor, insira sua senha."
          : "A senha deve conter pelo menos 6 dígitos."
      );
      return;
    }

    // Se chegou até aqui, ambos os campos estão preenchidos.
    setErrorMessage(""); // Limpar mensagem de erro.
    try {
      console.log(
        getRoleValueByKey(role),
        getDepartmentValueByKey(departament)
      );
      const roleValue = getRoleValueByKey(role);
      const departamentValue = getDepartmentValueByKey(departament);

      await submitRegister(email, password, roleValue, name, departamentValue);

      ToastAndroid.show("Usuário cadastrado com sucesso!", ToastAndroid.SHORT);
      navigation.navigate("Home");
    } catch (error) {
      setErrorMessage("Erro ao fazer login. Por favor, tente novamente.");
      console.log(error);
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
            <TouchableOpacity
              // Adicione o método navigation aqui
              style={{
                backgroundColor: "transparent",
                marginTop: 30,
                marginLeft: 20,
              }}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back" size={32} color="#073021" />
            </TouchableOpacity>
          </View>

          <View style={styles.retangulo}>
            <View
              style={[
                styles.retangulo,
                { opacity: 0.8, backgroundColor: "white", height: "100%" },
              ]}
            ></View>

            {
              <Image
                source={require("../../../assets/images/logoball2.png")}
                style={styles.logo}
              />
            }

            <Text style={styles.titletext}>CADASTRO</Text>

            <Text style={styles.contText}>NOME</Text>
            <View style={styles.shadowBox}>
              {
                <MaterialIcons
                  name="account-circle"
                  size={24}
                  color="#073021"
                  style={styles.iconStyle}
                />
              }
              <TextInput
                placeholder="Nome"
                autoCorrect={false}
                defaultValue={name}
                onChangeText={(text) => setName(text)}
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>

            <Text style={styles.contText}>E-MAIL</Text>
            <View style={styles.shadowBox}>
              {
                <MaterialIcons
                  name="alternate-email"
                  size={24}
                  color="#073021"
                  style={styles.iconStyle}
                />
              }
              <TextInput
                placeholder="E-mail"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                style={styles.textinputWithIcon}
                maxLength={40}
              />
            </View>

            <Text style={styles.contText}>SENHA</Text>
            <View style={styles.shadowBox}>
              {
                <MaterialIcons
                  name="lock-outline"
                  size={24}
                  color="#073021"
                  style={styles.iconStyle}
                />
              }
              <TextInput
                secureTextEntry={hidePassword}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={styles.textinputWithIcon}
                maxLength={15}
              />
              <TouchableOpacity
                style={[styles.iconStyle, { right: 15, left: undefined }]}
                onPress={() => setHidePassword(!hidePassword)}
              >
                <MaterialIcons
                  name={hidePassword ? "visibility-off" : "visibility"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.contText}>DEPARTAMENTO</Text>
            <SelectList
              setSelected={setDepartament}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              data={departaments}
              search={false}
              placeholder={"Selecione um departamento"}
              defaultOption={{ key: "PR", value: "Produção" }}
            />

            <Text style={styles.contText}>FUNÇÃO</Text>
            <SelectList
              setSelected={setRole}
              boxStyles={styles.selectList}
              dropdownStyles={{ backgroundColor: "white" }}
              search={false}
              data={roles[departament]}
              placeholder={"Selecione uma função"}
              defaultOption={roles[departament][0]}
            />

            {errorMessage ? (
              <Text style={{ color: "red", marginTop: 10, fontWeight: "400" }}>
                {errorMessage}
              </Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
