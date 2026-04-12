"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-14 md:pt-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-max grid items-center gap-14 lg:gap-10 xl:gap-20 lg:grid-cols-12">
        {/* LEFT: content */}
        <motion.div
          className="order-1 lg:order-1 lg:col-span-6 space-y-10 lg:text-left lg:pr-6 xl:pr-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex lg:justify-start">
            <Badge className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border-indigo-300/20 text-white">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to collaboration
              </div>
            </Badge>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Hello, I&apos;m Yun.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 pb-2">
                AI/ML Engineer, Software Engineer
              </span>
            </h1>

            <p className="max-w-2xl text-white/70 text-base">
              Graduate student at SJSU, majoring in Artificial Intelligence
            </p>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:justify-start">
            <Button
              size="lg"
              asChild
              className="rounded-full px-6 py-3 leading-none text-center items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:from-indigo-400 hover:to-purple-500"
            >
              <Link href="/resume.pdf" target="_blank">
                View Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: visual */}
        <motion.div
          className="order-2 lg:order-2 lg:col-span-6 mt-10 md:mt-14 lg:mt-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,.35)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-purple-600/20" />
            <Image
              src="/my-portfolio/working.jpg"
              alt="Working illustration"
              width={1000}
              height={600}
              priority
              unoptimized
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
