import React from "react";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { List } from "react-native-paper";

import { SettingsStackParamList } from "features/navigation/components/settingsNavigation";
import { SettingsRoute } from "features/settings/types";
import { useAppTheme } from "features/theme/hooks";

interface SettingsListProps {
  name: string;
  info: string;
  description: string;
  route: SettingsRoute;
}

const SettingsList = ({ name, info, route }: SettingsListProps) => {
  const { fonts } = useAppTheme();
  const styles = getStyles();
  const { t } = useTranslation();
  const navigation = useNavigation<NativeStackNavigationProp<SettingsStackParamList>>();

  const handlePress = () => {
    navigation.push(route);
  };

  return (
    <List.Item
      title={t(name)}
      description={t(info)}
      titleStyle={{ ...fonts.titleLarge }}
      contentStyle={styles.content}
      descriptionStyle={{ ...fonts.bodyMedium }}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      descriptionNumberOfLines={1}
      onPress={handlePress}
    />
  );
};

const getStyles = () =>
  StyleSheet.create({
    content: {
      padding: 8,
      marginHorizontal: 8,
    },
  });

export default SettingsList;
