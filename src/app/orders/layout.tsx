import { ShopLayout } from "@/components/layouts";

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <ShopLayout>{children}</ShopLayout>;
}
