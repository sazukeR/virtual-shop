import { AuthLayout } from "@/components/layouts/AuthLayout";

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <AuthLayout>{children}</AuthLayout>;
}
