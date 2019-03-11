import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Switch, View} from 'react-native'
import styles from './style/Styles'

type Props = {};
export default class Home extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('otherParam', 'Settings'),
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
      <View style={{flex: 1}}>
        <Switch
        onValueChange = {this.props.onToggle}
        value = {this.props.toggleValue}
        />
      </View>
    );
  }
}
