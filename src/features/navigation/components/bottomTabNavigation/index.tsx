import { StyleSheet } from "react-native";

import { type CompositeScreenProps, type NavigatorScreenParams } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TABS_HEIGHT } from "features/common/consts";
import { getNavigationOptions } from "features/navigation/components/bottomTabNavigation/utils";
import MapNavigation, { MapStackParamList } from "features/navigation/components/mapNavigation";
import { getMapScreenOptions } from "features/navigation/components/mapNavigation/utils";
import { RootScreenProps, RootStackParamList } from "features/navigation/components/rootNavigation";
import SettingsNavigation, { SettingsStackParamList } from "features/navigation/components/settingsNavigation";
import { getSettingsScreenOptions } from "features/navigation/components/settingsNavigation/utils";
import { useAppTheme } from "features/theme/hooks";
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
  const { colors } = useAppTheme();
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();

  const styles = getStyles(colors, bottom);

  const navigationOptions = getNavigationOptions();
  const mapScreenOptions = getMapScreenOptions(colors, t);
  const pathScreenOptions = getPathScreenOptions(colors, t);
  const settingsScreenOptions = getSettingsScreenOptions(colors, t);

  return (
    <TabStack.Navigator
      initialRouteName="MapNavigation"
      inactiveColor={colors.onSurface}
      activeColor={colors.secondary}
      screenOptions={navigationOptions}
      barStyle={styles.navigatorBar}
      activeIndicatorStyle={styles.navigator}>
      <TabStack.Screen name="MapNavigation" component={MapNavigation} options={mapScreenOptions} />
      <TabStack.Screen name="Path" component={EmptyScreen} options={pathScreenOptions} />
      <TabStack.Screen name="SettingsNavigation" component={SettingsNavigation} options={settingsScreenOptions} />
    </TabStack.Navigator>
  );
};

const getStyles = (colors: MD3Colors, inset: number) =>
  StyleSheet.create({
    navigator: {
      backgroundColor: colors.secondary,
      color: "white",
    },
    navigatorBar: {
      borderTopWidth: 1,
      borderColor: "#e2e2e2", //TODO: update color
      backgroundColor: "white",
      height: TABS_HEIGHT + inset,
    },
  });

export default BottomTabNavigation;
