export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        SEIDEBAR
        {children}
      </main>
    );
  }