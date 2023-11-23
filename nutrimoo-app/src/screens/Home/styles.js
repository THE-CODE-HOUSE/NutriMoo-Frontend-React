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
    height: "90%",
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
    width: 300,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#9BFF99",
    borderRadius: 30,
    elevation: 5,
    marginTop: 70
  },
  iconContainer: {
    width:"33%",
    height:"100%",
    backgroundColor: "#9BFF99", // Cor de fundo do ícone
    borderRadius: 30, // Ajuste para corresponder ao design
    padding: 5,
    marginRight: 10,
    alignContent: "center"
  },
  icon: {
    color: "#073021",
    width: "100%", // Ajuste conforme necessário
    height: "100%", // Ajuste conforme necessário
  },
  image: {
    width: "100%", // Ajuste conforme necessário
    height: "100%", // Ajuste conforme necessário
  },
  textContainer: {
    backgroundColor:'white',
    borderRadius: 30,
    height:"100%",
    width:"64%",
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
});

export default styles;
