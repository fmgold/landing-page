import React from "react";
import Avatar from "../assests/avatar-anisha.png";
import Avatar1 from "../assests/avatar-ali.png"
import Avatar2 from '../assests/avatar-richard.png'

const Testimonials = () => {
  return (
    <>
    
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-4xl font-bold text-center">
        What's Different About Manage
      </h2>
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <img className="w-16 -mt-14" src={Avatar} alt="" />
          <h5 className="text-lg font-bold"> Anisha Li</h5>
          <p className="text-sm text-darkGrayishBlue">
            "Manage has supercharged our team's workflow. The ability to
            maintain visibility on larger milestones at all time keeps everyone
            motivated."
          </p>
        </div>
        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img className="w-16 -mt-14" src={Avatar1} alt="" />
          <h5 className="text-lg font-bold"> Richard Bravo</h5>
          <p className="text-sm text-darkGrayishBlue">
            "Manage has supercharged our team's workflow. The ability to
            maintain visibility on larger milestones at all time keeps everyone
            motivated."
          </p>
        </div>
        <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img className="w-16 -mt-14" src={Avatar2} alt="" />
          <h5 className="text-lg font-bold"> Angela Yu</h5>
          <p className="text-sm text-darkGrayishBlue">
            "Manage has supercharged our team's workflow. The ability to
            maintain visibility on larger milestones at all time keeps everyone
            motivated."
          </p>
        </div>
      </div>
      <div className="my-16">
          <button className="px-6 rounded-full text-white pt-2 bg-brightRed p-3 baseline hover:bg-brightRedLight">
            Get Started
          </button>
        </div>
    </div>
    
    </>
  );
};

export default Testimonials;
