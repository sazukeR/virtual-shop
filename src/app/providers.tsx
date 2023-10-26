"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { SWRConfig } from "swr";
import { lightTheme } from "../../themes";
import { UiProvider } from "@/context";

export default function Providers({ children }: { children: React.ReactNode }) {
 return (
  <SWRConfig
   value={{
    fetcher: (resource, init) =>
     fetch(resource, init).then((res) => res.json()),
   }}
  >
   <UiProvider>
    <ThemeProvider theme={lightTheme}>
     <CssBaseline />
     {children}
    </ThemeProvider>
   </UiProvider>
  </SWRConfig>
 );
}
