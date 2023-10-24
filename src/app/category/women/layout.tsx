import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Teslo Shop - Mujer",
 description: "Encuentra los mejores productos de teslo-shop para ellas",
 openGraph: {
  title: "Teslo Shop - Mujer",
  description: "Encuentra los mejores productos de teslo-shop para ellas",
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}
