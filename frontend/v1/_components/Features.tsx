import Link from "next/link";
import React from "react";
const techFeaturesData = [
  {
    title: "Todo with Drag and Drop",
    embedUrl: "https://todo.curioventure.xyz/",
    content:
      "A web app where i had tried to implement drag and drop functionality in react by creating Todo Application.i have not used any third party libraries for implementing drag and drop functionality.",
    img_url: "untaned.jpg",
  },
  {
    title: "Ecommerce website",
    embedUrl: "https://learn.curioventure.xyz/hphones",
    content:
      "A Web App where i had tried to implement Ecommerce website using React.I have tried to create replica of a website i came across while learning react and ui development.currently i dont remember the reference of the actual one but will add it if i found it out",
    img_url: "tech1.jpg",
  },
  {
    title: "Credit Card Form",
    embedUrl: "https://learn.curioventure.xyz/creditcard",
    content:
      "Here I have tried to create an UI for Credit Card form.the goal here was to learn animations using react.inspiration is taken from codepen.io example which was created on VueJs(https://codepen.io/JavaScriptJunkie/pen/YzzNGeR)",
    img_url: "deep_dive.jpg",
  },
  {
    title: "Cart Functionality",
    embedUrl: "https://learn.curioventure.xyz/cart",
    content:
      "Here I have tried to create an UI for Cart Functionality.the goal here was to learn state management using react.",
    img_url: "sky.jpg",
  },
  {
    title: "Random UI Task",
    embedUrl: "https://learn.curioventure.xyz/comments",
    content:
      "Actually this from what i can remember is the above ui was one of the task at frontend masters.Just Created it for fun and to learn more about react and UI development.",
    img_url: "untaned.jpg",
  },
];
function Features() {
  return (
    <div className="container flex flex-col gap-5 lg:py-5">
      <div>
        <h2 className="mb-4 lg:mb-6 text-2xl lg:text-3xl font-black tracking-wider">
          Unravel the Wonders
        </h2>
        <div className="text-[#B4B8AB] flex flex-col gap-2 lg:flex-row lg:gap-8 text-sm lg:text-base">
          <p>
            Personal Journey of A Developer into learning new things,experiences
            and various insights.
          </p>
          <p>
            Curioventure brings you stories that inspire, ignite curiosity, and
            encourage exploration of the world’s untamed digital terrains. It’s
            the ultimate fusion of curiosity and adventure in the realm of tech.
          </p>
        </div>
      </div>
      <div className="lg:pb-[200px] w-full gap-4 lg:gap-8 grid grid-cols-1 lg:grid-cols-2">
        {techFeaturesData.map((item, id) => (
          <Card key={id} {...item} />
        ))}
      </div>
    </div>
  );
}
const Card = ({
  title,
  content,
  img_url,
  embedUrl,
}: {
  title: string;
  content: string;
  img_url: string;
  embedUrl: string;
}) => {
  return (
    <div className="lg:even:translate-y-[200px]">
      <div className="mb-4">
        <iframe
          loading="lazy"
          src={embedUrl}
          width={640}
          height={427}
          className="rounded-md w-full h-auto min-h-[600px]"
        ></iframe>
      </div>
      <div>
        <Link href={embedUrl} className="block">
          <h3 className="mb-1.5 text-white font-black text-xl lg:text-3xl hover:text-blue-400 transition-colors">
            Visit {title}
          </h3>
        </Link>
        <p className="text-[#B4B8AB] lg:mb-10 text-sm lg:text-base">
          {content}
        </p>
      </div>
    </div>
  );
};
export default Features;
