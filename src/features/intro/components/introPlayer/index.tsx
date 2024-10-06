import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { ActivityIndicator } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import IoniconsPlay from "react-native-vector-icons/Ionicons";

import { useIntroPlayer } from "features/intro/hooks/useIntroPlayer";
import { SlideTrack } from "features/intro/types";
import { useAppTheme } from "features/theme/hooks";

interface IntroPlayerProps {
  mp3: SlideTrack;
}

const IntroPlayer = ({ mp3 }: IntroPlayerProps) => {
  const { colors } = useAppTheme();

  const styles = getStyles(colors);

  const { handlePause, handlePlay, isPaused, isReady } = useIntroPlayer({ mp3 });

  return (
    <TouchableOpacity
      style={styles.player}
      onPress={isReady ? handlePlay : handlePause}
      hitSlop={10}
      disabled={!isPaused && !isReady}>
      <View style={styles.playerWrapper}>
        {isPaused && <IoniconsPlay name="pause" size={28} color={colors.primary} style={styles.playerIcon} />}

        {isReady && <IoniconsPlay name="play" size={28} color={colors.primary} style={styles.playerIcon} />}

        {!isPaused && !isReady && <ActivityIndicator color={colors.primary} style={styles.playerIcon} />}
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
