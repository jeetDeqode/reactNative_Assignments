import React, { Component } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Dashboard extends Component {
  render() {
    return(
      <View style = {styles.superView}>
        <Text style = {{fontSize: 40, alignItems: 'center', justifyContent: "center", color: "#000000"}}>
          Dashboard Screen</Text>
        <Button title = "Go to Home Screen" style = {styles.listBtnStyle}
          onPress = {() => this.props.navigation.navigate('Home')}/>
        <Button
          title = "Go to Login" style={styles.listBtnStyle}
          onPress = {() => this.props.navigation.navigate('Login')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listBtnStyle: {
    color: '#ff0000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: '#DDDDDD'
  },
  profileBtnStyle: {
    color: '#ff0000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16
  },
  superView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})
