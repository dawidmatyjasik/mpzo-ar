import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import CustomButton from "components/customButton";

interface IntroActionsProps {
  handleNext: () => void;
  handleBack: () => void;
  isFirst: boolean;
}

const IntroActions = ({ isFirst, handleNext, handleBack }: IntroActionsProps) => {
  const styles = getStyles(isFirst);
  return (
    <View style={styles.actions}>
      {!isFirst && (
        <CustomButton mode="outlined" onPress={handleBack} style={styles.button}>
          Wstecz
        </CustomButton>
      )}
      <CustomButton mode="contained" onPress={handleNext} style={styles.button}>
        Dalej
      </CustomButton>
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const getStyles = (isFirst: boolean) => {
  return StyleSheet.create({
    actions: {
      flexDirection: "row",
      gap: 10,
      width: SCREEN_WIDTH,
      paddingHorizontal: 24,
    },
    button: {
      width: isFirst ? "100%" : "50%",
    },
  });
};

export default IntroActions;
