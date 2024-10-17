import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { useTranslation } from "react-i18next";
import { List } from "react-native-paper";

import RestartModal from "features/settings/components/restartModal";
import { useAppTheme } from "features/theme/hooks";

const SettingsModalItem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { fonts } = useAppTheme();
  const styles = getStyles();
  const { t } = useTranslation();

  return (
    <>
      <List.Item
        title={t("restart.title")}
        description={t("restart.info")}
        titleStyle={{ ...fonts.titleLarge }}
        contentStyle={styles.content}
        descriptionStyle={{ ...fonts.bodyMedium }}
        descriptionNumberOfLines={1}
        onPress={() => setIsModalVisible(true)}
      />
      <RestartModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
    </>
  );
};

const getStyles = () =>
  StyleSheet.create({
    content: {
      padding: 8,
      marginHorizontal: 8,
    },
  });

export default SettingsModalItem;
