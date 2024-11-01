import React from "react";
import herRasm from "../../assets/hero-img.jpg";

const Hero = () => {
  return (
    <section className="hero container1 flex justify-between items-center">
      <div>
        <h1 className="text-5xl font-extrabold leading-10 mb-8">
          Making time a good time by making food the good food.
        </h1>
        <p className="mb-10 ">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <button className="p-2 rounded-md inline-block font-semibold text-red-600 text-xl hover:bg-red-600 hero__btn">
          Order now
        </button>
        <button className="p-2 rounded-md inline-block font-semibold text-red-600 text-xl hover:bg-red-600 hero__btn">
          Food deatils
        </button>
      </div>
      <img className="w-[575px]" src={herRasm} alt="hero-rasm" />
    </section>
  );
};

export default Hero;
