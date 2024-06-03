"use client";

import Image from "next/image";
import { pcDrawerOpenState } from "@/app/_state/pcDrawerState";
import {
  HvButton,
  HvHeader,
  HvHeaderBrand,
} from "@hitachivantara/uikit-react-core";
import { Menu, Backwards } from "@hitachivantara/uikit-react-icons";
import { useRecoilValue, useSetRecoilState } from "recoil";

const KKHeader = () => {
  // TODO: wrap the Recoil　function
  const pcDrawerOpen = useRecoilValue(pcDrawerOpenState);
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
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={40}
              priority
            />
          </>
        }
        name={"Lumada App"}
      />
    </HvHeader>
  );
};

export default KKHeader;
