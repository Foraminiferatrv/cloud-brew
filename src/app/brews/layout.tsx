import BgLogo from "@/components/header/components/bg-logo/bg-logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full bg-main">
      <section className="relative mx-auto max-w-screen-xl px-12 py-3 overflow-y-auto">
        {children}
        <BgLogo />
      </section>
    </div>
  );
}
