import React from "react";
import Logo from "../assests/logo-white.svg";
import facebook from "../assests/icon-facebook.svg";
import youtube from "../assests/icon-youtube.svg";
import pinterest from "../assests/icon-pinterest.svg";
import instagram from "../assests/icon-instagram.svg";
import twitter from "../assests/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
        <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022. All Rights Reserved
            </div>
          <div>
            <img src={Logo} alt="" className="h-8" />
          </div>


          <div className="flex justify-center space-x-4">
            <span>
              <img className="h-8" src={facebook} />
            </span>
            <span>
              <img className="h-8" src={youtube} />
            </span>
            <span>
              <img className="h-8" src={instagram} />
            </span>
            <span>
              <img className="h-8" src={pinterest} />
            </span>
            <span>
              <img className="h-8" src={twitter} />
            </span>
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <span className="hover:text-brightRed">Home</span>
            <span className="hover:text-brightRed">Pricing</span>
            <span className="hover:text-brightRed">Products</span>
            <span className="hover:text-brightRed">About</span>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <span className="hover:text-brightRed">Career</span>
            <span className="hover:text-brightRed">Community</span>
            <span className="hover:text-brightRed">Privacy Policy</span> 
          </div>
          </div>

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded0full focus:outline-none"
                  placeholder="updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022. All Rights Reserved
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
