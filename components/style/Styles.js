import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height:100,
    width:"98%"
  },
  aptContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height:80,
    width:"98%",
    backgroundColor:"white"
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo:{
    height:200,
    width:300
  },
  input: {
     margin: 15,
     height: 40,
     width:"90%",
     borderColor: '#ffffff',
     borderWidth: 1,
     fontSize:  15,
     color: '#ffffff',

  },
  header:{
    height:50,
    width:"100%",
    backgroundColor:"#f71248",
    borderColor:"black",
    shadowColor:"#000",
    shadowOpacity:0.7,
  },
  headingText:{
    fontSize:25,
    color:"#ffffff",
    fontWeight:"bold",
  },
  text: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'black',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      color:"#000000"
    },
   algnCenter:{
     alignItems: 'center',
   },
   width100:{
     width:"90%"
   },
   text_UnderBTN:{
     borderWidth: 1,
     padding: 10,
     borderColor: 'black',
     textAlign: 'center',
     color:"#ffffff"
   },
   flex3:{
     flex: 3,
     flexDirection: 'row'
   },
   flex3_btm:{
     flex: 3,
     flexDirection: 'row',
     marginBottom: 36
   },
   pageBottomTabs:{
     flex: 1,
     justifyContent: 'flex-end',
     marginBottom: 0,
     backgroundColor: 'white',
     height:50,
     borderWidth: 1,
     borderRadius: 2,
     borderColor: '#ddd',
     borderBottomWidth: 0,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2,
     elevation: 1,
     flexDirection:'row',
   },
   pageBottomTabsButtons:{
     flex: 1,
     justifyContent: 'center',
     alignItems:'center',
     marginBottom: 0,
     backgroundColor: 'white',
     height:50,
     borderBottomWidth: 0,
     shadowOpacity: 0.8,
     shadowRadius: 2,
     elevation: 1,
     flexDirection:'row',
   },
   settingBox:{
     flex: 1,
     borderWidth: 1,
     borderRadius: 2,
     borderColor: '#ddd',
     borderBottomWidth: 2,
     shadowColor: '#000',
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2,
     elevation: 1,
     marginLeft: 5,
     marginRight: 5,
     marginTop: 10,
     height:80,
     width:"98%",
     backgroundColor:"white"
   }
});
export default styles;
