import { atom } from "recoil";

export const pcDrawerOpenState = atom<boolean>({
  key: "pcDrawerOpenState",
  default: true,
});
