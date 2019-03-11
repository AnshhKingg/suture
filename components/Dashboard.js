import React, {Component} from 'react';
import {Platform, Alert   ,StyleSheet, Text, View, Image, Button, ImageBackground,TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardView from './CardView'


type Props = {};
export default class LoginScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Dashboard'),
      headerStyle: {
        backgroundColor: '#d80440',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
       fontWeight: 'bold',
      },
    };
  };

  render() {
    return (
        <ScrollView >
          <KeyboardAvoidingView>
            <View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Listview')}>
                <CardView gradientColor={['#a6c0fe', '#96e6a1']} regardingCount={["25"]} arrowButton={[true]} titleNavigate={['Today Appointment']} isClickable={[true]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('AppointmentPending')}>
                <CardView gradientColor={['#f6d365', '#fda085']} regardingCount={["78"]} arrowButton={[true]} titleNavigate={['Pending Appointments']} isClickable={[true]}/>
              </TouchableOpacity>
              <CardView gradientColor={['#f093fb', '#f5576c']} regardingCount={["3"]} arrowButton={[true]} titleNavigate={['Cancelled Appointments']} isClickable={[true]}/>
              <CardView gradientColor={['#fa709a', '#fee140']} regardingCount={["3.2"]} arrowButton={[true]} titleNavigate={['Star Ratings']} />
              <CardView gradientColor={['#74ebd5', '#9face6']} regardingCount={["4"]} arrowButton={[true]} titleNavigate={['Rejected Appointments']} isClickable={[true]}/>
              <CardView gradientColor={['#13547a', '#ffb199']} regardingCount={["7"]} arrowButton={[true]} titleNavigate={['Doctors Available']} isClickable={[true]}/>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
