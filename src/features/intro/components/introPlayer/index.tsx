import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { MD3Colors } from "react-native-paper/lib/typescript/types";
import IoniconsPlay from "react-native-vector-icons/Ionicons";

import { useAppTheme } from "features/theme/hooks";

const IntroPlayer = () => {
  const { colors } = useAppTheme();
  const styles = getStyles(colors);

  return (
    <TouchableOpacity style={styles.player}>
      <View style={styles.playerWrapper}>
        <IoniconsPlay name="play" size={28} color={colors.primary} style={styles.playerIcon} />
      </View>
    </TouchableOpacity>
  );
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
    playerWrapper: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    playerIcon: {
      position: "absolute",
      alignSelf: "center",
      bottom: "50%",
      transform: [{ translateY: 14 }],
    },
  });

export default IntroPlayer;
