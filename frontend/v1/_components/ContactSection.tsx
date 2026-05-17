import React from "react";

function ContactSection() {
  return (
    <section className=" px-5 py-7 text-center text-white sm:px-8 lg:px-14">
      <h2 className="text-2xl font-black tracking-[-0.01em]">
        Let&apos;s connect!
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#d7d0df]">
        I&apos;m open to frontend opportunities, production UI work, and
        interesting web projects.
      </p>

      <div className="mx-auto mt-5 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
        <a
          href="https://www.linkedin.com/in/chandra-shekhar-sahu-331327203"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded border border-[#00d9c0] px-5 py-3 text-sm font-bold text-[#00d9c0] transition hover:bg-[#00d9c0] hover:text-[#20182e]"
        >
          Connect on LinkedIn
        </a>
        <a
          href="/dummy-pdf_2.pdf"
          download
          className="inline-flex min-h-11 items-center justify-center rounded  px-5 py-3 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/10"
        >
          Download Resume
        </a>
      </div>

      <p className="mt-7 text-xs text-[#b9b0c6]">
        © 2026 Chandra Shekhar. All rights reserved.
      </p>
    </section>
  );
}

export default ContactSection;
