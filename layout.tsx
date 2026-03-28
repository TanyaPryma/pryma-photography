export const metadata = {
  title: "Pryma Photography",
  description: "Luxury wedding, family, and portrait photography in South Florida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
