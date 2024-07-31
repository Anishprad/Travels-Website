 import React, { useState } from "react";
import shop from "../../Assets/Icons/Others/VectorShop.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <nav className="max-w-[2028px] w-full h-12 border sm:px-2 md:px-6 lg:px-10 bg-white fixed top-0 z-50 border-gray-50 shadow-lg flex justify-between items-center">
      <h1 className="font-bold text-2xl capitalize text-gray-500">Travel</h1>
      <ul className="flex justify-between sm:gap-2 md:gap-4 lg:gap-8 sm:text-xs md:text-xs lg:text-sm">
        <Link to="/">
          <li onClick={() => setMenu("home")}>
            Home {menu === "home" && <hr />}
          </li>
        </Link>
        <Link to="/about">
          <li
            onClick={() => {
              setMenu("about");
            }}
          >
            About {menu === "about" && <hr />}
          </li>
        </Link>
        <Link to="/flight">
          <li
            onClick={() => {
              setMenu("flight");
            }}
          >
            Flight{menu === "flight" && <hr />}
          </li>
        </Link>
        <Link to="/domesticPackage">
          <li
            onClick={() => {
              setMenu("domesticPackage");
            }}
          >
            Domestic Package{menu === "domesticPackage" && <hr />}
          </li>
        </Link>
        <Link to="/internationalPackage">
          <li
            onClick={() => {
              setMenu("internationalPackage");
            }}
          >
            International Package{menu === "internationalPackage" && <hr />}
          </li>
        </Link>
        <Link to="/contact">
          <li
            onClick={() => {
              setMenu("contact");
            }}
          >
            Contact{menu === "contact" && <hr />}
          </li>
        </Link>
      </ul>
      <div className="flex justify-center gap-4 items-center">
        <Link to="/cart">
          <img src={shop} className="w-6 h-6" alt="" />
        </Link>
        {isAuthenticated && (
          <li className="items-center list-none ml-1">
            <p className="text-xs text-gray-500 font-normal capitalize">
              {user.name}
            </p>
          </li>
        )}

        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="bg-blue-700 text-white py-2 shadow text-xs active:bg-green-400 active:text-white px-2 h-8 w-16 rounded "
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-700 text-white py-2 shadow text-sm active:bg-green-400 active:text-white px-2 h-8 w-16 rounded "
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
