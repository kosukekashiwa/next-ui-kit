"use client";

import { HvFooter } from "@hitachivantara/uikit-react-core";

const AppFooter: React.FC = () => {
  return (
    <HvFooter
      copyright="© Hitachi Vantara Corporation 2022"
      name="Hitachi Vantara"
      style={{ position: "sticky", bottom: 0 }}
    />
  );
};

export default AppFooter;
