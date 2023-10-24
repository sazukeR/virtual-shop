"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { SWRConfig } from "swr";
import { lightTheme } from "../../themes";

export default function Providers({ children }: { children: React.ReactNode }) {
 return (
  <SWRConfig
   value={{
    fetcher: (resource, init) =>
     fetch(resource, init).then((res) => res.json()),
   }}
  >
   <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    {children}
   </ThemeProvider>
  </SWRConfig>
 );
}
