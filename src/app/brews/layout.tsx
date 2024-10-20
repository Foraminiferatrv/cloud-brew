import BgLogo from "@/components/global/bg-logo/bg-logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full bg-white">
      <BgLogo />
      <section className="relative mx-auto size-full max-w-screen-xl overflow-y-auto px-12 py-4">
        {children}
      </section>
    </div>
  );
}
