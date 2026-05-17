import Link from "next/link";
import React from "react";

const personalProjects = [
  {
    title: "Awesome Code Snippets (Revamp)",
    embedUrl: "https://awesomecodesnippets-v2.curioventure.xyz",
    content:
      "I recently gave the original Awesome Code Snippets a complete revamp — now it’s running on a modern Next.js + Django stack. I leaned on AI tools to handle repetitive bits and speed up code generation, and integrated NextAuth for smooth, secure user sign-ins. With the site up and running, I’m now deep into performance tuning — experimenting, tweaking, and learning how to make it faster, more scalable, and just feel better to use.",
  },
  {
    title: "Awesome Code Snippets",
    embedUrl: "https://awesomecodesnippets-v1.curioventure.xyz",
    content:
      "Developed a full-stack Django web application for code snippet sharing with multiple language support, user authentication, commenting system, and rating functionality. Features include syntax highlighting, bookmark management, and responsive design. built with with modern web technologies including Python, Django, JavaScript, and Bulma CSS.inspiration was to create a website similar to https://carbon.now.sh/ but with some extended functionality.",
  },
  {
    title: "Todo with Drag and Drop",
    embedUrl: "https://todo.curioventure.xyz/",
    content:
      "A web app where i had tried to implement drag and drop functionality in react by creating Todo Application.i have not used any third party libraries for implementing drag and drop functionality.",
  },
  {
    title: "Ecommerce website",
    embedUrl: "https://learn.curioventure.xyz/hphones",
    content:
      "A Web App where i had tried to implement Ecommerce website using React.I have tried to create replica of a website i came across while learning react and ui development.currently i dont remember the reference of the actual one but will add it if i found it out",
  },
  {
    title: "Pixel Art Canvas",
    embedUrl: "https://pixel-art.curioventure.xyz",
    content:
      "Simply Select a color and draw whatever you like in the canvas.",
  },
  {
    title: "Calendar Slot Booking",
    embedUrl: "https://calender-slots.curioventure.xyz",
    content:
      "I’ve built a frontend web application that allows users to select specific time slots. I created it as part of my practice with DOM manipulation.",
  },
  {
    title: "Credit Card Form",
    embedUrl: "https://learn.curioventure.xyz/creditcard",
    content:
      "Here I have tried to create an UI for Credit Card form.the goal here was to learn animations using react.inspiration is taken from codepen.io example which was created on VueJs(https://codepen.io/JavaScriptJunkie/pen/YzzNGeR)",
  },
  {
    title: "3D Fan Animation",
    embedUrl: "https://fan.curioventure.xyz/",
    content:
      "A fun web application where I recreated the look and functionality of a real fan.",
  },
  {
    title: "Tic Tac Toe Game",
    embedUrl: "https://tic-tac-toe.curioventure.xyz/",
    content:
      "A small classical game that i created using react where the major focus was on game logic than UI.",
  },
  {
    title: "Scroll Animation with Intersection Observer",
    embedUrl: "https://scroll-animation.curioventure.xyz/",
    content:
      "A small web application that i created while practicing intersection observer. I was fascinated by how scroll animations work. It was a great experience while working on this project.",
  },
  {
    title: "3D Transform Playground",
    embedUrl: "https://3d-transforms.curioventure.xyz",
    content:
      "Basically a playground where i tested out css 3d-transforms and animations.",
  },
  {
    title: "Cart Functionality",
    embedUrl: "https://learn.curioventure.xyz/cart",
    content:
      "Here I have tried to create an UI for Cart Functionality.the goal here was to learn state management using react.",
  },
  {
    title: "Random UI Task",
    embedUrl: "https://learn.curioventure.xyz/comments",
    content:
      "Actually this from what i can remember is the above ui was one of the task at frontend masters.Just Created it for fun and to learn more about react and UI development.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className=" px-5 py-7 text-white sm:px-8 lg:px-14 lg:py-8"
    >
      <h2 className="text-xl font-black tracking-[-0.01em]">
        Personal Projects
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-5 pb-4 lg:grid-cols-2 lg:gap-7 lg:pb-16">
        {personalProjects.map((item) => (
          <ProjectCard key={item.embedUrl} {...item} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  content,
  embedUrl,
}: {
  title: string;
  content: string;
  embedUrl: string;
}) {
  return (
    <article className="rounded  bg-white/[0.04] p-4 shadow-[0_18px_55px_rgba(0,0,0,0.16)] lg:even:translate-y-10">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-sm font-black leading-6 text-white sm:text-base">
          Visit {title}
        </h3>
        <Link
          href={embedUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded  px-2.5 py-1.5 text-xs font-bold text-[#00d9c0] transition hover:border-[#00d9c0] hover:bg-[#00d9c0] hover:text-[#20182e]"
        >
          Open
        </Link>
      </div>

      <p className="mb-4 text-sm leading-6 text-[#d7d0df]">{content}</p>

      <div className="overflow-hidden rounded border border-white/10 bg-[#0b0913]">
        <iframe
          loading="lazy"
          src={embedUrl}
          title={`${title} preview`}
          width={640}
          height={427}
          className="rounded-md w-full h-auto min-h-[600px]"
        />
      </div>
    </article>
  );
}

export default Features;
