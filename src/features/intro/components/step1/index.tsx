import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Step1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text>Step1</Text>
      </View>
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  welcome: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
});

export default Step1;
