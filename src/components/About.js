import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen text-lime-400 bg-gradient-to-t from-gray-700 via-gray-900 to-black"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-6xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-5xl font-semibold">
            <p>Hi. I'm Vivek, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-xl">
            <p>
              I'm passionate about building excellent software that improves the
              lives of those around me. I specialize in creating software for
              clients ranging from indiviuals to small-bussiness. what would you
              do if you had a software developer at your fingertips ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
