import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabParamList, TabScreenProps } from "features/navigation/components/bottomTabNavigation";
import SettingsScreen from "screens/settings";
import { settingsScreenOptions } from "screens/settings/utils";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type SettingsStackParamList = {
  SettingsScreen: undefined;
};

export type SettingsStackScreenProps<T extends keyof SettingsStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<SettingsStackParamList, T>,
  TabScreenProps<keyof BottomTabParamList>
>;

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsNavigation = () => {
  return (
    <SettingsStack.Navigator initialRouteName="SettingsScreen">
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} options={settingsScreenOptions} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigation;
