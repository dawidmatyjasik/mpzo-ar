import React from "react";
import { View, StyleSheet, Dimensions, Image, Text as NativeText } from "react-native";

import { Trans, useTranslation } from "react-i18next";
import { Text, useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

import IntroPlayer from "features/intro/components/introPlayer";
import { SlideProps } from "features/intro/types";

const Step = ({ description, image, title, mp3 }: Omit<SlideProps, "name">) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} />
        <IntroPlayer mp3={mp3} />
      </View>
      <View style={styles.content}>
        <Text variant="headlineLarge" style={styles.text}>
          <Trans
            defaults={title}
            values={{ AR: "AR" }}
            components={{ highlight: <NativeText style={styles.highlight} /> }}
          />
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          {t(description)}
        </Text>
      </View>
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const getStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: SCREEN_WIDTH,
    },
    imageContainer: {
      position: "relative",
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
    highlight: {
      color: colors.secondary,
    },
  });

export default Step;
