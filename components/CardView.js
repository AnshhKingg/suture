import React, {Component} from 'react';
import {Platform, Alert   ,StyleSheet, Text, View, Image, Button, ImageBackground,TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


type Props = {};
export default class LoginScreen extends Component<Props> {
  render() {
    const arrowView = <Image source={require('../pics/arrow_goto.png')} style={{height:"50%",width:"10%",padding:10}} />;
    const blankText = <Text></Text>;
    let clickableObj;
    if(this.props.isClickable){
      clickableObj = arrowView;
    }else{
      clickableObj = blankText;
    }
    return (
      <LinearGradient colors={this.props.gradientColor} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>
        <View style={styles.flex3}>
          <View style={{height:"100%",width:"30%",padding:"5%"}}>
           <Text style={{fontSize:40}}>{this.props.regardingCount}</Text>
          </View>
          <View style={{height:"100%",width:"60%",padding:"5%"}}>
            <Text style={{fontSize:20}}>{this.props.titleNavigate}</Text>
          </View>
          <View style={{height:"100%",width:"10%",paddingTop:"5%"}}>
          {clickableObj}
          </View>
        </View>
      </LinearGradient>

    );
  }
}

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
    height:"1%",
    width:"98%"
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
   }
});
