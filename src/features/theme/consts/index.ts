import { DefaultTheme, MD3Theme } from "react-native-paper";

import customTheme from "features/theme/json/theme.json";

export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: customTheme.colors,
};
