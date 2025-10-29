"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header
      className="sticky top-0 z-40 border-b border-[rgba(0,0,0,0.05)] backdrop-blur"
      style={{
        background:
          "color-mix(in srgb, var(--color-background) 88%, transparent)",
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/bee.svg"
            alt="Little Native Bees logo"
            width={40}
            height={40}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="font-semibold">Little Native Bees Inc</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium"
                style={{ color: active ? "var(--color-gum-green)" : "#4b5563" }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/get-involved" className="btn btn-primary ml-2">
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
