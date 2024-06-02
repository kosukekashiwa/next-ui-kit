import { atom } from "recoil";

export const pcDrawerOpenState = atom({
  key: "pcDrawerState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
