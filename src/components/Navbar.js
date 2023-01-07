import React, { useState } from "react";
import logo1 from "../assets/logo2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  BsLinkedin,
  BsFillCloudDownloadFill,
  BsMailbox2,
  BsGithub,
} from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[4rem] flex justify-between items-center px-4 bg-black text-cyan-50">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            src={logo1}
            alt="logo"
            className="w-10 transition ease-out hover:scale-125"
          />
        </Link>
      </div>

      <ul className="hidden md:flex ">
        <li className="transition ease-out hover:scale-125">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="transition ease-out hover:scale-125">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="transition ease-out hover:scale-125">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        {/* <li className="transition ease-out hover:scale-125">Work</li> */}
        <li className="transition ease-out hover:scale-125">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center text-3xl "
        }
      >
        <li className="p-2 transition ease-out hover:scale-125">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-2 transition ease-out hover:scale-125">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-2 transition ease-out hover:scale-125">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        {/* <li className="p-2 transition ease-out hover:scale-125">Work</li> */}
        <li className="p-2 transition ease-out hover:scale-125">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[30%] pl-0">
        <ul>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 text-lg">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/vvk399/"
              target="_blank"
            >
              LinkedIn <BsLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 text-lg">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/Viveks399"
              target="_blank"
            >
              GitHub <BsGithub size={25} />
            </a>
          </li>
          {/* <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 text-lg">
            <a className="flex justify-between items-center w-full" href="">
            
              E-Mail <BsMailbox2 size={25} />
            </a>
          </li> */}
          <li className="w-[150px] h-[60px] group flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 text-lg ">
            <a
              className="flex justify-between items-center w-full"
              href={require("../assets/resume.pdf")}
              download="Vivek's resume"
            >
              Resume
              <BsFillCloudDownloadFill
                size={25}
                className=" animate-bounce group-hover:animate-bounce"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
