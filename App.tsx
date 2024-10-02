import React from "react";

import { DefaultTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigation from "features/navigation/components/rootNavigation";
import customTheme from "theme/theme.json";

import type { MD3Theme } from "react-native-paper";

const theme: MD3Theme = {
  ...DefaultTheme,
  ...customTheme,
};

const App = () => (
  <PaperProvider theme={theme}>
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  </PaperProvider>
);

export default App;
