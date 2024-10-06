"use client";

import Logo from "@/assets/img/logo_30.svg";
import { ROUTES } from "@/constants/routes.constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "My Brews", href: ROUTES.BREWS },
    { name: "About", href: ROUTES.ABOUT },
    { name: "Contact", href: ROUTES.CONTACT },
  ];

  const renderNavLinks = () => {
    return navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className={`flex h-8 w-20 items-center justify-center rounded hover:text-bg_2 ${pathname === link.href ? "text-accent" : "text-white"} `}
      >
        {link.name}
      </Link>
    ));
  };

  return (
    <header className="header relative z-10 flex h-12 justify-center bg-bg_1 text-white">
      <div className="header_inner mx-auto flex w-full max-w-screen-xl items-center justify-between px-12">
        <Link href={ROUTES.BREWS} className="logo">
          <Logo className="h-8" />
        </Link>
        <nav className="flex items-center gap-4 font-bold">
          {renderNavLinks()}
        </nav>
      </div>
    </header>
  );
}
