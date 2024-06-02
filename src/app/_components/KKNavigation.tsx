"use client";

import { usePcDrawerOpenState } from "@/app/_hooks";
import styled from "@emotion/styled";
import {
  HvVerticalNavigation,
  HvVerticalNavigationTree,
} from "@hitachivantara/uikit-react-core";

const KKNavigation: React.FC = () => {
  const pcDrawerOpen = usePcDrawerOpenState();

  return (
    <KKPCDrawer open={pcDrawerOpen}>
      <HvVerticalNavigation>
        <HvVerticalNavigationTree
          aria-label="Vertical Navigation"
          collapsible
          data={[
            {
              href: "/overview/model-effectiveness",
              id: "1-1",
              label: "Model Effectiveness 1",
            },
            {
              href: "/overview/trend-analysis",
              id: "1-2",
              label: "Trend Analysis 1-2",
            },
          ]}
          defaultExpanded
          onChange={function _a() {}}
          selected="1-1"
        />
      </HvVerticalNavigation>
    </KKPCDrawer>
  );
};

const KKPCDrawer = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ open }) => ({
  overflowY: "auto",
  width: "300px",
  height: "100%",
  position: "relative",
  transition: "margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
  marginLeft: `-300px`,
  ...(open && {
    transition: "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    marginLeft: 0,
  }),
}));

export default KKNavigation;
