import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.svg";

const Navbar = () => {
 const [open, setOpen] = useState(0)

 const openMenu =()=>{
    setOpen(open + 1)
    console.log("click")
 }
 console.log(open)

  return (
    <div className="relative container mx-auto p-6 ">
      <div className="flex justify-between items-center">
        <div className="pt-2">
          <img alt="" src={Logo} />
        </div>
        <div className=" hidden md:flex space-x-6">
          <Link className="hover:text-darkGrayishBlue" to="#">
            Pricing
          </Link>
          <Link className="hover:text-darkGrayishBlue" to="#">
            Product
          </Link>
          <Link className="hover:text-darkGrayishBlue" to="#">
            About Us
          </Link>
          <Link className="hover:text-darkGrayishBlue" to="#">
            Careers
          </Link>
          <Link className="hover:text-darkGrayishBlue" to="/">
            Community
          </Link>
        </div>
        <button className="hidden md:block px-6 rounded-full text-white pt-2 bg-brightRed p-3 baseline hover:bg-brightRedLight">
          Get Started
        </button>
        <button onClick={openMenu} className="block h-4 w-6 bg-brightRed  md:hidden focus:outline-none">
              {open}
        </button>
      </div>
      x
      <div className={`absolute hidden flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md }`}>
      <span>Pricing</span>
      <span>Product</span>
      <span>About Us</span>
      <span>Career</span>
      <span>Community</span>
      </div>
    </div>
  );
};

export default Navbar;
