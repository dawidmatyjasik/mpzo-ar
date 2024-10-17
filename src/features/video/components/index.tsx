import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import Video, { VideoRef } from "react-native-video";

import mp4 from "assets/mp4/sample.mp4";

const HeroVideo = () => {
  const videoRef = useRef<VideoRef>(null);
  const styles = getStyles();

  return (
    <View>
      <View style={[styles.video]}>
        <Video
          source={mp4}
          style={styles.backgroundVideo}
          controls
          ref={videoRef}
          resizeMode="cover"
          fullscreen={true}
          paused
        />
      </View>
    </View>
  );
};

const getStyles = () =>
  StyleSheet.create({
    video: {
      backgroundColor: "black",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").width * (9 / 16),
    },
    headerContainer: {
      paddingHorizontal: 16,
    },
    backgroundVideo: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

export default HeroVideo;
