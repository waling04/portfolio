import React, {useState} from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id="contact" className="h-[100%] mt-32 font-fontTwo">
      <div className="font-bold text-4xl text-center">Contact</div>
      <div className="flex justify-center items-center mt-12">
        <Form /> 
      </div>
      <Social />
    </section>
  );
};

const Form = () => {

  return (
    <>
      <div class="border border-black w-[35%] rounded">
        <div class="p-4">
          <form id="contact_form" name="submit-to-google-sheet" action="https://getform.io/f/a55https://getform.io/f/a55b9a44-2cf5-45b9-a06f-938a793a3f55b9a44-2cf5-45b9-a06f-938a793a3f55" method="POST">
            <div class="mb-4">
              <label for="message" class="block text-sm text-black">
                Message:
              </label>
              <textarea
                class="w-full rounded bg-gray-300 p-4"
                name="Message"
                id="message"
                rows="6"
                placeholder=""
              ></textarea>
            </div>
            <div class="flex mb-5">
              <div class="w-1/2 mr-2">
                <label for="name" class="block text-sm text-black">
                  Your Name:
                </label>
                <input
                  class="rounded w-full bg-gray-300 py-2 p-2"
                  type="text"
                  name="Name"
                  id="name"
                />
              </div>
              <div class="w-1/2">
                <label for="email" class="block text-sm text-black">
                  Email Address:
                </label>
                <input
                  class="rounded  w-full bg-gray-300 py-2 p-2"
                  type="email"
                  name="Email"
                  id="email"
                />
              </div>
            </div>
            <div className="flex justify-end ">
              <button
                type="submit"
                class="bg-black py-2 p-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-black hover:bg-gray-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const Social = () => {
  return (
    <>
      <div className="text-black p-6 flex justify-center mb-16">
        <a
          href="https://www.linkedin.com/in/thanwaratstsn/"
          target="_blank"
          className="text-2xl mr-2 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/waling04"
          target="_blank"
          className="text-2xl ml-2 hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default Contact;
