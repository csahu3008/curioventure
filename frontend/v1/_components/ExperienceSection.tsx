import React from "react";

const experienceHighlights = [
  "Developed and maintained scalable, reusable UI components and design systems across multiple client projects.",
  "Built high-performance web applications with React, Next.js, TypeScript, and modern frontend tooling.",
  "Implemented SSR and SSG for improved performance, SEO, and user experience.",
  "Integrated REST and GraphQL APIs, optimized state management, and delivered production-ready UIs.",
  "Collaborated with designers, backend engineers, and QA to deliver reliable and maintainable solutions.",
];

function ExperienceSection() {
  return (
    <section className=" px-5 py-7 text-white sm:px-8 lg:px-14 lg:py-8">
      <h2 className="text-xl font-black tracking-[-0.01em]">Experience</h2>

      <div className="mt-5 overflow-hidden rounded  bg-white/[0.04] lg:grid lg:grid-cols-[300px_1fr]">
        <div className="border-b border-white/15 p-6 lg:border-b-0 lg:border-r">
          <h3 className="mt-5 text-xl font-black uppercase tracking-wide text-white">
            <img src="/company.png" alt='kraftpixel' height={107} width={376} className="max-w-[200px] lg:max-w-[150px]"/>
          </h3>
          <p className="mt-4 text-base font-bold text-[#00d9c0]">
            Web Engineer
          </p>
          <p className="mt-4 text-sm leading-6 text-[#d7d0df]">
            June 2022 - Present
            <br />
            Remote
          </p>
        </div>

        <ul className="space-y-3 p-6 text-sm leading-6 text-[#d7d0df] sm:text-base sm:leading-7">
          {experienceHighlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff654c]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection;
