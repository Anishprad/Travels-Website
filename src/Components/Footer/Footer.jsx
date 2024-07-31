import React, { useState } from "react";
import Vector1 from "../../Assets/Icons/Footer/Vector1.png"
import Vector2 from "../../Assets/Icons/Footer/Vector2.png"
import Vector3 from "../../Assets/Icons/Footer/Vector3.png"
import Vector4 from "../../Assets/Icons/Footer/Vector4.png"
import Vector5 from "../../Assets/Icons/Footer/Vector5.png"
import Vector6 from "../../Assets/Icons/Footer/Vector6.png"
import Vector7 from "../../Assets/Icons/Footer/Vector7.png"
import {Link} from "react-router-dom"

const Footer = () => {
  const [menu, setMenu] =useState("")
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-8 p-8 justify-between sm:h-[600px] md:h-72 lg:h-72 md:p-4 lg:p-11">
      <div className=" flex flex-col gap-4">
        <h1 className="font-semibold text-xl font-mono">Quick Links</h1>
       <ul className=" flex flex-col gap-4 text-base list-none cursor-pointer">
        <Link to="/about"><li onClick={()=>{setMenu("about")}}>About Us {menu === "about" && <hr className="w-16"/>}</li></Link>
        <Link to="/contact"><li onClick={()=>{setMenu("contact")}}>Contact {menu === "contact" && <hr className="w-14"/>}</li></Link>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>FAQ</li>
       </ul>
      </div>
      <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold font-mono">Contact</h1>
      <div className="flex gap-2 items-center">
        <img src={Vector1}  className="h-4 w-3" alt="" />
        <p>Kathmandu, Nepal</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src={Vector2} className="h-4 w-3" alt="" />
        <p>+977-9840012748, 01-2220515</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src={Vector3} className="h-4 w-3" alt="" />
        <p>travelcontactinfo@gmail.com</p>
      </div>
      </div>
      <div className="flex flex-col  gap-4">
<h1 className="text-xl font-semibold font-mono">Sign up for our Newsletter</h1>
<p className="text-sm text-gray-400">Subscribe to know our every single updates</p>
     <div className="flex rounded-xl h-12 w-72 border-2">
      <input type="text" className="w-3/4 p-1" placeholder="example@gmail.com" />
      <button className="w-1/4 bg-blue-600 text-white h-full px-1 py-1 rounded-lg">Subscribe</button>
     </div>
     <div className="flex gap-3 items-center h-6 w-5">
      <img src={Vector4} alt="" />
      <img src={Vector5} alt="" />
      <img src={Vector6} alt="" />
      <img src={Vector7} alt="" />
     </div>
      </div>
    </div>
  );
};

export default Footer;
