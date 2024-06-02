"use client";

import { HvProvider, HvProviderProps } from "@hitachivantara/uikit-react-core";
import { RecoilRoot } from "recoil";

type ProvidersProps = {
  children: React.ReactNode;
} & Pick<HvProviderProps, "themes">;

const Providers: React.FC<ProvidersProps> = ({ children, themes }) => {
  return (
    <RecoilRoot>
      <HvProvider themes={themes}>{children}</HvProvider>
    </RecoilRoot>
  );
};

export default Providers;
