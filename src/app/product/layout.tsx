import { ShopLayout } from "@/components/layouts";

export const metadata = {
 title: "Next.js",
 description: "Generated by Next.js",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <ShopLayout children={children} />;
}