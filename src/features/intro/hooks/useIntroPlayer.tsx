import { useEffect } from "react";

import TrackPlayer, { State, usePlaybackState } from "react-native-track-player";

import mp3 from "assets/mp3/sample.mp3";
export const useIntroPlayer = () => {
  const { state } = usePlaybackState();

  const handlePlay = async () => {
    await TrackPlayer.play();
  };

  const handlePause = async () => {
    await TrackPlayer.pause();
  };

  useEffect(() => {
    const setupTrackPlayer = async () => {
      await TrackPlayer.add({
        id: "trackId",
        url: mp3,
        title: "Track Title",
        artist: "Track Artist",
      });
    };

    setupTrackPlayer();
  }, []);

  const isPaused = state === State.Playing;
  const isReady = state === State.Paused || state === State.Ready;

  return { isPaused, isReady, handlePlay, handlePause };
};
