import React from "react";
import { StyleSheet } from "react-native";

import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";

const MapListHeader = () => {
  const styles = getStyles();
  const { t } = useTranslation();
  return (
    <Text variant="headlineLarge" style={styles.text}>
      {t("map.title")}
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
