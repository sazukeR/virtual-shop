import type { Metadata } from "next";
import Providers from "./providers";
import { Roboto } from "next/font/google";
import { ShopLayout } from "@/components/layouts/ShopLayout";
import "../../styles/globals.css";

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
    <Providers>
     <ShopLayout children={children} />
    </Providers>
   </body>
  </html>
 );
}
