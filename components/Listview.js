import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import BottomTab from './BottomTab'
import AppointmentListing from './AppointmentListing'
import styles from './style/Styles'

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('otherParam', 'Today\'s Appointment'),
      headerStyle: {
        backgroundColor: '#d80440',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
       fontWeight: 'bold',
      },
    };
  };
  render() {
    return (
      <View style={{flex: 2,flexDirection:'column'}}>
        <ScrollView style={{ height:"85%" }}>
          <AppointmentListing isImage={true} />
          <AppointmentListing isImage={true} />
          <AppointmentListing isImage={true} />
          <AppointmentListing isImage={true} />
          <AppointmentListing isImage={true} />
          <AppointmentListing isImage={true} />
          <AppointmentListing isImage={true} />
          <AppointmentListing isImage={true} />
        </ScrollView>
        <View style={{marginBottom:15}}>
          <BottomTab navigation={this.props.navigation} isSelected={[1]}/>
        </View>
      </View>
    );
  }
}
