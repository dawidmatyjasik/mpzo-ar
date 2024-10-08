import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabParamList, TabScreenProps } from "features/navigation/components/bottomTabNavigation";
import AboutScreen from "screens/about";
import { aboutScreenOptions } from "screens/about/utils";
import MuseumScreen from "screens/museum";
import { museumScreenOptions } from "screens/museum/utils";
import PolicyScreen from "screens/policy";
import { policyScreenOptions } from "screens/policy/utils";
import SettingsScreen from "screens/settings";
import { settingsScreenOptions } from "screens/settings/utils";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type SettingsStackParamList = {
  SettingsScreen: undefined;
  AboutScreen: undefined;
  MuseumScreen: undefined;
  PolicyScreen: undefined;
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
      <SettingsStack.Screen name="AboutScreen" component={AboutScreen} options={aboutScreenOptions} />
      <SettingsStack.Screen name="MuseumScreen" component={MuseumScreen} options={museumScreenOptions} />
      <SettingsStack.Screen name="PolicyScreen" component={PolicyScreen} options={policyScreenOptions} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigation;
