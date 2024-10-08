import React from "react";

import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigation from "features/navigation/components/rootNavigation";
import { theme } from "features/theme/consts";

const App = () => (
  <PaperProvider theme={theme}>
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  </PaperProvider>
);

export default App;
