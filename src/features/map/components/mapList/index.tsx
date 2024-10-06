import React, { useCallback } from "react";
import { StyleSheet, FlatList } from "react-native";

import MapListHeader from "features/map/components/mapList/MapListHeader";
import MapListItem from "features/map/components/mapList/MapListItem";

const MapList = () => {
  const styles = getStyles();

  const data = [
    { id: 1, name: "name" },
    { id: 2, name: "name2" },
    { id: 3, name: "name2" },
    { id: 4, name: "name2" },
    { id: 5, name: "name2" },
    { id: 6, name: "name2" },
    { id: 7, name: "name2" },
    { id: 8, name: "name2" },
  ];

  const renderHeader = useCallback(() => <MapListHeader />, []);
  const renderItem = useCallback(() => <MapListItem />, []);

  return (
    <FlatList
      data={data}
      ListHeaderComponent={renderHeader}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const getStyles = () =>
  StyleSheet.create({
    list: {
      padding: 24,
    },
  });

export default MapList;
