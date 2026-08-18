"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  Github,
  MessageCircle,
  Music2,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

import Image from "next/image";
import { Topbar } from "@/components/topbar";

function smoothScrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const socials = [
  {
    name: "X / Twitter",
    handle: "@teiaoginshry",
    href: "https://x.com/teiaoginshry",
    icon: MessageCircle,
  },
  {
    name: "TikTok",
    handle: "@teiaoginshry",
    href: "https://www.tiktok.com/@teiaoginshry",
    icon: Music2,
  },
  {
    name: "YouTube",
    handle: "@teiaoginshry",
    href: "https://www.youtube.com/@teiaoginshry",
    icon: Youtube,
  },
  {
    name: "Bluesky",
    handle: "@teiaoginshry.bsky.social",
    href: "https://bsky.app/profile/teiaoginshry.bsky.social",
    icon: Cloud,
  },
  {
    name: "GitHub",
    handle: "@TeiaoginsHry",
    href: "https://github.com/TeiaoginsHry",
    icon: Github,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      <Topbar />

      <main className="mx-auto w-full max-w-2xl px-5 pt-28 pb-24 sm:px-8">
        {/* Hero */}
        <section id="home" ref={heroRef}>
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-5">
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: "backOut" }}
              >
                <Image
                  src="/pfp.png"
                  alt="teiaoginshry"
                  width={80}
                  height={80}
                  priority
                  className="size-20 rounded-full object-cover ring-2 ring-border"
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Hi, i am{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  teiaoginshry
                </span>
                .
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              A content creator.
              Always growing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              <motion.a
                href="#socials"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("#socials");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                View socials
                <ArrowUpRight className="size-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-24"
        >
          <motion.div variants={fadeUp} custom={0}>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              About
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            I create content, build things, and explore the internet.
            Most of my work lives online — creative, authentic, and always evolving.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { label: "Platforms", value: "5" },
              { label: "Content", value: "Growing" },
              { label: "Community", value: "Building" },
              { label: "Vibes", value: "Always" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-border/60 bg-card p-4"
              >
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Socials */}
        <section id="socials" className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-sm font-semibold tracking-widest text-muted-foreground uppercase"
            >
              Find me online
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2"
            >
              {socials.map((social, i) => {
                const external = social.href.startsWith("http");
                return (
                  <motion.a
                    key={`${social.name}-${social.handle}`}
                    href={social.href}
                    title={social.name}
                    whileHover={{ x: 6, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 transition-colors hover:border-foreground/20 hover:text-foreground"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <social.icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{social.name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {social.handle}
                      </p>
                    </div>
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-border/50 pt-8"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground">
              built by lordpipon for teiaoginshry
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/lordpipon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                lordpipon's github
              </a>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  );
}
