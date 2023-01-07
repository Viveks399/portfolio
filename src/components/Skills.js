import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javasript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div
      name="skills"
      className="w-full h-screen text-lime-400 bg-gradient-to-b from-gray-700 via-gray-900 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-[1000px] mx-auto p-4">
        <div>
          <p className="text-5xl font-semibold inline border-b-4">Skills</p>
          <p className="py-4 font-extralight text-xl">
            // These are the technologies I know.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:gird-cols-4 gap-4 text-center py-8">
          <div className="transition ease-out hover:scale-110">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="font-light py-2">HTML</p>
          </div>

          <div className="transition ease-out hover:scale-110">
            <img className="w-20 mx-auto" src={css} alt="HTML icon" />
            <p className="font-light py-2">CSS</p>
          </div>

          <div className="transition ease-out hover:scale-110">
            <img className="w-20 mx-auto" src={javasript} alt="HTML icon" />
            <p className="font-light py-2">Javascript</p>
          </div>

          <div className="transition ease-out hover:scale-110">
            <img className="w-20 mx-auto" src={react} alt="HTML icon" />
            <p className="font-light py-2">React</p>
          </div>

          <div className="transition ease-out hover:scale-110">
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p className="font-light py-2">Tailwind</p>
          </div>

          <div className="transition ease-out hover:scale-110">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="font-light py-2">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
