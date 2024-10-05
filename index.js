/**
 * @format
 */

import { AppRegistry } from "react-native";

import TrackPlayer from "react-native-track-player";

import App from "./App";
import { name as appName } from "./app.json";

import "translations/i18n";

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => require("./service.js"));
