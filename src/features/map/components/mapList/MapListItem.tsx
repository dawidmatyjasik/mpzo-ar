import React from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, List, useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

const MapListItem = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.list}>
      <List.Item
        title="First Item"
        description="Item description"
        left={(props) => <Avatar.Text {...props} label="A" size={40} color="white" />}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
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
