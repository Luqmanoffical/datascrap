import React from 'react';
import main1 from "../../assets/main1.avif";
import main2 from "../../assets/main2.avif";
import main3 from "../../assets/main3.webm";

function Main() {
  return (
    <div className="flex gap-3 p-5">
      <div className="w-1/3 relative group">
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${main1})` }}
        >
          <div className="flex flex-col justify-between h-full p-6">
            <div className='text-center text-sm mt-6'>
              <h1 className="text-white text-2xl font-bold">Wool Runner Go</h1>
              <p className="text-white">Sublimely Soft, Everyday Elevated</p>
            </div>
            <button className="hidden group-hover:block mt-auto px-4 py-2 bg-black text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/3 relative group">
        <div className="h-full relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={main3} type="video/webm" />
          </video>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-6">
            <div className='text-center text-sm mt-6'>
              <h1 className="text-white text-2xl font-bold">Wool Runner Mizzle</h1>
              <p className="text-white">Weather-ready, Everyday Sneaker</p>
            </div>
            <button className="hidden group-hover:block mt-auto px-4 py-2 bg-black text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/3 relative group">
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${main2})` }}
        >
          <div className="flex flex-col justify-between h-full p-6">
            <div className='text-center text-sm mt-6'>
              <h1 className="text-white text-2xl font-bold">Tree Topper</h1>
              <p className="text-white">Breezy High-Top Sneakers</p>
            </div>
            <button className="hidden group-hover:block mt-auto px-4 py-2 bg-black text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
