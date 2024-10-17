import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";

import { useTranslation } from "react-i18next";
import { Modal, Portal, Text } from "react-native-paper";

import CustomButton from "components/customButton";

interface RestartModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const RestartModal = ({ isVisible, setIsVisible }: RestartModalProps) => {
  const { t } = useTranslation();
  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={() => setIsVisible(false)} contentContainerStyle={styles.container}>
        <Text variant="headlineSmall" style={styles.text}>
          {t("restart.modalTitle")}
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          {t("restart.modalDescription")}
        </Text>
        <View style={styles.actionsContainer}>
          <CustomButton mode="contained"> {t("restart.confirm")}</CustomButton>
          <CustomButton mode="outlined"> {t("restart.cancel")}</CustomButton>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 24,
    padding: 32,
    borderRadius: 16,
    gap: 16,
  },
  text: {
    textAlign: "center",
  },
  actionsContainer: {
    gap: 12,
  },
});

export default RestartModal;
