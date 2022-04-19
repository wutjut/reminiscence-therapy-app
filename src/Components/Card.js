import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-deck-swiper';
import questions from '../questions/questions';
import { CheckBox } from 'react-native-elements'
import FormInput from './FormInput';
import data from '../card-data/data';
import vinyl_record from '../assets/vinyl_record.jpg';
import { Audio } from 'expo-av';


export default function Card({card}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/sample-9s.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  const renderContent = () => {
    if (card.mediaType == "Audio"){
      return <Image source={vinyl_record}/>
    }
    if(card.mediaType == "Image"){
      return (<Image
          source ={card.image}
          style={styles.logo}
      />)
    }
    else{
      return <Text>{card.text}</Text>
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.space} />
      <Image
          source ={card.image}
          style={styles.logo}
      />
      <Text>{card.text}</Text>
      <View style={styles.space} />
      <Button 
      style={styles.sect}
      title="Get Answer"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      onPress={() => alert(card.answer)}
      />
      <Button title="Play Sound" onPress={playSound} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D3D3D3',
      //alignItems: 'center,'
    },
    logo: {
      width: '45%',
      height: '45%',
      resizeMode: 'contain',
    },
    sect:{
      padding: 8,
    },
    card: {
      height: 500,
      flex: 0.45,
      borderRadius: 8,
      shadowRadius: 3,
      shadowColor: '#171717',
      shadowOpacity: 0.2,
      shadowOffset: {width: -2, height: 10},
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    space: {
      width: 20,
      height: 20,
    },
  })