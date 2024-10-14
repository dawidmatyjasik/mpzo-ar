import React, { FC } from "react";
import { View, Text } from "react-native";

import { SettingsStackScreenProps } from "features/navigation/components/settingsNavigation";

export type AboutScreenProps = SettingsStackScreenProps<"AboutScreen">;

const AboutScreen: FC<AboutScreenProps> = () => {
  return (
    <View>
      <Text>EmptyScreen</Text>
    </View>
  );
};

export default AboutScreen;
