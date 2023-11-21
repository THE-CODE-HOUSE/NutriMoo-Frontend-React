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
    height: "62%",
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
  icon: {
    color: "#073021",
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
  teste:{
    flexDirection:"row",
  },
  ContainerHeader:{
    flexDirection: 'row',
    height:62,
    width: 350,
    justifyContent: 'space-around',
    backgroundColor: '#073021',
    padding: 10,
    borderTopLeftRadius: 10, // Arredondar os cantos superiores
    borderTopRightRadius: 10
  },
  ContainerLinhaBranca:{
    height: 310,
    width: 350,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopLeftRadius: 10, // Arredondar os cantos superiores
    borderTopRightRadius: 10
  },
  ContainerLinhaVerde:{
    height: 62,
    width: 280,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#C6FBD1',
    borderTopLeftRadius: 10, // Arredondar os cantos superiores
    borderTopRightRadius: 10,
    marginTop: 50
  },
  ContainerColuna:{
    height: 310,
    width: 70,
    flexDirection: 'row',
    backgroundColor: '#9CFD9D',
    padding: 10,
    borderBottomRightRadius: 15, // Arredondar os cantos superiores
    borderBottomLeftRadius: 15
  },
  headerText:{
    fontSize: 12,
    alignSelf:'center',
    color:'white',
    fontWeight: 'bold',

  },
  TextoText:{
    fontWeight: 'bold',
    fontSize: 12,
    color:'#073021',
    marginTop: 10
    
  }
});

export default styles;