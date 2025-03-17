import {
  Link,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";
import { LaunchRounded as LaunchRoundedIcon } from "@mui/icons-material";

interface Props extends TypographyProps {
  href?: string;
}
export function Typography({ href, ...props }: Props) {
  if (href)
    return (
      <Link
        href={href}
        target="_blank"
        sx={{ cursor: "pointer", position: "relative", width: "fit-content" }}
      >
        <LaunchRoundedIcon
          sx={{
            width: "14px",
            height: "14px",
            position: "absolute",
            top: "0px",
            right: "-12px",
          }}
        />
        <MuiTypography
          textAlign="left"
          color="inherit"
          {...props}
          sx={{ ...props.sx, cursor: "pointer" }}
        />
      </Link>
    );
  return <MuiTypography textAlign="left" color="textPrimary" {...props} />;
}
