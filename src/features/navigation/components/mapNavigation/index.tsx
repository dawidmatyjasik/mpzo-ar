import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabParamList, TabScreenProps } from "features/navigation/components/bottomTabNavigation";
import EmptyScreen from "screens/empty";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MapStackParamList = {
  MapScreen: undefined;
};

export type MapStackScreenProps<T extends keyof MapStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<MapStackParamList, T>,
  TabScreenProps<keyof BottomTabParamList>
>;

const MapStack = createNativeStackNavigator<MapStackParamList>();

const MapNavigation = () => {
  return (
    <MapStack.Navigator initialRouteName="MapScreen">
      <MapStack.Screen name="MapScreen" component={EmptyScreen} />
    </MapStack.Navigator>
  );
};

export default MapNavigation;
