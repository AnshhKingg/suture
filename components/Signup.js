import React, {Component} from 'react';
import {Platform, Alert   ,StyleSheet, Text, View, Image, Button, ImageBackground,TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


type Props = {};
export default class SignupScreen extends Component<Props> {
  static navigationOptions = {
        header: null
    }
  render() {
    return (
        <ImageBackground source={require('../pics/main_bg.jpg')} style={{width: '100%', height: '100%'}}>
        <ScrollView >
        <KeyboardAvoidingView>
        <View style={styles.container}>
            <Image source={require('../pics/suture_white.png')} style={{height:150,width:300}}/>
           <Text style={styles.headingText}>Signup</Text>
           <TextInput
             placeholder = "Full Name"
             placeholderTextColor = "#ffffff"
             textAlign={'justify'}
             style={styles.input}
           />
            <TextInput
              placeholder = "Email or UserID"
              placeholderTextColor = "#ffffff"
              textContentType = "emailAddress"
              textAlign={'justify'}
              keyboardType = "email-address"
              style={styles.input}
            />
            <TextInput
              placeholder = "Password"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              textAlign={'justify'}
              style={styles.input}
            />
              <View style={[styles.algnCenter,{width:"100%"}]}>
               <TouchableOpacity
                  style={[styles.width100]}
                  onPress={()=>this.props.navigation.navigate('Login')}
               >
               <View>
                  <Text style = {[styles.text]}>
                      Sign Up
                  </Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity
                  style={[styles.width100]}
                  onPress={()=>this.props.navigation.navigate('Login')}
               >
               <View>
                  <Text style = {[styles.text_UnderBTN]}>
                      Sign Up
                  </Text>
                </View>
               </TouchableOpacity>

              </View>
            </View>
          </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
   }
});
