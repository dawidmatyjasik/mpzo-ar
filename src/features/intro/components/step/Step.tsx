import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";

import { SlideProps } from "features/intro/types";

const Step = ({ description, image, title }: Omit<SlideProps, "name">) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Image source={image} />
      <View style={styles.content}>
        <Text variant="headlineLarge" style={styles.text}>
          {t(title)}
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          {t(description)}
        </Text>
      </View>
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
  content: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    textAlign: "center",
  },
});

export default Step;
