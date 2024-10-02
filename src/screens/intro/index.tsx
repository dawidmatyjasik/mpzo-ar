import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const IntroScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
});

export default IntroScreen;
