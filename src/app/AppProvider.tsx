"use client";

import { HvProvider } from "@/node_modules/@hitachivantara/uikit-react-core";

export type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <div>
      <HvProvider>{children}</HvProvider>
    </div>
  );
};

export default AppProvider;
