import React from "react";
import rasm from "../../assets/about.png";

const About = () => {
  return (
    <div className="flex items-center justify-between container1 pt-14">
      <img className="w-[455px] h-[400px]" src={rasm} alt="qwertyuiop" />
      <div className="w-[500px] flex gap-3 flex-col self-auto">
        <h3 className="text-base text-red-600 font-medium">ABOUT US</h3>
        <h3 className="font-semibold text-4xl ">
          Food Stalls with Persons but to Product marketing plane catlogues etc
          to.
        </h3>
        <p className="font-light text-base">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also equipment make
          your marketing plane Effective.
        </p>
        <button className="p-3 block w-40 rounded-md text-white font-semibold bg-red-600 hover:bg-red-400">
          Read more
        </button>
      </div>
    </div>
  );
};

export default About;
