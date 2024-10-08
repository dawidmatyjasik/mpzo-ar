import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import BackButton from "features/common/components/backButton";

export const policyScreenOptions: NativeStackNavigationOptions = {
  headerTitle: "Polityka Prywatności",
  headerLeft: () => <BackButton text="" />,
  animation: "slide_from_right",
};
