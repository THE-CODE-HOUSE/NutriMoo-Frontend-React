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
} from "react-native";

import styles from "./styles";
import { CustomDropDown } from "../../components/CustomDropDown";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";


const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  const handleSignUp = () => {
    if (email == "" || !regexEmail.test(email)) {
      if (password == "") setErrorMessage("Por favor, insira seu e-mail.");
      setErrorMessage("E-mail inválido. Verifique se está no formato correto.");
      return;
    }

    if (password == "" || password.length < 6) {
      if (password == "") setErrorMessage("Por favor, insira sua senha.");
      setErrorMessage("A senha deve conter pelo menos 6 digitos.");
      return;
    }

    // Se chegou até aqui, ambos os campos estão preenchidos.
    setErrorMessage(""); // Limpar mensagem de erro.
    console.log("Botão Entrar pressionado");
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
          style={{ backgroundColor: "transparent" , marginTop: 30, marginLeft:20}}
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
                keyboardType="nome"
                onChangeText={(text) => setEmail(text)}
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


            <CustomDropDown title={'DEPARTAMENTO'} zIndex={2000} titleColor={'#073021'} />

            <CustomDropDown title={'FUNÇÃO'} zIndex={2000} titleColor={'#073021'} />

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
