import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titletext: {
      fontSize: 40,
      color: "#073021",
      fontWeight: "bold",
      marginTop: "0.1%",
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    retangulo: {
      position: "absolute",
      bottom: 1,
      width: "100%",
      height: "90%",
      backgroundColor: "#fffff",
      alignItems: "center",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    logo: {
      marginTop: -50,
      width: "20%",
      resizeMode: "contain",
    },
    textinput: {
      marginTop: 10,
      borderRadius: 20,
      paddingLeft: 15,
      fontSize: 16,
    },
    shadowBox: {
      width: 350,
      height: 50,
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: "white",
      elevation: 15,
    },
    contText: {
      marginTop: 10,
      fontSize: 18,
      color: "#073021",
      fontWeight: "bold",
      textAlign: "left"
    },
    button: {
      width: "40%",
      height: 60,
      backgroundColor: "#073021",
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
    },
  
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    iconStyle: {
      position: "absolute",
      top: 13,
      left: 15,
    },
  
    textinputWithIcon: {
      marginTop: 10,
      borderRadius: 20,
      paddingLeft: 45, // Aumente o padding para não sobrepor o ícone
      fontSize: 16,
    },
  });

  export default styles;