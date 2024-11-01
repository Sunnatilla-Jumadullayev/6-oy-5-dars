import React from "react";
import rasm1 from "../../assets/g1.svg";
import rasm2 from "../../assets/g1.svg";
import rasm3 from "../../assets/g1.svg";
import { FETATURES__LIST } from "../../static";
const Features = () => {
  let featuresItem = FETATURES__LIST.map((item, key) => {
    const { title, desc } = item;
    return (
      <div className="w-80 flex flex-col justify-center items-center" key={key}>
        <img className="w-20 h-20" src={rasm1} alt="" />
        <h4 className="font-semibold text-2xl">{title}</h4>
        <p>{desc}</p>
      </div>
    );
  });

  return (
    <section className="features container1 text-center ">
      <h3 className="text-red-600 mb-3 text-base font-semibold">FEATURES</h3>
      <h1 className="text-4xl">Food with a New Passion</h1>
      <div className="flex justify-between mt-10">{featuresItem}</div>
    </section>
  );
};

export default Features;
