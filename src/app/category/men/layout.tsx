import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Teslo Shop - Hombres",
 description: "Encuentra los mejores productos de teslo-shop para hombres",
 openGraph: {
  title: "Teslo Shop - Hombres",
  description: "Encuentra los mejores productos de teslo-shop para hombres",
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}
