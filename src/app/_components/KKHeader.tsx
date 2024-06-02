"use client";

import { usePcDrawerOpenState } from "@/app/_hooks";
import { pcDrawerOpenState } from "@/app/_state/pcDrawerState";
import {
  HvButton,
  HvHeader,
  HvHeaderBrand,
} from "@hitachivantara/uikit-react-core";
import { Fine, Menu, Backwards } from "@hitachivantara/uikit-react-icons";
import { useSetRecoilState } from "recoil";

const KKHeader = () => {
  const pcDrawerOpen = usePcDrawerOpenState();
  const setPcDrawerOpen = useSetRecoilState(pcDrawerOpenState);

  return (
    <HvHeader position="static">
      <HvHeaderBrand
        logo={
          <>
            <HvButton
              onClick={() => setPcDrawerOpen((prev) => !prev)}
              aria-label="Menu"
              icon
              variant="primaryGhost"
            >
              {pcDrawerOpen ? (
                <Backwards iconSize="S" />
              ) : (
                <Menu iconSize="S" />
              )}
            </HvButton>
            <Fine />
          </>
        }
        name={"Lumada App"}
      />
    </HvHeader>
  );
};

export default KKHeader;
