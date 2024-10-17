import React from "react";
import { StyleSheet } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Avatar, List } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

import { MapStackParamList } from "features/navigation/components/mapNavigation";
import { useAppTheme } from "features/theme/hooks";

interface MapListItemProps {
  name: string;
  description: string;
}

const MapListItem = ({ name, description }: MapListItemProps) => {
  const { colors } = useAppTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const navigation = useNavigation<NavigationProp<MapStackParamList>>();

  return (
    <List.Item
      title={t(name)}
      description={t(description)}
      left={(props) => (
        <Avatar.Text
          label={name.charAt(0).toLocaleUpperCase()}
          size={40}
          color="white"
          style={[props.style, styles.avatar]}
        />
      )}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      descriptionNumberOfLines={1}
      onPress={() => navigation.navigate("HeroScreen", { name, description })}
    />
  );
};

const getStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    avatar: {
      backgroundColor: colors.secondary,
    },
  });

export default MapListItem;
