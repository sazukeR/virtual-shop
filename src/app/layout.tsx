import Providers from "./providers";
import { Roboto } from "next/font/google";

import "../../styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Tesla-shop",
 description: "Encuentra los mejores productos de tesla-shop",
 openGraph: {
  title: "Tesla-shop",
  description: "Encuentra los mejores productos de tesla-shop",
 },
};

const roboto = Roboto({
 weight: ["300", "400", "500", "700"],
 style: ["italic", "normal"],
 subsets: ["latin"],
});

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <body className={roboto.className}>
    <Providers>{children}</Providers>
   </body>
  </html>
 );
}
