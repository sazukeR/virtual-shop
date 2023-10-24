import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Teslo Shop - Ninos",
 description: "Encuentra los mejores productos de teslo-shop para ninos",
 openGraph: {
  title: "Teslo Shop - Ninos",
  description: "Encuentra los mejores productos de teslo-shop para ninos",
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}
