import { useCallback, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import type { FlatList, ViewToken } from "react-native";

import { useNavigation } from "@react-navigation/native";
import TrackPlayer from "react-native-track-player";

import { slides } from "features/intro/consts";
import { moveToBottomTab, moveToScannerScreen } from "features/navigation/utils";

export const useIntro = () => {
  const slidesRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index ?? 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleSkip = useCallback(() => {
    navigation.dispatch(moveToBottomTab);
  }, [navigation]);

  const handleNext = () => {
    const isLastSlide = currentIndex < slides.length - 1;
    if (currentIndex !== undefined && slides && slidesRef?.current && isLastSlide) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.dispatch(moveToScannerScreen);
    }
  };

  const handleBack = () => {
    const isFirstSlide = currentIndex === 0;
    if (currentIndex !== undefined && slides && slidesRef?.current && !isFirstSlide) {
      slidesRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  useEffect(() => {
    const handlePause = async () => {
      await TrackPlayer.pause();
    };

    handlePause();
  }, [currentIndex]);

  return {
    slidesRef,
    viewConfig,
    scrollX,
    isFirst: currentIndex === 0,
    isLast: currentIndex === slides.length - 1,
    currentIndex,
    viewableItemsChanged,
    handleBack,
    handleNext,
    handleSkip,
  };
};
