import React from "react";
import { Image, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import MapImage from "assets/png/step1-image.png";
import MapList from "features/map/components/mapList";

const MapScreen = () => {
  const styles = getStyles();
  return (
    <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
      <Image source={MapImage} style={styles.mapImage as any} />
      <MapList />
    </SafeAreaView>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
    },
    mapImage: {
      height: "60%",
    },
  });

export default MapScreen;
