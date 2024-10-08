import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "react-native-paper";

const MapListHeader = () => {
  const styles = getStyles();
  return (
    <Text variant="headlineLarge" style={styles.text}>
      Bohaterowie
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

export default MapListHeader;
