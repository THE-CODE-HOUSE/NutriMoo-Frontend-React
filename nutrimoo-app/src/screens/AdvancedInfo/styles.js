import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titletext: {
    fontSize: 20,
    color: '#073021',
    fontWeight: "bold",
    marginTop: "5%",
  },
  textobotao:{
    fontSize: 14,
    color: '#073021',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    resizeMode: 'cover',
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
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    height: '11%',
  },
  botao:{
    width: 300, 
    height: 110,
    borderRadius: 25,
    backgroundColor: "#9BFE9B",
    elevation: 10,
    marginTop: 20
  },




  
});

export default styles;