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
import { useSize } from "@/app/_hooks";
import { useCallback, useEffect } from "react";

const KKHeader = () => {
  // TODO: wrap the Recoil　function
  const pcDrawerOpen = useRecoilValue(pcDrawerOpenState);
  const setPcDrawerOpen = useSetRecoilState(pcDrawerOpenState);

  const { isPcSize } = useSize();

  useEffect(() => {
    // PC Drawerが開いている状態から、サイズが[PC->Tablet]になったとき、PcDrawerを閉じる
    // Drawerを閉じている状態で、[Tablet->PC]になってもメニューは開かない
    if (!isPcSize && pcDrawerOpen) {
      setPcDrawerOpen(false);
    }
  }, [isPcSize, pcDrawerOpen, setPcDrawerOpen]);

  const handleMenuButtonClick = useCallback(() => {
    if (isPcSize) {
      setPcDrawerOpen((prev) => !prev);
    }
  }, [isPcSize, setPcDrawerOpen]);

  return (
    <HvHeader position="static">
      <HvHeaderBrand
        logo={
          <>
            <HvButton
              onClick={handleMenuButtonClick}
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
