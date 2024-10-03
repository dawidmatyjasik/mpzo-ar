import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import { Text } from "react-native-paper";

import Image1 from "assets/png/step1-image.png";

const Step1 = () => {
  return (
    <View style={styles.container}>
      <Image source={Image1} />
      <View style={styles.content}>
        <Text variant="headlineLarge" style={styles.text}>
          Czym jest ścieżka Superbohaterów?
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem{" "}
        </Text>
      </View>
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
  content: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    textAlign: "center",
  },
});

export default Step1;
