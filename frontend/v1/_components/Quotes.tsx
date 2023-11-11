import React from "react";
const techFeaturesData = [
    {
        name: "John Davenport",
        content:
            "I can’t believe how engaging and eye-opening Curioventure’s content is. It keeps me hooked!",
        img_url: "profile.jpg",
    },
    {
        name: "Samantha Cruz",
        content:
            "Curioventure has helped me discover the fascinating intersections between adventure and tech.",
        img_url: "profile.jpg",
    },
    {
        name: "Kevin Williamson",
        content:
            "If you have a thirst for discovery and love technology, Curioventure is the perfect place to explore.",
        img_url: "profile.jpg",
    }
];
function Quotes() {
    return (
        <div className="container">
            <h1 className='text-2xl lg:text-3xl font-bold text-white tracking-wider mb-2.5 lg:mb-5'>Reviews</h1>
            <div className="lg:pb-[200px] w-full gap-5 lg:gap-8 grid grid-cols-1 lg:grid-cols-3">
                {techFeaturesData.map((item, id) => (
                    <Card
                        key={id}
                        img_url={item.img_url}
                        content={item.content}
                        name={item.name}
                    />
                ))}
            </div>
        </div>
    );
}

const Card = ({ name, content, img_url }: { name: string, content: string, img_url: string }) => {
    return (
        <div className="bg-[#282727] rounded-md p-5">
            <div className="mb-4 lg:mb-5">
                <img
                    src={`../${img_url}`}
                    width={150}
                    height={150}
                    className="rounded-full max-w-[100px] lg:max-w-[125px] object-center"
                />
            </div>
            <div>
                <h3 className="text-white mb-6 lg:mb-8 font-semibold tracking-normal lg:text-xl text-base">{content}</h3>
                <p className="text-white text-sm font-medium">
                    {name}
                </p>
            </div>
        </div>
    );
};
export default Quotes;
