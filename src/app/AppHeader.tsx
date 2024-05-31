"use client";

import { HvHeader, HvHeaderBrand } from "@hitachivantara/uikit-react-core";
import { Fine } from "@hitachivantara/uikit-react-icons";

const AppHeader = () => {
  return (
    <HvHeader position="sticky" style={{ top: 0 }}>
      <HvHeaderBrand logo={<Fine />} name={"Vercel"} />
    </HvHeader>
  );
};

export default AppHeader;
