import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-bl from-gray-700 via-gray-900 to-black"
    >
      {/* container */}
      <div className="flex flex-col justify-center max-w-[1000px] mx-auto px-8 h-full">
        <p className="text-lime-200 text-xl font-light">Hi, my name is </p>
        <h1 className="text-4xl sm:text-8xl font-semibold animate-pulse text-lime-400">
          Vivek S
        </h1>
        <h1 className="text-4xl sm:text-7xl font-semibold text-lime-400 py-2">
          <Typewriter
            options={{
              strings: ["Front-End Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h2 className=" text-lime-500 text-xl py-4 max-w-[600px]">
          A tech enthusiast with experience in Web development and coding who is
          eager to learn, grasp and acquire more skills that the tech world can
          offer.
        </h2>
        <div>
          <Link to="skills" smooth={true} duration={500}>
            <button className=" flex items-center group text-white border-2 py-2 px-5 transition ease-out hover:scale-110  hover:bg-lime-500 hover:border-lime-500 hover:text-gray-900 ">
              View Skill{" "}
              <span className="group-hover:rotate-90 duration-300 ">
                <BsArrowRight size={25} className="pl-2 transition ease-out" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
