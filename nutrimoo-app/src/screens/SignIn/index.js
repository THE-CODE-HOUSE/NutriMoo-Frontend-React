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
} from "react-native";

import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import api from "../../services/api"
import {UserStorage} from "../../storage/storage"

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  async function submitLogin(email, password) {
    try {
      const response = await api.post(
        "/auth/login",
        { email, password },
        {
          headers: { requiresAuth: false },
        }
      );
      console.log(response.data);
      return response
      // Trate a resposta aqui
    } catch (error) {
      console.error("Erro no login", error);
      // Trate o erro aqui
    }
  }

  async function handleSignIn() {
 
    if (email === "" || !regexEmail.test(email)) {
      setErrorMessage(email === "" ? "Por favor, insira seu e-mail." : "E-mail inválido. Verifique se está no formato correto.");
      return;
    }
  
    if (password === "" || password.length < 6) {
      setErrorMessage(password === "" ? "Por favor, insira sua senha." : "A senha deve conter pelo menos 6 dígitos.");
      return;
    }
  
    setErrorMessage(""); // Limpar mensagem de erro.
  
    try {
      const response = await submitLogin(email, password);
      console.log(response.data.token);
      UserStorage.setUser(response.data);
      console.log(await UserStorage.getUser());
      // Lidar com a resposta - atualizar o estado, redirecionar o usuário, etc.
    } catch (error) {
      setErrorMessage("Erro ao fazer login. Por favor, tente novamente.");
      // Tratar o erro - talvez logar para depuração ou mostrar uma mensagem específica
    } finally {
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />

        {
          <Image
            source={require("../../../assets/images/background.png")}
            style={styles.image}
          />
        }

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

          <Text style={styles.titletext}>LOGIN</Text>

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
              value={email}
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

          {errorMessage ? (
            <Text style={{ color: "red", marginTop: 10, fontWeight: "400" }}>
              {errorMessage}
            </Text>
          ) : null}

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
