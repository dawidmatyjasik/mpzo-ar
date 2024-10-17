import { CommonActions } from "@react-navigation/native";

export const moveToBottomTab = CommonActions.reset({
  index: 0,
  routes: [
    {
      name: "BottonTabNavigation",
      state: {
        routes: [
          {
            name: "MapNavigation",
          },
        ],
      },
    },
  ],
});

export const moveToIntro = CommonActions.reset({
  index: 0,
  routes: [
    {
      name: "IntroNavigation",
      state: {
        routes: [
          {
            name: "WelcomeScreen",
          },
        ],
      },
    },
  ],
});
