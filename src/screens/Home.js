import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import dust_bowl from '../assets/dust_bowl.jpg';
import ww2 from '../assets/WW2.jpg';
import presley from '../assets/Presley.jpg';
import moon_landing from '../assets/moon_landing.jpg';
import watergate from '../assets/Watergate.jpg';
import berlin_wall from '../assets/berlin_wall.jpg';

const decades = [
  {decade: 30, text: '1930s', image: dust_bowl},
  {decade: 40, text: '1940s', image: ww2},
  {decade: 50, text: '1950s', image: presley},
  {decade: 60, text: '1960s', image: moon_landing},
  {decade: 70, text: '1970s', image: watergate},
  {decade: 80, text: '1980s', image: berlin_wall},
];

export default function Home({navigation}) {
  return (
    <View style={{flex:1}}>
      <FlatList
        numColumns={2}
        data={decades}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => ( 
          <TouchableOpacity 
          style={{height: 200, alignItems: 'center', flex: 1, margin: 4, backgroundColor: '#D3D3D3', cursor: 'pointer'}}
           onPress={() => navigation.push('Questions', { decade: item.decade })}
          >
                <ImageBackground source={item.image} resizeMode="cover" style={{flex: 1, width: '100%'}}>
                <Text style={{fontWeight: 'bold', color: 'white', backgroundColor: "#000000c0", textAlign: "center", fontSize: 30, position: 'absolute', bottom: 0, width: '100%'}}>{item.text}</Text>
             </ImageBackground>
          </TouchableOpacity>
         )}
      />
    </View>
  )
}

