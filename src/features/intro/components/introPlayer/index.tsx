import React from "react";
import { View, StyleSheet } from "react-native";

const IntroPlayer = () => {
  const styles = getStyles();

  return <View style={styles.player} />;
};

const getStyles = () =>
  StyleSheet.create({
    player: {
      position: "absolute",
      bottom: -50,
      alignSelf: "center",
      width: 80,
      height: 80,
      backgroundColor: "black",
      borderRadius: 100,
    },
  });

export default IntroPlayer;
