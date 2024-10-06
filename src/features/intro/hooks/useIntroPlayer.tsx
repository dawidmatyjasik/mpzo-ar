import { useEffect } from "react";

import TrackPlayer, { State, usePlaybackState } from "react-native-track-player";

import { SlideTrack } from "features/intro/types";

interface IntroPlayerProps {
  mp3: SlideTrack;
}

export const useIntroPlayer = ({ mp3 }: IntroPlayerProps) => {
  const { state } = usePlaybackState();

  const { id, url } = mp3;

  const handlePlay = async () => {
    await TrackPlayer.play();
  };

  const handlePause = async () => {
    await TrackPlayer.stop();
  };

  useEffect(() => {
    const setupTrackPlayer = async () => {
      await TrackPlayer.add({
        id,
        url,
      });
    };

    setupTrackPlayer();
  }, [id, url]);

  const isPaused = state === State.Playing;
  const isReady = state === State.Paused || state === State.Ready || state === State.Stopped;

  return { isPaused, isReady, handlePlay, handlePause };
};
