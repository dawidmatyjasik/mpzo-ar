import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import BackButton from "features/common/components/backButton";
import { SettingsStackParamList } from "features/navigation/components/settingsNavigation";

interface PolicyScreenOptionsProps {
  route: RouteProp<SettingsStackParamList, "PolicyScreen">;
}

export const policyScreenOptions = ({ route }: PolicyScreenOptionsProps): NativeStackNavigationOptions => {
  return { headerLeft: () => <BackButton />, title: route?.params?.title, animation: "slide_from_right" };
};
