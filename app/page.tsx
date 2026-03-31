"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-grid-slate">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white"
      />

      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-3xl">
          <p className="font-en mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            UI Lead & Product Designer · 10+ Years
          </p>

          <p className="font-en mb-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Jarvis
          </p>

          <h1 className="font-en tracking-display mb-8 text-[1.65rem] font-bold leading-[1.12] text-slate-900 sm:text-4xl md:text-5xl lg:text-[2.65rem]">
            <span className="block">
              Crafting Modern SaaS Experiences
            </span>
            <span className="block">with Engineering Precision.</span>
          </h1>

          <p className="font-en mb-12 max-w-2xl text-lg leading-relaxed tracking-tight text-slate-600 sm:text-xl">
            Design systems, disciplined UI craft, and interfaces that stay calm at
            scale—bridging product intent with production-ready frontends.
          </p>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-slate-200/80 bg-white/70 p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md sm:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white/80 shadow-sm">
                <Sparkles className="h-5 w-5 text-slate-700" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-en text-sm font-semibold tracking-tight text-slate-900">
                  Profile
                </p>
                <p className="font-en text-xs tracking-tight text-slate-500">
                  Systems · Interface · Delivery
                </p>
              </div>
            </div>

            <p className="font-en mb-5 text-base leading-relaxed tracking-tight text-slate-600 sm:text-[1.05rem]">
              I lead end-to-end product design with a Modern Light SaaS lens—pairing
              systems thinking with shipped UI, from tokens and components to
              measurable UX. The work sits at the intersection of design systems and
              frontend engineering.
            </p>

            <p
              className="font-zh text-base leading-[1.85] text-slate-600"
              lang="zh-CN"
            >
              专注于 Modern Light SaaS
              风格，擅长将设计系统与前端工程化深度结合。目前在探索 AI
              驱动的设计工作流。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-6">
              <a
                href="mailto:hi@jarvis.design"
                className="font-en inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-700"
              >
                hi@jarvis.design
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <span className="hidden h-4 w-px bg-slate-200 sm:block" />
              <span className="font-en text-sm tracking-tight text-slate-500">
                Next.js · Tailwind · Framer Motion
              </span>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
