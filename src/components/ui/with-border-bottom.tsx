import { styled, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  className?: string;
  sx?: SxProps;
  borderWidth?: string;
  borderHeight?: string;
  borderColor?: string;
  children: ReactNode;
}
export function WithBorderBottom({
  className,
  sx,
  borderWidth = "50px",
  borderHeight = "2px",
  borderColor = "#fafafa",
  children,
}: Props) {
  return (
    <Root sx={{ pb: 1.5, ...sx }} className={className}>
      {children}
      <Border
        sx={{
          width: borderWidth,
          height: borderHeight,
          backgroundColor: borderColor,
          borderRadius: `calc(${borderHeight} / 2)`,
        }}
      />
    </Root>
  );
}

const Root = styled("div")`
  position: relative;
`;

const Border = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
`;
