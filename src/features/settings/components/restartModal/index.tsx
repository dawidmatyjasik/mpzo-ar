import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Modal, Portal, Text } from "react-native-paper";

import CustomButton from "components/customButton";
import { StorageType } from "features/common/types/storage";
import { moveToIntro } from "features/navigation/utils";

interface RestartModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const RestartModal = ({ isVisible, setIsVisible }: RestartModalProps) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleConfirm = async () => {
    try {
      await AsyncStorage.removeItem(StorageType.WasViewed);
    } catch (error) {
      console.log(error);
    } finally {
      navigation.dispatch(moveToIntro);
    }
  };

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
          <CustomButton mode="contained" onPress={handleConfirm}>
            {t("restart.confirm")}
          </CustomButton>
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
