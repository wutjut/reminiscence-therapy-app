import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DustBowl from '../assets/dust_bowl.jpg';
import WW2 from '../assets/WW2.jpg';
import Presley from '../assets/Presley.jpg';
import MoonLanding from '../assets/moon_landing.jpg';
import Watergate from '../assets/Watergate.jpg';
import BerlinWall from '../assets/berlin_wall.jpg';

const decades = [
  {decade: 30, text: '1930s', image: DustBowl},
  {decade: 40, text: '1940s', image: WW2},
  {decade: 50, text: '1950s', image: Presley},
  {decade: 60, text: '1960s', image: MoonLanding},
  {decade: 70, text: '1970s', image: Watergate},
  {decade: 80, text: '1980s', image: BerlinWall},
];

export default function Home({navigation}) {
  return (
    <div style={{flex:1, paddingTop: 10}}>
      <FlatList
        numColumns={3}
        data={decades}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => ( 
          <View 
          style={{alignItems: 'center', height: 300, alignItems: 'center',justifyContent:'center', flex: 1, margin: 1, backgroundColor: '#D3D3D3', cursor: 'pointer'}}
           onClick={() => navigation.push('Questions', { decade: item.decade })}
          >
            <img style={{height: 200, width: '70%'}} src={item.image} alt=""/>
            <Text>{item.text}</Text>
          </View>
         )}
      />
      {/* <Button title="1930s" onPress={() => navigation.push('Questions', { decade: 30 })}/>
      <Button title="1940s" onPress={() => navigation.push('Questions', { decade: 40 })}/>
      <Button title="1950s" onPress={() => navigation.push('Questions', { decade: 50 })}/> */}
    </div>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40
//   },
//   itemStyle: {
//     backgroundColor: '#3232ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 100,
//     flex: 1,
//     margin: 1
//   }
// })