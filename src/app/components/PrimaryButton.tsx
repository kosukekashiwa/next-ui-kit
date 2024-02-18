"use client";

import {
  HvButton,
  HvButtonProps,
} from "@/node_modules/@hitachivantara/uikit-react-core";

export type PrimaryButtonProps = {
  children: React.ReactNode;
} & Pick<HvButtonProps, "onClick">;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <HvButton onClick={onClick} variant="primary">
      {children}
    </HvButton>
  );
};

export default PrimaryButton;
