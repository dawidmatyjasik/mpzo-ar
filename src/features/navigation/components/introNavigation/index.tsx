import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { introStackNavigatorOptions } from "features/navigation/components/introNavigation/utils";
import IntroScreen from "screens/intro";
import WelcomeScreen from "screens/welcome";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type IntroStackParamList = {
  WelcomeScreen: undefined;
  IntroScreen: undefined;
};

export type IntroStackScreenProps<T extends keyof IntroStackParamList> = NativeStackScreenProps<IntroStackParamList, T>;

const IntroStack = createNativeStackNavigator<IntroStackParamList>();

const IntroNavigation = () => {
  return (
    <IntroStack.Navigator initialRouteName="WelcomeScreen" screenOptions={introStackNavigatorOptions}>
      <IntroStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <IntroStack.Screen name="IntroScreen" component={IntroScreen} />
    </IntroStack.Navigator>
  );
};

export default IntroNavigation;
