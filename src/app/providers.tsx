"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "../../themes";

export default function Providers({ children }: { children: React.ReactNode }) {
 return (
  <ThemeProvider theme={lightTheme}>
   <CssBaseline />
   {children}
  </ThemeProvider>
 );
}
