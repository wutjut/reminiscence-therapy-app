import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

//style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }
export default class LoginScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          source ={require('../assets/careyaya.png')}
          style={styles.logo}
        />
        <FormInput
          //labelValue={email}
          //onChangeText={(userEmail)=> setEmail(userEmail)}
          placeholderText='Email'
          iconType='user'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <FormInput
          //labelValue={password}
          //onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText='Password'
          iconType='lock'
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle='Sign In'
          onPress={() => alert('Sign In CLicked!')}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={() => {alert('Forgot Password CLicked!')}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => alert('Signup CLicked!')}>
            <Text style={styles.navButtonText}>
                Don't have an acount? Create here
            </Text>
        </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 20
  },
  logo: {
    width: '45%',
    height: '45%',
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 28,
    marginBottom: 5,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Arial',
  },
});