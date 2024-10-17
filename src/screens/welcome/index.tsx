import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { useTranslation } from "react-i18next";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "components/customButton";
import { IntroStackScreenProps } from "features/navigation/components/introNavigation";

type WelcomeScreenProps = IntroStackScreenProps<"WelcomeScreen">;

const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <View style={styles.textContainer}>
          <Text variant="headlineLarge">{t("welcome.title")}</Text>
          <Text variant="bodyLarge" style={styles.textBody}>
            {t("welcome.description")}
          </Text>
        </View>
      </View>

      <Text variant="bodySmall" style={styles.textInfo}>
        {t("welcome.hint")}
      </Text>
      <CustomButton mode="contained" onPress={() => navigation.push("IntroScreen")}>
        {t("welcome.next")}
      </CustomButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginHorizontal: 24,
  },
  textWrapper: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    gap: 16,
    top: "50%",
    transform: [{ translateY: -50 }],
  },
  textBody: {
    textAlign: "center",
  },
  textInfo: {
    marginVertical: 48,
    textAlign: "center",
  },
});

export default WelcomeScreen;
