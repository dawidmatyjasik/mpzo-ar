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
