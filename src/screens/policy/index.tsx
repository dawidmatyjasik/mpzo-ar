import React, { FC } from "react";
import { View, Text } from "react-native";

import { SettingsStackScreenProps } from "features/navigation/components/settingsNavigation";

export type PolicyScreenProps = SettingsStackScreenProps<"PolicyScreen">;

const PolicyScreen: FC<PolicyScreenProps> = () => {
  return (
    <View>
      <Text>EmptyScreen</Text>
    </View>
  );
};

export default PolicyScreen;
