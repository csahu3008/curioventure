import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "Astro",
      "TypeScript",
      "GraphQL",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Fastify",
      "Django",
      "REST APIs",
      "Redis",
      "WordPress",
      "BigCommerce",
    ],
  },
  {
    title: "Performance",
    skills: [
      "Core Web Vitals",
      "SSR",
      "SSG",
      "Lighthouse",
      "PageSpeed",
      "Code Splitting",
      "Caching",
    ],
  },
  {
    title: "Tooling",
    skills: [
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Webpack",
      "Vite",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "AI Workflows",
    skills: [
      "MCP context workflows",
      "Custom development agents",
      "Figma-to-code",
      "Chrome DevTools",
      "AI-assisted development",
    ],
  },
];

function SkillsShowcase() {
  return (
    <section className=" px-5 py-7 text-white sm:px-8 lg:px-14 lg:py-8">
      <h2 className="text-xl font-black tracking-[-0.01em]">
        Development Skills
      </h2>

      <div className="mt-5 space-y-2 md:hidden">
        {skillGroups.map((group) => (
          <details
            key={group.title}
            className="group rounded  bg-white/[0.04]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-bold text-white">
              {group.title}
              <span className="text-[#00d9c0] transition group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3">
              {group.skills.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-6 hidden grid-cols-5 gap-5 md:grid">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-black text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">
              {group.skills.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillChip({ skill }: { skill: string }) {
  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded  bg-white/[0.07] px-3 py-2 text-xs font-medium text-[#f4edf8] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#00d9c0]/25 bg-[#00d9c0]/10 text-[10px] font-black text-[#00d9c0]">
        {skill.slice(0, 2).toUpperCase()}
      </span>
      {skill}
    </span>
  );
}

export default SkillsShowcase;
