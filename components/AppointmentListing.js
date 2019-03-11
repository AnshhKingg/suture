import React, {Component} from 'react';
import {Platform, Alert   ,StyleSheet, Text, View, Image, Button, ImageBackground,TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons"
import styles from './style/Styles';

type Props = {};
export default class LoginScreen extends Component<Props> {
  render() {
    const iconView = <Icon
      name="ios-image"
      color="#000"
      size={25}
    />;
    const blankText = <Text></Text>;
    let clickableObj;
    if(this.props.isImage){
      clickableObj = iconView;
    }else{
      clickableObj = blankText;
    }
    return (
      <View style={styles.aptContainer}>
        <View style={styles.flex3}>
          <View style={{height:60,width:"20%",backgroundColor:"skyblue",margin:10,borderRadius:25,alignItems:"center",justifyContent:"center"}}>
          {clickableObj}
          </View>
          <View style={{flex:3,flexDirection:"column"}}>
          <View style={{height:"20%",width:"70%"}}>
           <Text style={{fontSize:15,color:"black"}}>Arwind Saxena</Text>
          </View>
          <View style={{height:"20%",width:"100%",marginTop:5}}>
           <Text style={{fontSize:15}}>01 Jan 2019 @ 2:00 PM</Text>
          </View>
          <View style={{height:"20%",width:"100%",marginTop:5}}>
           <Text style={{fontSize:15}}>Surgery :Cleft Lip and cleft palate surgery</Text>
          </View>
          </View>
        </View>
      </View>
    );
  }
}
