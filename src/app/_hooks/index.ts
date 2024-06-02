import { pcDrawerOpenState } from "@/app/_state/pcDrawerState";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useChangePcDrawerOpenState = (): void => {
  const setPcDrawerOpen = useSetRecoilState(pcDrawerOpenState);
  setPcDrawerOpen((prev) => !prev);
};

export const usePcDrawerOpenState = (): boolean => {
  return useRecoilValue(pcDrawerOpenState);
};
