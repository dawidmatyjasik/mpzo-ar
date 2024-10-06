import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TFunction } from "i18next";
import { MaterialBottomTabNavigationOptions } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

export const bottomTabkNavigatonOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const getSettingsScreenOptions = (colors: MD3Colors, t: TFunction): MaterialBottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => (
    <IoniconsIcon name="settings-sharp" size={22} color={focused ? "white" : colors.onSurface} />
  ),
  title: t("bottomNavigation.settings"),
});
