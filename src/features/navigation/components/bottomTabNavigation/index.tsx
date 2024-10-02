import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { type CompositeScreenProps, type NavigatorScreenParams } from "@react-navigation/native";

import MapNavigation, { MapStackParamList } from "features/navigation/components/mapNavigation";
import { RootScreenProps, RootStackParamList } from "features/navigation/components/rootNavigation";
import SettingsNavigation, { SettingsStackParamList } from "features/navigation/components/settingsNavigation";
import EmptyScreen from "screens/empty";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type BottomTabParamList = {
  MapNavigation: NavigatorScreenParams<MapStackParamList>;
  Path: undefined;
  SettingsNavigation: NavigatorScreenParams<SettingsStackParamList>;
};

export type TabScreenProps<T extends keyof BottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, T>,
  RootScreenProps<keyof RootStackParamList>
>;

const TabStack = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigation = () => {
  return (
    <TabStack.Navigator initialRouteName="SettingsNavigation">
      <TabStack.Screen name="MapNavigation" component={MapNavigation} />
      <TabStack.Screen name="Path" component={EmptyScreen} />
      <TabStack.Screen name="SettingsNavigation" component={SettingsNavigation} />
    </TabStack.Navigator>
  );
};

export default BottomTabNavigation;
