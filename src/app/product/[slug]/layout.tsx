export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 console.log(children);
 return <>{children}</>;
}
