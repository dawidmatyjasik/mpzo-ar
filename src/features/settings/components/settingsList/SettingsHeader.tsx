import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "react-native-paper";

const SettingsHeader = () => {
  const styles = getStyles();
  return (
    <Text variant="headlineLarge" style={styles.text}>
      Ustawienia
    </Text>
  );
};

const getStyles = () =>
  StyleSheet.create({
    text: {
      textAlign: "center",
      marginBottom: 16,
    },
  });

export default SettingsHeader;
