import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titletext: {
    fontSize: 20,
    color: "#073021",
    fontWeight: "bold",
    marginTop: "2%",
  },
  textobotao: {
    fontSize: 14,
    color: "#073021",
    marginEnd: "5%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    resizeMode: "cover",
  },

  infoContainer: {
    marginTop: "2.5%",
    alignItems: "flex-start",
    width: "100%",
    height: "60%",
    marginStart: "10%",
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

  homeBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "11%",
  },
  botao: {
    width: 300,
    height: 110,
    borderRadius: 25,
    backgroundColor: "#9BFE9B",
    elevation: 10,
    marginTop: 20,
  },
});

export default styles;
