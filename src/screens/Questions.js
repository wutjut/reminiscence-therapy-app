import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import data from "../card-data/final_data";

export default class QuestionsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  onSwiped = () => {
    this.setState({ index: this.state.index + 1 });
  };
  render() {
    // get decade parameter passed from home screen
    const decade = this.props.route.params.decade;
    // filter dajs file by decade
    const cardData = data.filter((obj) => obj.decade == decade);
    if (this.state.index == cardData.length - 1) {
      return (
        <View style={{ justifyContent: "center", height: "100%" }}>
          <Text style={styles.text}>You've reached the end of the deck</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Swiper
            cards={cardData}
            cardIndex={this.state.index}
            renderCard={(item) => <Card card={item} />}
            onSwiped={this.onSwiped}
            stackSize={4}
            stackScale={10}
            stackSeparation={14}
            disableTopSwipe
            disableBottomSwipe
            disableRightSwipe
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 50,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 410,
    width: 350,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
