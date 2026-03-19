"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  // { href: "/gallery", label: "Gallery" },
  // { href: "/about", label: "About" },
  // { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // NOTE: this intentionally matches the reference (a dark glass header).
  // We can re-theme later if you want it neutral in light mode.
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(16, 20, 24, 0.80)", "rgba(16, 20, 24, 0.95)"]
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "backdrop-blur-sm border-b border-white/5"
      }`}
      style={{ backgroundColor: headerBackground }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-max">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="/"
              className="group flex items-center gap-5 min-w-0"   // add min-w-0 so truncation can work
            >
              <div className="relative shrink-0">                  {/* prevent avatar from shrinking */}
                <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-rose-400/25 group-hover:shadow-xl">
                  <Image src="/profile.JPG" alt="Yun Ei Hlaing" fill className="object-cover" sizes="100px" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-rose-400/20 to-fuchsia-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              {/* name block */}
              <div className="hidden sm:flex min-w-0 flex-col">    {/* sm+: show; allow truncation */}
                <span className="font-semibold text-white group-hover:text-rose-300 whitespace-nowrap truncate max-w-[12rem] lg:max-w-none">
                  Yun Ei Hlaing
                </span>
                <div className="font-mono text-xs text-gray-400 truncate whitespace-nowrap max-w-[12rem] lg:max-w-none">
                  MSAI @ SJSU
                </div>
              </div>
            </Link>

          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  className={`group relative inline-flex items-center whitespace-nowrap
                              h-9 rounded-lg px-4 text-sm leading-none font-medium
                              transition-all duration-300 ${
                                isActive(item.href) ? "text-rose-300" : "text-gray-300 hover:text-white"
                              }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      className="pointer-events-none absolute inset-0 -z-10 rounded-lg border border-rose-400/20 bg-rose-400/10"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>

              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              asChild
              className="leading-none text-center items-center justify-center bg-gradient-to-r from-rose-400 to-fuchsia-600 text-white shadow-lg hover:from-rose-300 hover:to-fuchsia-600"
            >
              <Link href="/resume.pdf" target="_blank">
                Resume <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </motion.div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-white/10 hover:text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-l border-white/10 bg-gray-900/95 backdrop-blur-xl"
            >
              {/* Mobile header */}
              <div className="border-b border-white/10 p-6">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                    <Image src="/profile.JPG" alt="Yun profile" fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Win Thant Tin Han</div>
                    <div className="font-mono text-xs text-gray-400">MSCS @ USC</div>
                  </div>
                </Link>
              </div>

              {/* Mobile nav */}
              <nav className="flex-1 space-y-2 p-6">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex items-center rounded-xl border p-4 font-medium transition-all duration-500 ${
                        isActive(item.href)
                          ? "border-rose-400/30 bg-gradient-to-r from-rose-400/15 to-fuchsia-600/10 text-rose-300 shadow-lg shadow-rose-400/10"
                          : "border-transparent text-gray-300 hover:border-white/20 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white"
                      }`}
                    >
                      {/* shimmer */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile footer CTA */}
              <div className="border-t border-white/10 p-6">
                <Button
                  className="w-full border-0 bg-gradient-to-r from-rose-400 to-fuchsia-600 text-white hover:from-rose-300 hover:to-fuchsia-600"
                  asChild
                >
                  <Link href="\resume.pdf" target="_blank">
                    View Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
