import { MaterialBottomTabNavigationOptions } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import FoundationIcon from "react-native-vector-icons/Foundation";

export const getPathScreenOptions = (colors: MD3Colors): MaterialBottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => <FoundationIcon name="play" size={20} color={focused ? "white" : colors.onSurface} />,
  title: "Ścieżka",
});
