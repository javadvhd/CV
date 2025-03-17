import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: "#464144",
    },
  },
});

interface Props {
  children: ReactNode;
}
export function ThemeProvider({ children }: Props) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
