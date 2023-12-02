import * as React from 'react';
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
  Button,
} from "react-native";

import { ImageBackground } from "react-native";

import { ProgressBar } from 'react-native-paper';
import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AdvancedInfo = () => {

    const [progress, setProgress] = useState(0.5);

    const onClose = () => {
      //navigation.navigate('ListScreen');
      console.log("Voltando pra tela de lista")
    }


  return (
    <TouchableWithoutFeedback accessible={false}>
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <ImageBackground
        source={require("../../../assets/images/background.png")}
        style={styles.container}>

            <View style={styles.homeBar}>
                  <TouchableOpacity style= {{marginTop: 30, marginLeft: 20}}onPress={onClose}> 
                    <View style={{ backgroundColor: "transparent" }}>
                        <MaterialIcons name="arrow-back" size={32} color="#073021" />
                    </View>
                  </TouchableOpacity>
                  <Text style= {{marginLeft: '10%',justifyContent:'center', marginTop: '20%',height: '100%',fontSize: 30, fontWeight: 'bold'}}>INFOS AVANÇADAS</Text>
            </View>

           

            <Image style= {{}}source={require("../../../assets/images/vaca_triste.png")}/>

            <View style={styles.retangulo}>
                
                  <View style={[ styles.retangulo,{ backgroundColor: "#FBF6E9", height: "65%", }]}>
                    
                  <Text style = {{ fontSize: 40, fontWeight: 'bold'}}>121</Text>
                  <Text style = {{ fontSize: 16, fontWeight: 'bold'}}>Holandesa</Text>

                    <View style={{marginTop: '2.5%',backgroundColor: 'white',height: '60%',width: '90%',elevation: 5,borderRadius: 15,justifyContent: 'center',padding: 20 }}>
                                <View style={{marginTop:'15%',flexDirection:'row',alignItems:'center'}}>
                                        <MaterialCommunityIcons size={25} name='heart-outline' style={{  }} />
                                        <Text style={{fontSize: 16, textAlign: 'center' }}>
                                            Batimentos Cardíacos:
                                        </Text>
                                        <Text style={{fontSize: 16, textAlign: 'center',marginLeft:5 }}>
                                            20
                                        </Text>
                                </View>

                                <ProgressBar
                                    style={{ alignSelf: 'center', height: '20%', borderRadius: 20 }}
                                    progress={0.25} // Ajuste o valor de progresso conforme necessário
                                    color='red'
                                />

                                <View style={{marginTop: -20,flexDirection:'row',alignItems:'center'}}>
                                        <MaterialIcons size={30} name='device-thermostat' style={{  }} />
                                        <Text style={{fontSize: 16, textAlign: 'center' }}>
                                            Temperatura:
                                        </Text>
                                        <Text style={{fontSize: 16, textAlign: 'center',marginLeft:5 }}>
                                            40°C
                                        </Text>
                                </View>

                                <ProgressBar
                                    style={{ alignSelf: 'center', height: '20%', borderRadius: 20 }}
                                    progress={0.4} // Ajuste o valor de progresso conforme necessário
                                    color='#C6FBD1'
                                />

                                <View style={{marginTop: -20,flexDirection:'row',alignItems:'center'}}>
                                        <MaterialIcons size={30} name='show-chart'  />
                                        <Text style={{fontSize: 16, textAlign: 'center' }}>
                                        Nível de atividade: 
                                        </Text>
                                        <Text style={{fontSize: 16, textAlign: 'center',marginLeft:5 }}>
                                            75
                                        </Text>
                                        
                                </View>

                                <ProgressBar
                                    style={{ alignSelf: 'center', height: '20%', borderRadius: 20 }}
                                    progress={0.75} // Ajuste o valor de progresso conforme necessário
                                    color='#9CFD9D'
                                />

                                <View style={{marginTop: -20,flexDirection:'row',alignItems:'center'}}>
                                        <MaterialCommunityIcons size={30} name='food-apple-outline' style={{  }} />
                                        <Text style={{fontSize: 16, textAlign: 'center' }}>
                                            Consumo de comida:
                                        </Text>
                                        <Text style={{fontSize: 16, textAlign: 'center',marginLeft:5 }}>
                                            100
                                        </Text>
                                </View>

                                <ProgressBar
                                    style={{ alignSelf: 'center', height: '20%', borderRadius: 20 }}
                                    progress={1} // Ajuste o valor de progresso conforme necessário
                                    color='#345A48'
                                />



                    </View>

                    
                          <TouchableOpacity style={{backgroundColor: '#345A48', borderRadius: 25, width: '30%', height: '10%', marginTop:'3%',alignItems: 'center',justifyContent:'center', elevation: 10}} onPress={onClose}>
                            <Text style={{color:'white', fontSize: 14, textAlign: 'center'}}>Concluído</Text>
                          </TouchableOpacity>
                    
                          </View>


                
            </View>

      </ImageBackground>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
};

export default AdvancedInfo;