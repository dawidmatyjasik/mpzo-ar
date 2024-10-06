import React from "react";

import { PaperProvider, DefaultTheme } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigation from "features/navigation/components/rootNavigation";
import customTheme from "features/theme/json/theme.json";

import type { MD3Theme } from "react-native-paper";

export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: customTheme.colors,
};

const App = () => (
  <PaperProvider theme={theme}>
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  </PaperProvider>
);

export default App;
