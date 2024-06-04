import { atom } from "recoil";

export const mobileDrawerOpenState = atom<boolean>({
  key: "mobileDrawerOpenState",
  default: false,
});
