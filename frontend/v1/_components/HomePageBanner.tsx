import React from "react";

function HomePageBanner() {
  return (
    <div className="bg-[#b4b8ab] text-black lg:h-[100vh]">
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10">
        <div className="flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-7">
          <button className="py-2.5 px-5 rounded-full w-max border border-black tracking-wide">
            Curioventure
          </button>
          <br />
          <h1 className="text-3xl lg:text-6xl font-extrabold leading-9 flex gap-2 flex-wrap max-w-[600px]">
            {[
              "Curiosity",
              ",",
              "Adventure",
              ",",
              "Technology",
              ",",
              "Hobbies",
              ",",
              "Projects",
            ].map((word, i) => (
              <span
                key={i}
                className={`animated-word gradient-${i}`}
                style={{ "--i": i }}
              >
                <span className="word">{word}</span>
              </span>
            ))}
          </h1>

          <button className="py-2.5 px-5 bg-[#284B63] text-white rounded-full w-full lg:w-max">
            Explore Now
          </button>
        </div>
        <div>
          <svg height="500" width="800" className="w-full lg:max-w-[800px]">
            <image href="../cd.png" x="0" y="0" width="800" height="500" />
            <defs>
              <clipPath id="theSVGPath">
                <rect
                  x="0"
                  y="0"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="108"
                  height="500"
                />
                <rect
                  x="121.5"
                  y="25.5"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="55"
                  height="455"
                />
                <rect
                  x="192.5"
                  y="9.5"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="60"
                  height="484"
                />
                <rect
                  x="271.5"
                  y="44.5"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="63"
                  height="416"
                />
                <rect
                  x="349.5"
                  y="25.5"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="208"
                  height="447"
                />
                <rect
                  x="574.5"
                  y="44.5"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="60"
                  height="446"
                />
                <rect
                  x="644.5"
                  y="9.5"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="68"
                  height="471"
                />
                <rect
                  x="736.5"
                  y="18.5"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  width="49"
                  height="462"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
