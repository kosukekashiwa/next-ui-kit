import { atom } from "recoil";

export const pcDrawerOpenState = atom<boolean>({
  key: "pcDrawerState",
  default: true,
});
