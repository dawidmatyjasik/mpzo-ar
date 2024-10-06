import React from "react";
import { View, StyleSheet } from "react-native";

import { MD3Colors } from "react-native-paper/lib/typescript/types";

import { useAppTheme } from "features/theme/hooks";

const IntroPlayer = () => {
  const { colors } = useAppTheme();
  const styles = getStyles(colors);

  return <View style={styles.player} />;
};

const getStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    player: {
      position: "absolute",
      bottom: -40,
      alignSelf: "center",
      width: 80,
      height: 80,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: colors.onPrimaryContainer,
      backgroundColor: colors.onPrimary,
    },
  });

export default IntroPlayer;
