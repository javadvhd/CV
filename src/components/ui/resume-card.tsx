import { styled, SxProps, useTheme } from "@mui/material";
import { Typography } from "./typography";
import { ReactNode } from "react";
import { WithBorderBottom } from "./with-border-bottom";

export enum ResumeCardColor {
  LILAC = "#fcebea",
  CREAM = "#fcede1",
}

interface Props {
  children?: ReactNode;
  className?: string;
  sx?: SxProps;
  radius?: {
    topLeft?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
  };
  title?: string;
  color?: ResumeCardColor;
}
export function ResumeCard({
  children,
  color,
  radius,
  className,
  sx,
  title,
}: Props) {
  const theme = useTheme();
  const borderRadius = theme.shape.borderRadius * 8;
  return (
    <Root
      className={className}
      sx={{
        backgroundColor: color,
        ...sx,
        borderRadius: `${radius?.topLeft ? borderRadius : 0}px ${radius?.topRight ? borderRadius : 0}px ${radius?.bottomRight ? borderRadius : 0}px ${radius?.bottomLeft ? borderRadius : 0}px`,
      }}
    >
      {title && (
        <WithBorderBottom borderColor={theme.palette.text.primary}>
          <Typography color="textPrimary" variant="h4">
            {title}
          </Typography>
        </WithBorderBottom>
      )}
      {children}
    </Root>
  );
}

const Root = styled("div")`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    border-radius: ${({ theme }) => `${8 * theme.shape.borderRadius}px`};
  }
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  flex-grow: 1;
`;

export const ResumeCardItem = styled("div")`
  display: flex;
  flex-direction: column;
`;
