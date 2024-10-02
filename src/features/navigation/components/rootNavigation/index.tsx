import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroNavigation, { IntroStackParamList } from "features/navigation/components/introNavigation";

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<IntroStackParamList>;
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="IntroStack" component={IntroNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
