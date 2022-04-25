import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Audio } from "expo-av";

export default function MusicControls({ pause }) {
  return (
    <View style={styles.container}>
      {pause ? (
        <TouchableOpacity onPress={togglePlayPauseBtn}>
          <AntDesign name="playcircleo" size={30} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={togglePlayPauseBtn}>
          <AntDesign name="pausecircleo" size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
