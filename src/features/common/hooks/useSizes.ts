import { Dimensions } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SCREEN_HEIGHT, TABS_HEIGHT } from "features/common/consts";

export type RelativeSize = (multiplayer: number) => number;

export const useSizes = () => {
  const { height, width } = Dimensions.get("window");

  const { bottom, top } = useSafeAreaInsets();

  const getRelativeSize = (multiplayer: number) => {
    return (SCREEN_HEIGHT - bottom - top - TABS_HEIGHT) * multiplayer;
  };

  return { height, width, getRelativeSize };
};
