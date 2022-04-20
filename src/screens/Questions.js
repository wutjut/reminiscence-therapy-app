// Aboutscreen.js
import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-deck-swiper';
import Card from './Card';
import questions from '../questions/questions';
import { CheckBox } from 'react-native-elements'
import FormInput from '../Components/FormInput';
import data from '../card-data/final_data';


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
    // get decade parameter passed from home screen
    const decade = this.props.route.params.decade;
    // filter dajs file by decade
    const cardData = data.filter(obj=> obj.decade == decade);

    return (
      <View style={styles.container}>
        <Swiper
          cards={cardData}
          cardIndex={this.state.index}
          renderCard={(item) => <Card card={item}/>}
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
    backgroundColor: 'white',
    marginTop: 50,
  },
})