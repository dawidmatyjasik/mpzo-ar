import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "screens/welcome/Welcome";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type IntroStackParamList = {
  Welcome: undefined;
  Intro: undefined;
};

export type IntroStackScreenProps<T extends keyof IntroStackParamList> = NativeStackScreenProps<IntroStackParamList, T>;

const IntroStack = createNativeStackNavigator<IntroStackParamList>();

const IntroNavigation = () => {
  return (
    <IntroStack.Navigator initialRouteName="Welcome">
      <IntroStack.Screen name="Welcome" component={Welcome} />
    </IntroStack.Navigator>
  );
};

export default IntroNavigation;
