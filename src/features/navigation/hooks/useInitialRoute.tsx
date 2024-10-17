import { useCallback, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { StorageType } from "features/common/types/storage";
import { RootStackParamList } from "features/navigation/components/rootNavigation";

const useInitialRoute = () => {
  const [isNavigationLoaded, setIsNavigationLoaded] = useState(false);
  const [initialRouteName, setInitialRouteName] = useState<keyof RootStackParamList>("IntroNavigation");

  const getInitialRoute = useCallback(async () => {
    try {
      const wasViewed = await AsyncStorage.getItem(StorageType.WasViewed);
      setInitialRouteName(wasViewed ? "BottonTabNavigation" : "IntroNavigation");
    } catch (error) {
      console.error(error);
    } finally {
      setIsNavigationLoaded(true);
    }
  }, []);

  useEffect(() => {
    getInitialRoute();
  }, [getInitialRoute]);

  return { initialRouteName, isNavigationLoaded };
};

export default useInitialRoute;
