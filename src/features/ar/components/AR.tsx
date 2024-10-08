import { StyleSheet } from "react-native";

import { ViroARScene, ViroARSceneNavigator, ViroText } from "@reactvision/react-viro";

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene>
      <ViroText text="Hello World!" scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
    </ViroARScene>
  );
};

export const AR = () => {
  return (
    <ViroARSceneNavigator
      autofocus
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};
const styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
