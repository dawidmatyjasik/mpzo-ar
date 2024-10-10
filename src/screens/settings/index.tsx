import React, { FC, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { useTranslation } from "react-i18next";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { SettingsStackScreenProps } from "features/navigation/components/settingsNavigation";
import SettingsList from "features/settings/components/settingsList";
import { SETTINGS_STRUCTURE } from "features/settings/consts";

type SettingsScreenProps = SettingsStackScreenProps<"SettingsScreen">;

const SettingsScreen: FC<SettingsScreenProps> = ({ navigation }) => {
  const styles = getStyles();
  const { t } = useTranslation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: t("settings.headerTitle") });
  }, [navigation, t]);

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView>
        {SETTINGS_STRUCTURE.map(({ description, name, info, route }, i) => (
          <View key={name}>
            <SettingsList name={name} description={description} info={info} route={route} />
            {i !== SETTINGS_STRUCTURE.length - 1 && <Divider style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    divider: {
      marginHorizontal: 20,
    },
  });

export default SettingsScreen;
