import { CommonActions } from "@react-navigation/native";

export const moveToBottomTab = CommonActions.reset({
  index: 0,
  routes: [
    {
      name: "MainStack",
      state: {
        routes: [
          {
            name: "BottomTab",
            params: { screen: "Accounts" },
          },
        ],
      },
    },
  ],
});

export const moveToScannerScreen = CommonActions.reset({
  index: 0,
  routes: [
    {
      name: "MainStack",
      state: {
        routes: [
          {
            name: "Scanner",
          },
        ],
      },
    },
  ],
});
