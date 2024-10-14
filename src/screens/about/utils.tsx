import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import BackButton from "features/common/components/backButton";
import { SettingsStackParamList } from "features/navigation/components/settingsNavigation";

interface AboutScreenOptionsProps {
  route: RouteProp<SettingsStackParamList, "AboutScreen">;
}

export const aboutScreenOptions = ({ route }: AboutScreenOptionsProps): NativeStackNavigationOptions => {
  return {
    headerLeft: () => <BackButton text="" />,
    title: route?.params?.title,
    animation: "slide_from_right",
  };
};
