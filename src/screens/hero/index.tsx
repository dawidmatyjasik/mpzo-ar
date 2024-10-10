import React, { FC, useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import MapImage from "assets/png/step1-image.png";
import { MapStackScreenProps } from "features/navigation/components/mapNavigation";

type HeroScreenProps = MapStackScreenProps<"HeroScreen">;

const HeroScreen: FC<HeroScreenProps> = ({ route, navigation }) => {
  const { description, name } = route.params;
  const styles = getStyles();
  const { t } = useTranslation();

  useEffect(() => {
    navigation.setOptions({ title: t(name) });
  }, [name, navigation, t]);

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView>
        <Image source={MapImage} />
        <View style={styles.content}>
          <Text variant="headlineLarge">{t(name)}</Text>
          <Text variant="bodyLarge">{t(description)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: 32,
      gap: 16,
    },
  });

export default HeroScreen;
