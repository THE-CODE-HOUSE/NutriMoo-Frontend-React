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
    height: "50%",
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
    width: 160,
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#9BFF99",
    borderRadius: 30,
    elevation: 5,
    marginTop: 60,
    margin:10
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

  ContainerHeader:{
    flexDirection: 'row',
    height: 70,
    width: '100%',
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor: '#073021',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

   },
  ContainerLinhaBranca:{
    height: 309,
    width: 380,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10
  },
  ContainerLinhaVerde:{
    height: 70,
    width: 380,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#C6FBD1',
  },
  /*ContainerColuna:{
    height: 280,
    width: 70,
    flexDirection: 'column',
    backgroundColor: '#9CFD9D',
    borderBottomLeftRadius: 30
  },*/
  headerText:{
    fontSize: 11,
    alignSelf:'center',
    color:'white',
    fontWeight: 'bold',
  },
  TextoText:{
    fontWeight: 'bold',
    fontSize: 11,
    color:'#073021',
    marginTop:70,
    marginRight: -10,
    position:'absolute',
  }
});

export default styles;