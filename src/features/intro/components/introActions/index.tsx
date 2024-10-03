import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";

interface IntroActionsProps {
  handleNext: () => void;
  handleBack: () => void;
  isFirst: boolean;
}

const IntroActions = ({ isFirst, handleNext, handleBack }: IntroActionsProps) => {
  return (
    <View style={styles.actions}>
      {!isFirst && (
        <Button mode="outlined" onPress={handleBack} style={styles.button}>
          Wstecz
        </Button>
      )}
      <Button mode="contained" onPress={handleNext} style={styles.button}>
        Dalej
      </Button>
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    gap: 10,
    width: SCREEN_WIDTH,
    paddingHorizontal: 24,
  },
  button: {
    width: "100%",
  },
});

export default IntroActions;
