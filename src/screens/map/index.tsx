import React, { FC } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import MapImage from "assets/png/step1-image.png";
import { RelativeSize, useSizes } from "features/common/hooks/useSizes";
import MapListHeader from "features/map/components/mapList/MapListHeader";
import MapListItem from "features/map/components/mapList/MapListItem";
import { HERO_STRUCTURE } from "features/map/consts";
import { MapStackScreenProps } from "features/navigation/components/mapNavigation";

type MapScreenProps = MapStackScreenProps<"MapScreen">;

const MapScreen: FC<MapScreenProps> = () => {
  const { getRelativeSize } = useSizes();

  const styles = getStyles(getRelativeSize);

  return (
    <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
      <ScrollView>
        <View>
          <Image source={MapImage} style={styles.mapImage as any} />
          <View style={styles.listContainer}>
            <MapListHeader />
            {HERO_STRUCTURE.map(({ description, name }) => (
              <MapListItem key={name} name={name} description={description} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = (getRelativeSize: RelativeSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    mapImage: {
      width: "100%",
      height: getRelativeSize(0.6),
      flex: 1,
    },
    listContainer: {
      paddingVertical: 32,
    },
  });

export default MapScreen;
