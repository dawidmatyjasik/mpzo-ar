import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { MaterialBottomTabNavigationOptions } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

export const bottomTabkNavigatonOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const getSettingsScreenOptions = (colors: MD3Colors): MaterialBottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => (
    <IoniconsIcon name="settings-sharp" size={22} color={focused ? "white" : colors.onSurface} />
  ),
  title: "Ustawienia",
});
