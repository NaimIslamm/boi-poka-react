import React from "react";
import BannerImage from "../../assets/pngwing 1.png";
const HeroBanner = () => {
  return (
    <div className="hero bg-slate-50 min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImage}
          className="md:w-6/12	max-w-[338px] rounded-lg shadow-2xl"
        />
        <div className="md:w-6/12	flex flex-col gap-[48px]">
          <h1 className="text-5xl font-bold md:leading-[65px] text-[black]">
            Books to freshen up your bookshelf
          </h1>
          <button class="btn btn-primary w-fit	bg-[green] text-white border-0 text-shadow-0">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
