import type { FC } from "react";
import React, { useCallback } from "react";
import type { ListRenderItem } from "react-native";
import { Animated, FlatList, StyleSheet } from "react-native";

import { useTranslation } from "react-i18next";
import { Button } from "react-native-paper";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import Intro from "features/intro/components/intro";
import IntroActions from "features/intro/components/introActions";
import IntroPagination from "features/intro/components/introPagination";
import { slides } from "features/intro/consts";
import { useIntro } from "features/intro/hooks/useIntro";
import { IntroStackScreenProps } from "features/navigation/components/introNavigation";
import { useAppTheme } from "features/theme/hooks";

import type { SlideProps } from "features/intro/types";

export type IntroProps = IntroStackScreenProps<"IntroScreen">;

const IntroScreen: FC<IntroProps> = () => {
  const { handleBack, handleNext, isFirst, scrollX, slidesRef, viewConfig, viewableItemsChanged, handleSkip } =
    useIntro();

  const { colors } = useAppTheme();
  const { top } = useSafeAreaInsets();

  const { t } = useTranslation();

  const styles = getStyles(top);

  const renderItem: ListRenderItem<SlideProps> = useCallback(({ item: { name, description, image, title, mp3 } }) => {
    return <Intro name={name} description={description} image={image} title={title} mp3={mp3} />;
  }, []);

  console.log(top);

  return (
    <SafeAreaView style={styles.introContainer}>
      <Button
        icon="chevron-right"
        mode="text"
        style={styles.skipButton}
        contentStyle={styles.skipButtonContent}
        textColor={colors.onPrimary}
        onPress={handleSkip}>
        {t("intro.skip")}
      </Button>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        style={styles.introListContainer}
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
  );
};

const getStyles = (offset: number) =>
  StyleSheet.create({
    introContainer: {
      flex: 1,
      position: "relative",
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
    introListContainer: {
      zIndex: -1,
    },
    skipButton: {
      flexDirection: "row-reverse",
      position: "absolute",
      top: 16 + offset,
      right: 16,
      zIndex: 1,
    },
    skipButtonContent: {
      flexDirection: "row-reverse",
    },
  });

export default IntroScreen;
