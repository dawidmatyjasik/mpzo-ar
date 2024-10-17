import React, { Dispatch, SetStateAction } from "react";
import { Text } from "react-native";

import { Modal, Portal } from "react-native-paper";

interface RestartModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const RestartModal = ({ isVisible, setIsVisible }: RestartModalProps) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={() => setIsVisible(false)} contentContainerStyle={containerStyle}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
};

export default RestartModal;
