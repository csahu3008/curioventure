import React from "react";

function HomePageBannerV2() {
  return (
    <section className="px-5 flex h-screen pb-8 pt-12 text-white sm:px-8 sm:pt-16 lg:px-14 lg:pb-10 lg:pt-24">
      <div className="max-w-3xl mt-auto">
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
          e-commerce, and customer support platforms.I work with React, Next.js, Vue/Nuxt, Astro, TypeScript, responsive UI, API integration, SSR/SSG, caching, reusable components, and Core Web Vitals optimization.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="/dummy-pdf_2.pdf"
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
