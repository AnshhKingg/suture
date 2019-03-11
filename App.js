import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import LoginScreen from './components/Login'
import SignupScreen from './components/Signup'
import Dashboard from './components/Dashboard'
import Listview from './components/Listview'
import AppointmentPending from './components/AppointmentPending'
import Settings from './components/Settings'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator =  createStackNavigator({
    Login     : LoginScreen,
    Signup    : SignupScreen,
    Dashboard : Dashboard,
    Listview  : Listview,
    AppointmentPending  : AppointmentPending,
    Settings  : Settings,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  }
});
