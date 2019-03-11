import React, {Component} from 'react';
import {Platform, Alert   ,StyleSheet, Text, View, Image, Button, ImageBackground,TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import styles from './style/Styles';

type Props = {};
export default class BottomTab extends Component<Props> {
  constructor(){
    super();
    this.state={};
  }
  render() {
    return (
        <View style={styles.flex3_btm}>
          <View style = {styles.pageBottomTabs}>
            <TouchableOpacity style = {styles.pageBottomTabsButtons}
              onPress={()=>this.props.navigation.navigate('Dashboard')}>
              <View style={{flex:2,flexDirection:'column',alignItems:'center'}}>
                <Icon
                  name="ios-home"
                  color="#000"
                  size={25}
                />
                <Text>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.pageBottomTabsButtons} onPress={()=>this.props.navigation.navigate('Listview')}>
              <View style={{flex:2,flexDirection:'column',alignItems:'center'}}>
                <Icon
                  name="ios-today"
                  color={this.props.isSelected[0]!=1?"#000":"#30b4e8"}
                  size={25}
                />
                <Text>Today's</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.pageBottomTabsButtons} onPress={()=>this.props.navigation.navigate('AppointmentPending')}>
              <View style={{flex:2,flexDirection:'column',alignItems:'center'}}>
                <Icon
                  name="ios-clipboard"
                  color={this.props.isSelected[0]!=2?"#000":"#30b4e8"}
                  size={25}
                />
                <Text>All</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.pageBottomTabsButtons} onPress={()=>this.props.navigation.navigate('Settings')}>
              <View style={{flex:2,flexDirection:'column',alignItems:'center'}}>
                <Icon
                  name="ios-settings"
                  color={this.props.isSelected[0]!=3?"#000":"#30b4e8"}
                  size={25}
                />
                <Text>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.pageBottomTabsButtons} onPress={()=>Alert.alert('Clicked 5')}>
              <View style={{flex:2,flexDirection:'column',alignItems:'center'}}>
                <Icon
                  name="ios-person"
                  color={this.props.isSelected[0]!=4?"#000":"#30b4e8"}
                  size={25}
                />
                <Text>Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}
