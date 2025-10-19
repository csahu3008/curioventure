import Features from "@/_components/Features";
import HomePageBanner from "@/_components/HomePageBanner";
import Quotes from "@/_components/Quotes";
import React from "react";
import type { Metadata } from "next";

// Constants
const title =
  "Curioventure - My Journey into Tech Adventures, Explorations and Hobbies";
const description =
  "Curioventure is a platform where I share my learnings and experiences, mostly focused on Tech and sometimes insights on things I find interesting.";
const canonical = "https://curioventure.xyz/";

// Metadata configuration
export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://curioventure.xyz/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface WebAppSchema {
  "@context"?: "https://schema.org";
  "@type": "WebApplication";
  name: string;
  operatingSystem: string;
  applicationCategory: string;
  description: string;
  creator: {
    "@type": "Person";
    name: string;
  };
  url: string;
  featureList: string[];
  isBasedOn?: string;
}

type Creator = {
  "@type": "Person";
  name: string;
};

const Home: React.FC = () => {
  const projectsData: WebAppSchema[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Awesome Code Snippets",
      operatingSystem: "All",
      applicationCategory: "DeveloperApplication",
      description:
        "Awesome Code Snippets is a full-stack web app rebuilt using Next.js and Django, designed for sharing, organizing, and exploring code snippets with syntax highlighting, user authentication, and AI-assisted features. The platform emphasizes performance, scalability, and a seamless developer experience.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://awesomecodesnippets-v2.curioventure.xyz/",
      featureList: [
        "Full-stack Next.js + Django architecture",
        "AI-assisted code generation and automation",
        "NextAuth-based user authentication",
        "Syntax highlighting and snippet categorization",
        "Performance-optimized and scalable design",
        "Responsive UI with modern styling",
        "Bookmarking, commenting, and rating system",
      ],
      isBasedOn: "https://carbon.now.sh/",
      keywords: [
        "Next.js",
        "Django",
        "NextAuth",
        "AI tools",
        "Code snippets",
        "Developer platform",
        "Full-stack web app",
      ],
      softwareVersion: "2.0",
      releaseNotes:
        "Revamped to modern Next.js + Django stack with NextAuth integration and performance optimization.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Awesome Code Snippets",
      operatingSystem: "All",
      applicationCategory: "DeveloperApplication",
      description:
        "A full-stack Django web application for code snippet sharing with multiple language support, user authentication, commenting system, and rating functionality. Features include syntax highlighting, bookmark management, and responsive design. Built with modern web technologies including Python, Django, JavaScript, and Bulma CSS.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://awesomecodesnippets-v1.curioventure.xyz/",
      featureList: [
        "Syntax highlighting for multiple languages",
        "User authentication system",
        "Comment and rating functionality",
        "Bookmark management",
        "Responsive design with Bulma CSS",
      ],
      isBasedOn: "https://carbon.now.sh/",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Interactive Todo with Drag and Drop",
      operatingSystem: "All",
      applicationCategory: "ProductivityApplication",
      description:
        "A web app where I implemented drag and drop functionality in React by creating a Todo Application. I have not used any third party libraries for implementing the drag and drop functionality.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://todo.curioventure.xyz/",
      featureList: [
        "Custom drag and drop implementation",
        "React-based task management",
        "No external drag-drop libraries",
      ],
    },
    {
      "@type": "WebApplication",
      name: "3D Fan Animation",
      operatingSystem: "All",
      applicationCategory: "DemoApplication",
      description:
        "A fun web application where I recreated the look and functionality of a real fan.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://fan.curioventure.xyz/",
      featureList: [
        "3D CSS transforms",
        "Realistic fan animation",
        "Interactive controls",
      ],
    },
    {
      "@type": "WebApplication",
      name: "3D Transform Playground",
      operatingSystem: "All",
      applicationCategory: "DemoApplication",
      description:
        "A playground where I tested out CSS 3D-transforms and animations.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://3d-transforms.curioventure.xyz",
      featureList: [
        "Interactive 3D transformations",
        "CSS animation examples",
        "Educational playground",
      ],
    },
    {
      "@type": "WebApplication",
      name: "Calendar Slot Booking",
      operatingSystem: "All",
      applicationCategory: "UtilityApplication",
      description:
        "A frontend web application that allows users to select specific time slots, created for practicing DOM manipulation.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://calender-slots.curioventure.xyz",
      featureList: [
        "Interactive time slot selection",
        "DOM manipulation showcase",
        "User-friendly calendar interface",
      ],
    },
    {
      "@type": "WebApplication",
      name: "E-commerce Platform Demo",
      operatingSystem: "All",
      applicationCategory: "ShoppingApplication",
      description:
        "A web application implementing a modern e-commerce platform using React. Features a responsive design and comprehensive shopping experience with product listings and cart functionality.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://learn.curioventure.xyz/hphones",
      featureList: [
        "Product catalog with filters",
        "Shopping cart and checkout flow",
        "Responsive mobile-first design",
        "Modern e-commerce UI patterns",
      ],
    },
    {
      "@type": "WebApplication",
      name: "Animated Credit Card Form UI",
      operatingSystem: "All",
      applicationCategory: "FinancialApplication",
      description:
        "Here I have tried to create an UI for Credit Card form.the goal here was to learn animations using react.inspiration is taken from codepen.io example which was created on VueJs(https://codepen.io/JavaScriptJunkie/pen/YzzNGeR)",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://learn.curioventure.xyz/creditcard",
      featureList: [
        "Animated form input",
        "Real-time card preview",
        "React implementation inspired by Vue.js CodePen demo",
      ],
      isBasedOn: "https://codepen.io/JavaScriptJunkie/pen/YzzNGeR",
    },
    {
      "@type": "WebApplication",
      name: "Cart Functionality UI",
      operatingSystem: "All",
      applicationCategory: "ShoppingApplication",
      description:
        "Here I have tried to create an UI for Cart Functionality.the goal here was to learn state management using react.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://learn.curioventure.xyz/cart",
      featureList: [
        "Add and remove items from cart",
        "Cart state management using React",
        "Minimalistic UI for learning purposes",
      ],
    },
    {
      "@type": "WebApplication",
      name: "Random UI Task",
      operatingSystem: "All",
      applicationCategory: "EducationalApplication",
      description:
        "Actually this from what i can remember is the above ui was one of the task at frontend masters.Just Created it for fun and to learn more about react and UI development.",
      creator: {
        "@type": "Person",
        name: "CS",
      },
      url: "https://learn.curioventure.xyz/comments",
      featureList: [
        "Frontend Masters-inspired task",
        "Practicing component-driven development",
        "Focus on layout and styling",
      ],
    },
  ];
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: canonical,
    // author: {
    //   "@type": "Person",
    //   name: "Your Name",
    // },
    hasPart: projectsData.map((project) => ({
      "@type": "WebPage",
      isPartOf: {
        "@id": canonical,
      },
      // name: project.name,
      // description: project.description,
      url: project.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div>
        <HomePageBanner />
        <Features />
        <Quotes />
      </div>
    </>
  );
};

export default Home;
