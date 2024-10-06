import { StyleSheet } from "react-native";

import { type CompositeScreenProps, type NavigatorScreenParams } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import { getNavigationOptions } from "features/navigation/components/bottomTabNavigation/utils";
import MapNavigation, { MapStackParamList } from "features/navigation/components/mapNavigation";
import { getMapScreenOptions } from "features/navigation/components/mapNavigation/utils";
import { RootScreenProps, RootStackParamList } from "features/navigation/components/rootNavigation";
import SettingsNavigation, { SettingsStackParamList } from "features/navigation/components/settingsNavigation";
import { getSettingsScreenOptions } from "features/navigation/components/settingsNavigation/utils";
import EmptyScreen from "screens/empty";
import { getPathScreenOptions } from "screens/path/utils";

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

const TabStack = createMaterialBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigation = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const styles = getStyles(colors);

  const navigationOptions = getNavigationOptions();
  const mapScreenOptions = getMapScreenOptions(colors, t);
  const pathScreenOptions = getPathScreenOptions(colors, t);
  const settingsScreenOptions = getSettingsScreenOptions(colors, t);

  return (
    <TabStack.Navigator
      initialRouteName="SettingsNavigation"
      inactiveColor={colors.onSurface}
      activeColor={colors.secondary}
      screenOptions={navigationOptions}
      activeIndicatorStyle={styles.navigator}>
      <TabStack.Screen name="MapNavigation" component={MapNavigation} options={mapScreenOptions} />
      <TabStack.Screen name="Path" component={EmptyScreen} options={pathScreenOptions} />
      <TabStack.Screen name="SettingsNavigation" component={SettingsNavigation} options={settingsScreenOptions} />
    </TabStack.Navigator>
  );
};

const getStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    navigator: {
      backgroundColor: colors.secondary,
      color: "white",
    },
  });

export default BottomTabNavigation;
