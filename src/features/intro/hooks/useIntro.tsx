import { useCallback, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import type { FlatList, ViewToken } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import TrackPlayer from "react-native-track-player";

import { StorageType } from "features/common/types/storage";
import { slides } from "features/intro/consts";
import { moveToBottomTab } from "features/navigation/utils";

export const useIntro = () => {
  const slidesRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index ?? 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleSkip = useCallback(async () => {
    try {
      await AsyncStorage.setItem(StorageType.WasViewed, "true");
    } catch (error) {
      console.log(error);
    } finally {
      navigation.dispatch(moveToBottomTab);
    }
  }, [navigation]);

  const handleNext = async () => {
    const isLastSlide = currentIndex < slides.length - 1;
    if (currentIndex !== undefined && slides && slidesRef?.current && isLastSlide) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem(StorageType.WasViewed, "true");
      } catch (error) {
        console.log(error);
      } finally {
        navigation.dispatch(moveToBottomTab);
      }
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
      await TrackPlayer.stop();
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
