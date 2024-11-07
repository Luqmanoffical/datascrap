import React from 'react'
import Hero from './Hero'
import Main from './Main'
import coton from "../../assets/coton.avif"
import Product from "./Products"
import card1 from "../../assets/flowersho.avif"
import card2 from "../../assets/cardsh.avif"
import {Reviews} from "./Reviews"
function Home() {
  return (
    <div>
      <div >
            <Hero/>
      </div>
      
      <div >
<Main/>
      </div>
      
      <div 
  className="text-white flex items-center justify-center flex-col min-h-[20rem] bg-cover bg-center mt-8 p-16  "
  style={{ backgroundImage: `url(${coton})`, fontFamily: "Mona Sans, Roboto, sans-serif" }}
>
  <h1 className="text-3xl font-semibold tracking-wider mb-4 leading-tight">
    We Make Better Things In A Better Way
  </h1>
  <p className="text-base font-thin text-center mb-6 max-w-lg mx-auto ">
    By looking to the world’s greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you feel good in and feel good about.
  </p>
  <h6 className="text-xl font-semibold text-gray-300 uppercase tracking-wide">
    LOGO
  </h6>
</div>

      <div className='min-h-screen'>
<Product/>
      </div>
      
      <div className='min-h-screen flex'>
      <div
  className="min-h-screen w-1/2 bg-cover bg-center relative overflow-hidden transition-transform duration-500 ease-in-out"
  style={{
    backgroundImage: `url(${card1})`,
    fontFamily: "Mona Sans, Roboto, sans-serif",
  }}
>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${card1})` }}>
  <div className="absolute inset-0 flex flex-col  items-center m-10 text-white px-4">
    <h3 className="text-2xl font-semibold">Gifts Under $100</h3>
    <p className=" text-sm">Cozy Gifts At Comfy Prices</p>

  </div>
  </div>
</div>

<div
  className="min-h-screen w-1/2 bg-cover bg-center relative overflow-hidden transition-transform duration-500 ease-in-out"
  style={{
    backgroundImage: `url(${card2})`,
    fontFamily: "Mona Sans, Roboto, sans-serif",
  }}
>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${card2})` }}>
  <div className="absolute inset-0 flex flex-col  items-center m-10 text-white px-4">
    <h3 className="text-2xl font-semibold">Gift Cards</h3>
    <p className=" text-sm">Always Fits, Never Fails</p>
    
  </div>
  </div>
</div>

      </div>
   <div>
      <h2 className='text-center pt-6 pb-3 text-2xl font-bold   text-[#c79d43] '>Reviews</h2>
      <Reviews/>
   </div>
   
    </div>
  )
}

export default Home
