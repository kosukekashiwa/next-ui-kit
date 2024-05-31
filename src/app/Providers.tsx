"use client";

import { HvProvider, HvProviderProps } from "@hitachivantara/uikit-react-core";

type ProvidersProps = {
  children: React.ReactNode;
} & Pick<HvProviderProps, "themes">;

const Providers: React.FC<ProvidersProps> = ({ children, themes }) => {
  return <HvProvider themes={themes}>{children}</HvProvider>;
};

export default Providers;
