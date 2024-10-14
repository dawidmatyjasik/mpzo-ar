import React, { FC } from "react";
import { View, Text } from "react-native";

import { SettingsStackScreenProps } from "features/navigation/components/settingsNavigation";

export type MuseumScreenProps = SettingsStackScreenProps<"MuseumScreen">;

const MuseumScreen: FC<MuseumScreenProps> = () => {
  return (
    <View>
      <Text>EmptyScreen</Text>
    </View>
  );
};

export default MuseumScreen;
