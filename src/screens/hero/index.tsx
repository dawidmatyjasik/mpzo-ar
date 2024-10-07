import React, { FC } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import MapImage from "assets/png/step1-image.png";
import { MapStackScreenProps } from "features/navigation/components/mapNavigation";

type HeroScreenProps = MapStackScreenProps<"HeroScreen">;

const HeroScreen: FC<HeroScreenProps> = ({ route }) => {
  const { description, name } = route.params;
  const styles = getStyles();
  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <Image source={MapImage} style={styles.mapImage as any} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text variant="headlineLarge">{name}</Text>
        <Text variant="bodyLarge">{description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
    },
    mapImage: {
      height: "60%",
    },
    content: {
      padding: 32,
      gap: 16,
    },
  });

export default HeroScreen;
