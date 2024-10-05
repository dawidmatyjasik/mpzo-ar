import TrackPlayer from "react-native-track-player";

module.exports = async function () {
  try {
    await TrackPlayer.setupPlayer();

    TrackPlayer.addEventListener("remote-play", () => {
      TrackPlayer.play();
    });

    TrackPlayer.addEventListener("remote-pause", () => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener("remote-next", () => {
      TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener("remote-previous", () => {
      TrackPlayer.skipToPrevious();
    });

    TrackPlayer.addEventListener("remote-stop", () => {
      TrackPlayer.reset();
    });
  } catch (error) {}
};
