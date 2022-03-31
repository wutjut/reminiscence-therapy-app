// Aboutscreen.js
import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-deck-swiper';
import questions from '../questions/questions';
import { CheckBox } from 'react-native-elements'
import FormInput from '../Components/FormInput';

const Card = ({card}) => (
  <View style={styles.card}>
      <Image
          source ={card.image}
          style={styles.logo}
      />
      <View style={styles.space} />
     <Text>{card.text}</Text>
     <View style={styles.space} />
     <Button 
      style={styles.sect}
      title="Get Answer"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      onPress={() => alert(card.answer)}
    />
    </View>
)

export default class QuestionsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
    }
  }
  onSwiped = () => {
    this.setState({index: this.state.index+1});
  }
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          cards={questions}
          cardIndex={this.state.index}
          renderCard={(card) => <Card card={card}/>}
          onSwiped={this.onSwiped}
          stackSize={4}
          stackScale={10}
          stackSeparation={14}
          disableTopSwipe
          disableBottomSwipe
          disableRightSwipe
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  space: {
    width: 20,
    height: 20,
  },
})