import { DefaultTheme, MD3Theme } from "react-native-paper";

import materialTheme from "features/theme/json/material-theme.json";

export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, ...materialTheme.schemes.light },
};
