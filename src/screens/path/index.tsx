import React, { FC } from "react";
import { View, Text } from "react-native";

import { TabScreenProps } from "features/navigation/components/bottomTabNavigation";

type PathScreenProps = TabScreenProps<"Path">;

const PathScreen: FC<PathScreenProps> = () => {
  return (
    <View>
      <Text>EmptyScreen</Text>
    </View>
  );
};

export default PathScreen;
