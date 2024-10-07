import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import BackButton from "features/common/components/backButton";

export const heroScreenOptions: NativeStackNavigationOptions = {
  headerTitle: "",
  headerLeft: () => <BackButton text="Mapa" />,
};
