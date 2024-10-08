import { SettingsStackParamList } from "features/navigation/components/settingsNavigation";

export type SettingsRoute = keyof SettingsStackParamList;

export type SettingsStructure = {
  name: string;
  info: string;
  description: string;
  route: SettingsRoute;
};
