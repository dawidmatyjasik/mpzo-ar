import React from "react";
import { Animated, StyleSheet, useWindowDimensions, View } from "react-native";

import { slides } from "features/intro/consts";

interface IntroPaginationProps {
  scrollX: Animated.Value;
}

const IntroPagination = ({ scrollX }: IntroPaginationProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.pagination}>
      {slides.map(({ name }, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: "clamp",
        });
        return <Animated.View style={[styles.paginationDot, { opacity }]} key={name} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "center",
    paddingBottom: 48,
  },
  paginationDot: {
    height: 8,
    width: 8,
    borderRadius: 100,
    backgroundColor: "#242424",
  },
});

export default IntroPagination;
