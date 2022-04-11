import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet, Image } from 'react-native';
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
    <View style={{flex:1, paddingTop: 10}}>
      <FlatList
        numColumns={3}
        data={decades}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => ( 
          <View 
          style={{alignItems: 'center', height: 300, alignItems: 'center',justifyContent:'center', flex: 1, margin: 1, backgroundColor: '#D3D3D3', cursor: 'pointer'}}
           onClick={() => navigation.push('Questions', { decade: item.decade })}
          >
            <Image style={{height: 200, width: '70%'}} source={item.image} />
            <Text>{item.text}</Text>
          </View>
         )}
      />
    </View>
  )
}

