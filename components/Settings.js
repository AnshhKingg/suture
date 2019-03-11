import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Switch, View, Image, ScrollView} from 'react-native';
import BottomTab from './BottomTab'
import SettingForm from './SettingForm'
import SwitchComponent from './SwitchComponent'
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

  constructor() {
      super();
      this.state = {
         toggleValue: false,
      }
   }
   onToggle = (value) => {
      console.log(!value);
      this.setState({toggleValue: value})
      console.log('Switch Value is: ' + value)
   }

  render() {
    console.log(this.state.toggleValue)

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{ height:"85%" }}>
          <View style={styles.settingBox}>
            <View >
              <Text>Email Notification</Text>
              <SwitchComponent
                toggleValue={this.state.toggleValue}
                onToggle={this.onToggle}
              />
            </View>
            <View>
              <Text>SMS Notifications</Text>
              <SwitchComponent
                toggleValue={this.state.toggleValue}
                onToggle={this.onToggle}
              />
            </View>
            <View>
              <Text>News Letters</Text>
              <SwitchComponent
                toggleValue={this.state.toggleValue}
                onToggle={this.onToggle}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{marginBottom:15}}>
          <BottomTab navigation={this.props.navigation} isSelected={[3]} />
        </View>
      </View>
    );
  }
}
