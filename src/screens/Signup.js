import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FormInput from '../Components/FormInput';
//style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }
export default class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source ={require('../assets/careyaya.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Login</Text>
        <FormInput
          labelValue={email}
          //onChangeText={(userEmail)=> setEmail(userEmail)}
          placeholderText='Email'
          iconType='user'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <FormInput
          labelValue={password}
          //onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText='Password'
          iconType='lock'
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle='Sign In'
          onPress={() => alert('Sign In CLicked!')}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.navButtonText}>
                Don't have an acount? Create here
            </Text>
        </TouchableOpacity>


      </View>
    )
  }
}