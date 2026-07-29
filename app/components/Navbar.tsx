"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  {href:"/", label:"Home"},
  { href: "/about", label: "About" },
  { href: "/programs", label: "The Program" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Red Folder-Edge Header Bar matching the design inspiration */}
      <div className=" pb-3 pt-3">
        <div className="mx-auto flex max-w-6xl items-end justify-between px-6">
          
          {/* Logo / Brand Anchor */}
          <Link href="/" className="flex items-center pb-1">
            <Image
              src="/ncibc-logo.png"
              alt="New Creation International Bible College"
              width={140}
              height={36}
              className="rounded-sm object-cover"
            />
          </Link>

          {/* Desktop Navigation - Connected Folder Tabs */}
          <nav className="hidden items-end gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative rounded-t-lg bg-ink/50 px-5 py-2 font-body text-xs uppercase tracking-wider text-parchment transition-all hover:bg-gold hover:text-wine hover:font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="relative rounded-t-lg bg-gold px-5 py-2 font-body text-xs uppercase tracking-wider font-semibold text-ink transition-all hover:bg-gold-light"
            >
              Apply
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="flex flex-col gap-1.5 pb-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 w-6 bg-black transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-black transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-black transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-parchment px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-body text-sm text-ink/80 border-b border-ink/5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/admissions"
            onClick={() => setOpen(false)}
            className="mt-3 w-fit rounded-sm bg-gold px-5 py-2.5 font-body text-xs uppercase tracking-wider font-semibold text-ink"
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}