import { useTheme } from "react-native-paper";

import { AppTheme } from "features/theme/type";

export const useAppTheme = () => useTheme<AppTheme>();
