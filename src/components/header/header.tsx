"use client";

import Logo from "@/assets/img/logo_30.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  console.log(pathname);

  const navLinks = [
    { name: "My Brews", href: "/brews" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const renderNavLinks = () => {
    return navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className={`flex h-8 w-20 items-center justify-center hover:text-bg_2 ${pathname === link.href ? "text-accent" : "text-white"}`}
      >
        {link.name}
      </Link>
    ));
  };

  return (
    <div className="header flex h-12 justify-center bg-bg_1 text-white">
      <div className="header_inner mx-auto flex w-full max-w-[1200px] items-center justify-between px-4">
        <div className="logo">
          <Logo className="" />
        </div>
        <nav className="flex items-center gap-4 font-bold">
          {renderNavLinks()}
        </nav>
      </div>
    </div>
  );
}
