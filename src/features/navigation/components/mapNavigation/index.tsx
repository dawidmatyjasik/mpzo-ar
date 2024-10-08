import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabParamList, TabScreenProps } from "features/navigation/components/bottomTabNavigation";
import HeroScreen from "screens/hero";
import { HeroScreenType } from "screens/hero/types";
import { heroScreenOptions } from "screens/hero/utils";
import MapScreen from "screens/map";
import { mapScreenOptions } from "screens/map/utils";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MapStackParamList = {
  MapScreen: undefined;
  HeroScreen: HeroScreenType;
};

export type MapStackScreenProps<T extends keyof MapStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<MapStackParamList, T>,
  TabScreenProps<keyof BottomTabParamList>
>;

const MapStack = createNativeStackNavigator<MapStackParamList>();

const MapNavigation = () => {
  return (
    <MapStack.Navigator initialRouteName="MapScreen">
      <MapStack.Screen name="MapScreen" component={MapScreen} options={mapScreenOptions} />
      <MapStack.Screen name="HeroScreen" component={HeroScreen} options={heroScreenOptions} />
    </MapStack.Navigator>
  );
};

export default MapNavigation;
