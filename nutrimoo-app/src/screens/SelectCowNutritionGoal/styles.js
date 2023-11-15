import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titletext: {
    fontSize: 40,
    color: "#073021",
    fontWeight: "bold",
    marginTop: "5%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    resizeMode: "cover",
  },
  retangulo: {
    position: "absolute",
    bottom: 1,
    width: "100%",
    height: "75%",
    backgroundColor: "#fffff",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  shadowBox: {
    width: 350,
    height: 50,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 15,
  },
  homeBar: {
    //backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  button: {
    width: 260,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#9BFF99",
    borderRadius: 30,
    elevation: 5,
    marginTop: 40,
    margin:10
  },
  icon: {
    color: "#073021",
    width: "100%", // Ajuste conforme necessário
    height: "100%", // Ajuste conforme necessário
  },
  textContainer: {
    borderRadius: 30,
    height:"100%",
    width:"100%",
    alignContent: "center",
    opacity: 0.7,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#073021",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer:{
    flexDirection:"column",
  }
});

export default styles;