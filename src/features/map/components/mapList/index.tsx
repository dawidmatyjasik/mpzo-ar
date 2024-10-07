import React, { useCallback } from "react";
import { StyleSheet, FlatList, ListRenderItem } from "react-native";

import MapListHeader from "features/map/components/mapList/MapListHeader";
import MapListItem from "features/map/components/mapList/MapListItem";
import { HERO_STRUCTURE } from "features/map/consts";
import { HeroStructure } from "features/map/types";

const MapList = () => {
  const styles = getStyles();

  const renderHeader = useCallback(() => <MapListHeader />, []);
  const renderItem: ListRenderItem<HeroStructure> = useCallback(
    ({ item: { description, name } }) => <MapListItem name={name} description={description} />,
    []
  );

  return (
    <FlatList
      data={HERO_STRUCTURE}
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
