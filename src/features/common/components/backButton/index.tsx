import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import EntypoIcon from "react-native-vector-icons/Entypo";

import { useAppTheme } from "features/theme/hooks";

interface BackButtonProps {
  text?: string;
  customGoBack?: () => void;
}

const BackButton = ({ text, customGoBack }: BackButtonProps) => {
  const navigation = useNavigation();
  const { colors } = useAppTheme();

  const styles = getStyles();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={customGoBack || goBack}
      style={styles.container}
      hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}>
      <EntypoIcon name="chevron-left" size={24} color={colors.onSurface} />
      <Text variant="bodyLarge">{text}</Text>
    </TouchableOpacity>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
  });

export default BackButton;
