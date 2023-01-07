import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center text-lime-400 bg-gradient-to-t from-gray-700 via-gray-900 to-black"
    >
      <form
        method="POST"
        action="https://getform.io/f/afe64d6c-7ca2-4522-a89c-95434a778983"
        className="flex flex-col max-w-[600px] w-full"
        autoComplete="off"
      >
        <div className="pb-8">
          <p className="text-5xl font-semibold inline border-b-4">Contact</p>
          <p className="py-4 font-extralight text-xl">
            // Submit the form or shoot me an E-Mail -{" "}
            <span className="font-medium inline border-b-4">
              vivek.me.619@gmail.com
            </span>
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="mb-1 p-1 bg-slate-400 placeholder:text-lime-300"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="mt-2  p-1 bg-slate-400 placeholder:text-lime-300"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="8"
          className="bg-slate-400 placeholder:text-lime-300 mt-3 p-1"
        ></textarea>
        <button className="flex items-center justify-center px-4 py-3 my-8 ml-[13.5rem] mr-[12.5rem] text-white border-2 transition ease-out hover:scale-110  hover:bg-lime-500 hover:border-lime-500 hover:text-gray-900">
          Let's collab
        </button>
      </form>
    </div>
  );
}

export default Contact;
