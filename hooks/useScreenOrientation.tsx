import * as ScreenOrientation from "expo-screen-orientation";
import { useCallback, useEffect } from "react";

interface UseScrnOrientationProps {
  pathname: string;
}

const landscapeScreens = ["/landscape"];

export const useScreenOrientation = (props: UseScrnOrientationProps): void => {
  const { pathname } = props;

  const changeScreenOrientation = useCallback(async (): Promise<void> => {
    await ScreenOrientation.unlockAsync();
    if (landscapeScreens.some((name) => pathname.includes(name)))
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    else
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
  }, [pathname]);

  useEffect(() => {
    changeScreenOrientation().catch((error) => console.error(error));
  }, [changeScreenOrientation]);
};
