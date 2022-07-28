import React from 'react'
import Illustration from "../assests/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
      {/* left */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.{" "}
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="px-6 rounded-full text-white pt-2 bg-brightRed p-3 baseline hover:bg-brightRedLight">
            Get Started
          </button>
        </div>
      </div>
      {/* image */}
      <div className="md:w-1/2">
        <img src={Illustration} alt="" />
      </div>
    </div>
  )
}

export default Hero