import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default function Home({navigation}) {
  return (
    <div>
      <Button title="1930s" onPress={() => navigation.push('Questions')}/>
      <Button title="1940s" onPress={() => navigation.push('Questions')}/>
      <Button title="1950s" onPress={() => navigation.push('Questions')}/>
    </div>
  )
}