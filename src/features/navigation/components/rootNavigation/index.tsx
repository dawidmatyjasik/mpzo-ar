import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import BottomTabNavigation, { BottomTabParamList } from "features/navigation/components/bottomTabNavigation";
import IntroNavigation, { IntroStackParamList } from "features/navigation/components/introNavigation";
import { rootStackNavigatorOptions } from "features/navigation/components/rootNavigation/utils";
import useInitialRoute from "features/navigation/hooks/useInitialRoute";

export type RootStackParamList = {
  IntroNavigation: NavigatorScreenParams<IntroStackParamList>;
  BottonTabNavigation: NavigatorScreenParams<BottomTabParamList>;
};

export type RootScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const { initialRouteName, isNavigationLoaded } = useInitialRoute();

  if (!isNavigationLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={initialRouteName} screenOptions={rootStackNavigatorOptions}>
        <RootStack.Screen name="IntroNavigation" component={IntroNavigation} />
        <RootStack.Screen name="BottonTabNavigation" component={BottomTabNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
