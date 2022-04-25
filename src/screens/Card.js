import React, { useRef, useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import Video from "react-native-video";
import MusicControls from "../Components/MusicControls";
import vinyl_record from "../assets/vynl.jpg";
import { Audio } from "expo-av";
import AntDesign from "react-native-vector-icons/AntDesign";

function dispAnswer(disp) {
  disp = true;
}

function dispQuestion(disp) {
  disp = false;
}

export default function Card({ card, props }) {
  // const [sound, setSound] = React.useState();
  const [disp, setDisp] = React.useState();
  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);
  const [pause, setPause] = useState(true);
  const sound = React.useRef(new Audio.Sound());
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);

  React.useEffect(() => {
    LoadAudio();
  }, []);

  const handleFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const togglePlayPauseBtn = () => {
    setPause(!pause);
  };

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(card.audio);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function pauseSound() {
    const { sound } = await Audio.Sound.createAsync(card.audio);
    setSound(sound);
    console.log("pause sound");
    await sound.pauseAsync();
  }

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          togglePlayPauseBtn();
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
          togglePlayPauseBtn();
        }
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(card.audio, {}, true);
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  if (card.mediaType == "Image") {
    return (
      <View>
        <TouchableOpacity
          onPress={handleFlip}
          activeOpacity={1}
          style={[
            { transform: [{ rotateY: interpolateFront }] },
            styles.card,
            styles.hidden,
          ]}
        >
          <Image
            resizeMode="contain"
            source={card.image}
            style={styles.image}
          />
          <View style={styles.space} />
          <Text style={styles.text}>{card.text}</Text>
          <View style={styles.space} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFlip}
          activeOpacity={1}
          style={[
            { transform: [{ rotateY: interpolateBack }] },
            styles.card,
            styles.hidden,
            styles.back,
          ]}
        >
          <View style={styles.space} />
          <Text style={styles.text}>{card.answer}</Text>
          <View style={styles.space} />
        </TouchableOpacity>
      </View>
    );
  } else if (card.mediaType == "Audio") {
    return (
      <View>
        <View
          // onPress={handleFlip}
          // activeOpacity={1}
          style={[
            // { transform: [{ rotateY: interpolateFront }] },
            styles.card,
            styles.hidden,
          ]}
        >
          <Image
            resizeMode="contain"
            source={vinyl_record}
            style={styles.image}
          />
          {pause ? (
            <TouchableOpacity onPress={PlayAudio}>
              <AntDesign name="playcircleo" size={30} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={PauseAudio}>
              <AntDesign name="pausecircleo" size={30} />
            </TouchableOpacity>
          )}
          {/* <Button title="Play Song" onPress={PlayAudio} />
          <Button title="Pause Song" onPress={PauseAudio} /> */}
          <View style={styles.space} />
          <Text style={styles.text}>{card.text}</Text>
          <View style={styles.space} />
        </View>
        {/* <View
          // onPress={handleFlip}
          // activeOpacity={1}
          style={[
            // { transform: [{ rotateY: interpolateBack }] },
            styles.card,
            styles.hidden,
            styles.back,
          ]}
        >
          <View style={styles.space} />
          <Text style={styles.text}>{card.answer}</Text>
          <View style={styles.space} />
        </View> */}
      </View>
    );
  } else {
    return (
      <View>
        <TouchableOpacity
          onPress={handleFlip}
          activeOpacity={1}
          style={[
            { transform: [{ rotateY: interpolateFront }] },
            styles.card,
            styles.hidden,
          ]}
        >
          <View style={styles.space} />
          <Text style={styles.text}>{card.text}</Text>
          <View style={styles.space} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFlip}
          activeOpacity={1}
          style={[
            { transform: [{ rotateY: interpolateBack }] },
            styles.card,
            styles.hidden,
            styles.back,
          ]}
        >
          <View style={styles.space} />
          <Text style={styles.text}>{card.answer}</Text>
          <View style={styles.space} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: "center",
  },
  card: {
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
  space: {
    width: 20,
    height: 20,
  },
  hidden: {
    backfaceVisibility: "hidden",
  },
  back: {
    position: "absolute",
    top: 0,
  },
  image: {
    width: "100%",
    height: 275,
  },
});
