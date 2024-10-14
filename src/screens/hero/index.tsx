import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@react-navigation/elements";
import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import BackButton from "features/common/components/backButton";
import { TABS_HEIGHT } from "features/common/consts";
import { useSizes } from "features/common/hooks/useSizes";
import { MapStackScreenProps } from "features/navigation/components/mapNavigation";
import HeroVideo from "features/video/components";

type HeroScreenProps = MapStackScreenProps<"HeroScreen">;

const HeroScreen: FC<HeroScreenProps> = ({ route }) => {
  const { description, name } = route.params;

  const styles = getStyles();

  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  const { height } = useSizes();

  return (
    <SafeAreaView style={[{ height: height - bottom - TABS_HEIGHT }]} edges={["right", "left"]}>
      <View style={styles.headerContainer}>
        <Header title={t(name)} headerLeft={() => <BackButton />} headerBackgroundContainerStyle={styles.headerSize} />
      </View>
      <HeroVideo />
      <ScrollView>
        <View style={styles.content}>
          <Text variant="headlineLarge">{t(name)}</Text>
          <Text variant="bodyLarge">{t(description)}</Text>
          <Text variant="bodyLarge">{t(description)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = () =>
  StyleSheet.create({
    content: {
      padding: 32,
      gap: 16,
    },
    headerContainer: {
      paddingHorizontal: 16,
    },
    headerSize: {
      height: 98,
    },
  });

export default HeroScreen;
