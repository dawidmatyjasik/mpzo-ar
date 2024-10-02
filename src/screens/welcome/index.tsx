import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { IntroStackScreenProps } from "features/navigation/components/introNavigation";

type WelcomeScreenProps = IntroStackScreenProps<"WelcomeScreen">;

const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <View style={styles.textContainer}>
          <Text variant="headlineLarge">Dzień dobry</Text>
          <Text variant="bodyLarge" style={styles.textBody}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </Text>
        </View>
      </View>

      <Text variant="bodySmall" style={styles.textInfo}>
        Jeśli jesteś osobą z dysfunkcjami, możesz skorzystać z ułatwień dostępnych w Twoim urządzeniu
      </Text>
      <Button mode="contained" onPress={() => navigation.push("IntroScreen")}>
        Dalej
      </Button>
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
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
