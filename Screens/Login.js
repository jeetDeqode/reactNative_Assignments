import React, { Component } from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';

export default class Login extends Component {
    render() {
        var userEmail = '';
        var userPassword = '';

        const fillEmail = (text) => {
            userEmail = text
            console.log(text)
            console.log('user ' + userEmail.trim())
        }
        const fillPassword = (text) => {
            userPassword = text
        }

        const submitPress = () => {
            if(userEmail.trim().length == 0) {
                alert('Please fill Email');
                return
            }
            if (userPassword.trim().length == 0) {
                alert('Please fill Password');
                return
            }
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(userEmail.trim()) === false) {
                alert("Email is Not Valid");
                return
            }
            if (userPassword.trim().length < 6) {
                alert("Password length should be greater than or equal to 6");
                return
            }
            alert("User will be redirected to Home screen")
        }
        return (
            <View style={style = styles.superView}>
                <TextInput style = {styles.email} placeholder = {'Enter Email'} onChangeText = {fillEmail}>
                </TextInput>
                <TextInput style = {styles.password} placeholder = {'Enter Password'} onChangeText = {fillPassword}>
                </TextInput>
                <Button style = {styles.submitBtn} onPress = {submitPress} title = {'Submit'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    email: {
        color: '#000000',
        fontSize: 18,
        borderColor: '#000000',
        borderWidth: 1,
        width: 350,
        height: 70
    },
    password: {
        color: '#000000',
        fontSize: 18,
        marginTop: 8,
        borderColor: '#000000',
        borderWidth: 1,
        width: 350,
        height: 70
    },
    submitBtn: {
        color: '#ff0000',
        marginTop: 16,
        fontSize: 18,
        borderColor: '#000000',
        borderWidth: 1,
    },
    superView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})