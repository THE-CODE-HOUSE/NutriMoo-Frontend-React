import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titletext: {
    fontSize: 40,
    color: '#073021',
    fontWeight: "bold",
    marginTop: "5%",
    textAlign: 'center'
  },
  textobotao:{
    fontSize: 20,
    color: '#073021',
    fontWeight: "bold",
    textAlign: 'center'
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
  shadowBox: {
    width: 350,
    height: 50,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 15,
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
  corview:{
    position: 'absolute',
    width: 215,
    height: 110,
    backgroundColor: "white",
    borderRadius: 25,
    alignSelf: 'flex-end',
    opacity: 0.7,
    alignContent: 'center',
    justifyContent: 'center'
  },

  
});

export default styles;