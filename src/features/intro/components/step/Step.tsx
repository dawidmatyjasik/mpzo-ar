import React from "react";
import { View, StyleSheet, Dimensions, Image, Text as NativeText } from "react-native";

import { Trans, useTranslation } from "react-i18next";
import { Button, Text, useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

import IntroPlayer from "features/intro/components/introPlayer";
import { SlideProps } from "features/intro/types";

interface StepProps extends Omit<SlideProps, "name"> {
  handleSkip: () => void;
}

const Step = ({ description, image, title, mp3, handleSkip }: StepProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} />
        <Button
          icon="chevron-right"
          mode="text"
          style={styles.skipButton}
          contentStyle={styles.skipButtonContent}
          textColor={colors.onPrimary}
          onPress={handleSkip}>
          Pomiń
        </Button>
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
    skipButton: {
      flexDirection: "row-reverse",
      position: "absolute",
      top: 16,
      right: 16,
    },
    skipButtonContent: {
      flexDirection: "row-reverse",
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
