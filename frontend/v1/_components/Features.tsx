import React from "react";
const techFeaturesData = [
  { title: "Tech Mountains", content: "Climb the peaks of tech knowledge with our gripping articles and expert insights.", img_url: "tech1.jpg" },
  { title: "Deep Dive", content: "Unravel the deepest mysteries of technology, challenge the norms, and discover the unknown.", img_url: "deep_dive.jpg" },
  { title: "Tech Skyline", content: "Keep an eye on the rising stars in the tech world with our astute analyses and predictions.", img_url: "sky.jpg" },
  { title: "Untamed Tech", content: "Venture into the wild side of technology, exploring the untamed frontiers with us.", img_url: "untaned.jpg" }
]
function Features() {
  return (
    <div className="container flex flex-col gap-5 lg:py-5">
      <div>
        <h2 className="mb-4 lg:mb-6 text-2xl lg:text-3xl font-black tracking-wider">
          Unravel the Wonders
        </h2>
        <div className="text-[#B4B8AB] flex flex-col gap-2 lg:flex-row lg:gap-8 text-sm lg:text-base">
          <p>
            Embark on an adventure through the lens of technology, where we
            delve into the intricacies of the digital world while keeping our
            eyes peeled for the unimaginable.
          </p>
          <p>
            Curioventure brings you stories that inspire, ignite curiosity, and
            encourage exploration of the world’s untamed digital terrains. It’s
            the ultimate fusion of curiosity and adventure in the realm of tech.
          </p>
        </div>
      </div>
      <div className='lg:pb-[200px] w-full gap-4 lg:gap-8 grid grid-cols-1 lg:grid-cols-2'>
        {
          techFeaturesData.map((item, id) => <Card key={id} img_url={item.img_url} content={item.content} title={item.title} />)
        }
      </div>
    </div>
  );
}
const Card = ({ title, content, img_url }: { title: string, content: string, img_url: string }) => {
  return (
    <div className="lg:even:translate-y-[200px] rotate-2">
      <div className="mb-4">
        <img src={`../${img_url}`} width={640} height={427} className="rounded-md" />
      </div>
      <div>
        <h3 className="mb-1.5 text-white font-black text-xl lg:text-3xl">{title}</h3>
        <p className="text-[#B4B8AB] text-sm lg:text-base">{content}</p>
      </div>
    </div>
  )
}
export default Features;
