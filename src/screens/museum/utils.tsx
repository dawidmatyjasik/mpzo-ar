import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import BackButton from "features/common/components/backButton";
import { SettingsStackParamList } from "features/navigation/components/settingsNavigation";

interface MuseumScreenOptionsProps {
  route: RouteProp<SettingsStackParamList, "MuseumScreen">;
}

export const museumScreenOptions = ({ route }: MuseumScreenOptionsProps): NativeStackNavigationOptions => {
  return {
    headerLeft: () => <BackButton text="" />,
    title: route?.params?.title,
    animation: "slide_from_right",
  };
};
