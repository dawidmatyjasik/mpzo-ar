import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TFunction } from "i18next";
import { MaterialBottomTabNavigationOptions } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import FontistoIcon from "react-native-vector-icons/Fontisto";

export const bottomTabkNavigatonOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const getMapScreenOptions = (colors: MD3Colors, t: TFunction): MaterialBottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => (
    <FontistoIcon name="map-marker-alt" size={20} color={focused ? "white" : colors.onSurface} />
  ),
  title: t("bottomNavigation.map"),
});
