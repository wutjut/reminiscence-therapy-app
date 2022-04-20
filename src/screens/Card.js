import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-deck-swiper';
import questions from '../questions/questions';
import { CheckBox } from 'react-native-elements'
import FormInput from '../Components/FormInput';
import data from '../card-data/data';
import vinyl_record from '../assets/vynl.jpg';
import { Audio } from 'expo-av';

function dispAnswer(disp){
    disp = true
}

function dispQuestion(disp){
  disp = false
}

export default function Card({card, props}) {
    // function playSound(){
    //     const playbackObj = new Audio.Sound();
    //     playbackObj.loadAsync({uri: "http://ra01.sycdn.kuwo.cn/resource/n3/32/56/3260586875.mp3"}, {shouldPlay: true});
    // }
  const [sound, setSound] = React.useState();
  const [disp, setDisp] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/sample-9s.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  if(!disp){
    if(card.mediaType == "Image"){
    return (
      <View style={styles.card} >
        <Image
            source ={card.image}
            style={{width: '100%', height: 250}}
        />
        <View style={styles.space} />
      <Text style={{fontSize: 25, textAlign: 'center'}}>{card.text}</Text>
      <View style={styles.space} />
      <Button 
        style={styles.sect}
        title="Get Answer"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => setDisp(true)}
      />
      </View>
    )} else if (card.mediaType == "Audio") {
      return (
        <View style={styles.card}>
        <Image source={vinyl_record} style={{width: '100%', height: 250}}/>
        <Button title="Play Sound" onPress={playSound} />
        <Text style={{fontSize: 25, textAlign: "center"}}>{card.text}</Text>
        <View style={styles.space} />
        <Button 
          title="Get Answer"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => setDisp(true)}
        />
        </View>
      )
    } else {
      return (
        <View style={styles.card}>
        <Text style={{fontSize: 25, textAlign: "center", padding: 15}}>{card.text}</Text>
        <View style={styles.space} />
        <Button 
          style={styles.sect}
          title="Get Answer"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => setDisp(true)}
        />
        </View>
      )
    }
    } else {
      return (
        <View style={styles.card}>
            <Text>{card.answer}</Text>
            <Button 
              style={styles.sect}
              title="Return"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => setDisp(false)}
            />
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logo: {
      width: '45%',
      height: '45%',
      resizeMode: 'contain',
    },
    sect:{
      padding: 1,
    },
    card: {
      flex: 0.45,
      borderRadius: 8,
      shadowRadius: 25,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: {width: 0, height: 0},
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 600
    },
    space: {
      width: 20,
      height: 20,
    },
  })