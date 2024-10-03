import type { FC } from "react";
import React, { useCallback } from "react";
import type { ListRenderItem } from "react-native";
import { Animated, FlatList, ImageBackground, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import backgroundIntro from "assets/png/intro-background.png";
import Intro from "features/intro/components/intro";
import IntroActions from "features/intro/components/introActions";
import IntroPagination from "features/intro/components/introPagination";
import { slides } from "features/intro/consts";
import { useIntro } from "features/intro/hooks/useIntro";
import { IntroStackScreenProps } from "features/navigation/components/introNavigation";

import type { SlideProps } from "features/intro/types";

export type IntroProps = IntroStackScreenProps<"IntroScreen">;

const IntroScreen: FC<IntroProps> = () => {
  const { handleBack, handleNext, handleSkip, isFirst, scrollX, slidesRef, viewConfig, viewableItemsChanged } =
    useIntro();

  const renderItem: ListRenderItem<SlideProps> = useCallback(({ item: { name } }) => {
    return <Intro name={name} />;
  }, []);

  return (
    <ImageBackground source={backgroundIntro} style={styles.introContainer}>
      <SafeAreaView style={styles.introContainer}>
        <FlatList
          data={slides}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          keyExtractor={({ name }) => name}
        />
        <IntroPagination scrollX={scrollX} />
        <IntroActions handleNext={handleNext} handleBack={handleBack} isFirst={isFirst} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
  },
  introHeader: {
    marginHorizontal: 24,
    marginVertical: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  introBody: {
    marginTop: 48,
    alignItems: "center",
    gap: 32,
    flex: 1,
  },
  introTitle: {
    textAlign: "center",
  },
});

export default IntroScreen;
