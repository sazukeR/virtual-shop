import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Historial de ordenes",
 description: "Historial de ordenes del cliente",
 openGraph: {
  title: "Historial de ordenes",
  description: "Historial de ordenes del cliente",
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}
