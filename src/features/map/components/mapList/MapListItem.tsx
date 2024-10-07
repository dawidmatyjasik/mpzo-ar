import React from "react";
import { StyleSheet, View } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Avatar, List, useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

import { MapStackParamList } from "features/navigation/components/mapNavigation";

interface MapListItemProps {
  name: string;
  description: string;
}

const MapListItem = ({ name, description }: MapListItemProps) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const navigation = useNavigation<NavigationProp<MapStackParamList>>();

  return (
    <View style={styles.list}>
      <List.Item
        title={name}
        description={description}
        left={(props) => (
          <Avatar.Text label={name.charAt(0)} size={40} color="white" style={[props.style, styles.avatar]} />
        )}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
        descriptionNumberOfLines={1}
        onPress={() => navigation.navigate("HeroScreen", { name, description })}
      />
    </View>
  );
};

const getStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    list: {
      marginHorizontal: -16,
      marginRight: -20,
    },
    avatar: {
      backgroundColor: colors.secondary,
    },
  });

export default MapListItem;
