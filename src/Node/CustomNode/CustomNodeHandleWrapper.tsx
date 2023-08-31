import { Stack } from "@mui/material";
import { PropsWithChildren, useMemo } from "react";

export interface ICustomNodeHandleWrapperProps extends PropsWithChildren {
  variant: "left" | "right";
}

export const CustomNodeHandleWrapper = ({
  children,
  variant,
}: ICustomNodeHandleWrapperProps) => {
  const translateXValue = useMemo(() => {
    if (variant === "left") {
      return "50%";
    } else if (variant === "right") {
      return "-50%";
    }
  }, []);

  return (
    <Stack sx={{ transform: `translateX(${translateXValue})`, py: 1 }}>
      {children}
    </Stack>
  );
};
