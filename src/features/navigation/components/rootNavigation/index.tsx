import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import BottomTabNavigation, { BottomTabParamList } from "features/navigation/components/bottomTabNavigation";
import IntroNavigation, { IntroStackParamList } from "features/navigation/components/introNavigation";
import { rootStackNavigatorOptions } from "features/navigation/components/rootNavigation/utils";

export type RootStackParamList = {
  IntroNavigation: NavigatorScreenParams<IntroStackParamList>;
  BottonTabNavigation: NavigatorScreenParams<BottomTabParamList>;
};

export type RootScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="BottonTabNavigation" screenOptions={rootStackNavigatorOptions}>
        <RootStack.Screen name="IntroNavigation" component={IntroNavigation} />
        <RootStack.Screen name="BottonTabNavigation" component={BottomTabNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
