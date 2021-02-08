import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default class Homescreen extends Component {
  render() {
    const { navigation } = this.props;  
    const user_email = navigation.getParam('email', 'NO-Email');
    const user_password = navigation.getParam('password', 'NO-Password');
    var state = {
          names: [
           {
              id: 0,
              name: 'Ben',
           },
           {
              id: 1,
              name: 'Susan',
           },
           {
              id: 2,
              name: 'Robert',
           },
           {
              id: 3,
              name: 'Mary',
           }
         ]
      }
    return (
      <View style={styles.superView}>
        <Image style={{alignItems: 'center', justifyContent: 'center',height: 100,width: 100, 
          borderRadius: 100/2, overflow: 'hidden'}} source = {require('../Images/demo.png')}>
        </Image>
        <Text style = {styles.email}>{user_email}</Text>
        <View style = {styles.body}>
          <FlatList
            data = {state.names}
            renderItem = {({item}) =>
            <View style = {{flex:1, flexDirection: 'row'}}>
              <Image style = {{height: 25, width: 25, borderRadius: 12.5, overflow: 'hidden', 
                marginTop: 16, marginLeft: 8}} source = {require('../Images/demo.png')}>
              </Image>
              <Text style = {styles.sectionTitle}>{item.name}</Text>
            </View>
            }/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  email: {
    color: '#000000',
    fontSize: 24,
    alignItems:'center',
    justifyContent:'center',
    marginTop:8
  },
  sectionTitle: {
    color: '#000000',
    marginTop:16,
    marginLeft:8,
    fontSize: 16,
    width: 300
  },
  body: {
    backgroundColor: '#ffffff',
    marginLeft:8,
    marginTop: 24,
    marginRight:8,
    marginBottom:8,
  },
  superView: { 
    flex: 1, 
    alignItems: 'center', 
    marginTop:40 
  }
})