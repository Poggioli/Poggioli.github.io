import { Flex, Box } from "@modulz/design-system";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { FC, ReactNode } from "react";

export type AccessibleIconContainerType = {
  label: string;
  children: ReactNode;
};

export const AccessibleIconContainer: FC<AccessibleIconContainerType> = ({
  label,
  children,
}) => {
  return (
    <AccessibleIcon label={label}>
      <Flex align="center">
        <Box>{children}</Box>
      </Flex>
    </AccessibleIcon>
  );
};
