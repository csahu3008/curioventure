"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import React from "react";

function HomePageBannerV2() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(62);
  const pointerY = useMotionValue(34);
  const smoothX = useSpring(pointerX, {
    stiffness: 85,
    damping: 28,
    mass: 0.45,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 85,
    damping: 28,
    mass: 0.45,
  });
  const cursorGlow = useMotionTemplate`radial-gradient(520px circle at ${smoothX}% ${smoothY}%, rgba(0, 240, 255, 0.18), rgba(20, 241, 217, 0.06) 34%, transparent 64%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  function handlePointerLeave() {
    pointerX.set(62);
    pointerY.set(34);
  }

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate flex h-screen overflow-hidden bg-black px-5 pb-8 pt-12 text-white sm:px-8 sm:pt-16 lg:px-14 lg:pb-10 lg:pt-24"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: cursorGlow }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#00f0ff]/20 blur-3xl sm:h-96 sm:w-96 lg:-right-8 lg:top-20"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -36, 18, 0],
                  y: [0, 26, -16, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-6 left-1/2 h-64 w-64 rounded-full bg-[#14f1d9]/10 blur-3xl sm:h-80 sm:w-80"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 28, -20, 0],
                  y: [0, -18, 22, 0],
                  scale: [1, 0.92, 1.05, 1],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,216,214,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,216,214,0.07)_1px,transparent_1px)] bg-[size:54px_54px] opacity-[0.18] [mask-image:radial-gradient(circle_at_58%_40%,black,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,rgba(0,216,214,0.12),transparent_32%),radial-gradient(circle_at_86%_22%,rgba(0,240,255,0.16),transparent_34%)]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute -right-16 top-[14%] h-44 w-44 rounded-full border border-[#00d9c0]/20 opacity-70 sm:right-[4%] sm:top-[18%] sm:h-52 sm:w-52 md:right-[12%] md:top-[30%] md:h-56 md:w-56 md:opacity-100"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-[#00f0ff] shadow-[0_0_18px_rgba(0,240,255,0.9)]" />
          <span className="absolute left-8 top-5 h-1.5 w-1.5 rounded-full border border-[#14f1d9]" />
        </motion.div>
        <motion.div
          className="absolute right-[18%] top-[9%] h-24 w-24 rounded-full border border-[#00f0ff]/10 sm:right-[28%] sm:h-28 sm:w-28 md:right-[22%] md:top-[22%] md:h-32 md:w-32"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -left-20 bottom-[18%] h-36 w-36 rounded-full border border-[#14f1d9]/10 opacity-60 sm:left-auto sm:right-[40%] sm:h-40 sm:w-40 md:hidden"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 mt-auto max-w-3xl">
        {/* <p className="mb-7 text-2xl font-black leading-none text-[#ff6a4a]">
          &lt;/&gt;
        </p> */}

        <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-7xl">
          Hey there,
          <br />
          I&apos;m{" "}
          <span className="text-[#00d9c0]">Chandra Shekhar.</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#d8d2df] sm:mt-6 sm:text-base">
          I&apos;m a Web Engineer with 4 years of experience building
          high-performance web applications across financial services,
          e-commerce, and customer support platforms.I work with React, Next.js,
          Vue/Nuxt, Astro, TypeScript, responsive UI, API integration, SSR/SSG,
          caching, reusable components, and Core Web Vitals optimization.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://rxresu.me/1103css/chandra-shekhar-frontend"
            download
            className="inline-flex min-h-12 items-center justify-center rounded bg-[#ff654c] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_34px_rgba(255,101,76,0.2)] transition hover:bg-[#ff765f] focus:outline-none focus:ring-2 focus:ring-[#ffb36b] focus:ring-offset-2 focus:ring-offset-[#20182e]"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/chandra-shekhar-sahu-331327203"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded border border-[#00d9c0] px-5 py-3 text-sm font-bold text-[#00d9c0] transition hover:bg-[#00d9c0] hover:text-[#1f1730] focus:outline-none focus:ring-2 focus:ring-[#ffb36b] focus:ring-offset-2 focus:ring-offset-[#20182e]"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePageBannerV2;
