import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";

import { useTranslation } from "react-i18next";

import { SettingsStackScreenProps } from "features/navigation/components/settingsNavigation";

export type PolicyScreenProps = SettingsStackScreenProps<"PolicyScreen">;

const PolicyScreen: FC<PolicyScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: t("policy.title") });
  }, [navigation, t]);

  return (
    <View>
      <Text>EmptyScreen</Text>
    </View>
  );
};

export default PolicyScreen;
