import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import IntroNavigation, { IntroStackParamList } from "features/navigation/components/introNavigation";
import { rootStackNavigatorOptions } from "features/navigation/components/rootNavigation/utils";

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<IntroStackParamList>;
};

export type RootScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={rootStackNavigatorOptions}>
        <RootStack.Screen name="IntroStack" component={IntroNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
