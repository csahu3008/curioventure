import Features from "@/_components/Features";
import HomePageBanner from "@/_components/HomePageBanner";
import Quotes from "@/_components/Quotes";
import React from "react";
import type { Metadata } from "next";
const title =
    "Curioventure , My Journey into Tech Adventures,Explorations and Hobbies",
  description =
    "Curioventure is a platform where i share my learnings and experiences mostly focussed on Tech and sometimes insights on things i find interesting.",
  canonical = "https://curioventure.xyz/";

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates:{
    canonical:'https://curioventure.xyz/',
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

const Home: React.FC = () => {
  const projectsData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Todo with Drag and Drop",
      operatingSystem: "All",
      applicationCategory: "ProductivityApplication",
      description:
        "A web app where i had tried to implement drag and drop functionality in react by creating Todo Application.i have not used any third party libraries for implementing drag and drop functionality.",
      creator: {
        "@type": "Person",
        name: "Your Name",
      },
      url: "https://todo.curioventure.xyz/",
      featureList: [
        "Drag and drop support",
        "Custom implementation without external libraries",
        "Built with React",
      ],
    },
    {
      "@type": "WebApplication",
      name: "Ecommerce Website",
      operatingSystem: "All",
      applicationCategory: "ShoppingApplication",
      description:
        "A Web App where i had tried to implement Ecommerce website using React.I have tried to create replica of a website i came across while learning react and ui development.currently i dont remember the reference of the actual one but will add it if i found it out",
      creator: {
        "@type": "Person",
        name: "Your Name",
      },
      url: "https://learn.curioventure.xyz/hphones",
      featureList: [
        "Product listings",
        "Cart and checkout UI",
        "Responsive design",
        "Inspired by real ecommerce layout",
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
        name: "Your Name",
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
        name: "Your Name",
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
        name: "Your Name",
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
