import React from "react";

import { Button } from "react-native-paper";

import { useAppTheme } from "features/theme/hooks";

export type CustomButtonProps = React.ComponentProps<typeof Button>;

const CustomButton = (props: CustomButtonProps) => {
  const {
    colors: { secondary },
  } = useAppTheme();

  return <Button theme={{ colors: { primary: secondary } }} {...props} />;
};

export default CustomButton;
