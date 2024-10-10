import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";

import { useTranslation } from "react-i18next";

import { SettingsStackScreenProps } from "features/navigation/components/settingsNavigation";

export type MuseumScreenProps = SettingsStackScreenProps<"MuseumScreen">;

const MuseumScreen: FC<MuseumScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: t("museum.title") });
  }, [navigation, t]);

  return (
    <View>
      <Text>EmptyScreen</Text>
    </View>
  );
};

export default MuseumScreen;
