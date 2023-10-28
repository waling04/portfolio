import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import genth from "../assets/genth.png";
import coding from "../assets/coding.png";
import "../App.css";
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import JavaScript from "../assets/JavaScript.svg";
import react from "../assets/react.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import mongodb from "../assets/mongodb.svg";
import node from "../assets/node.svg";
import bootstrap from "../assets/bootstrap.svg";
import tailwind from "../assets/tailwind.svg";
import postman from "../assets/postman.svg";
import silpakorn from "../assets/silpakorn.png";
import { FaCircleInfo } from "react-icons/fa6";
import Thanwarat from "../assets/Thanwarat.pdf";
import ThanwaratCV from '../assets/ThanwaratCV.pdf'

const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-duration="3000"
      className="h-full md:mt-20 mb-4"
    >
      <div className="hidden md:block font-bold text-4xl md:flex w-[75%] justify-end mb-2 animate-bounce ">
        <FaCircleInfo />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-xl shadow-lg p-16 md:w-[50%] w-[80%] bg-[#F5DEB3] shadow-2xl">
          <div className="font-fontTwo">
          I am a graduate of Generation's Junior Software Developer Bootcamp with a strong passion for web development. I have a solid foundation in React.js and frontend technologies, including HTML, CSS, JavaScript, and Node.js. I am dedicated, highly motivated, and eager to continue learning and improving my skills. I'm excited about the opportunities ahead in my development journey.
          </div>
        </div>
        <br />
        <div className="mt-12 md:ml-[520px] md:mt-6 ">
          <button class="bg-gray-300 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>
              <a href={ThanwaratCV} download >
                Download CV
              </a>
            </span>
          </button>
        </div>
        <div className="mt-16 font-fontTwo">
          <Skills />
          <Education />
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <>
      <div>
        <div className="font-bold text-center text-4xl mt-12 mb-12">Skills</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <img
            src={html5}
            alt="html logo"
            className="m-4 md:w-[60px] w-[50px]"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <img
            src={css3}
            alt=" css3 logo"
            className="m-4 md:w-[60px] w-[50px]"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <img
            src={JavaScript}
            alt="javascript logo"
            className="m-4 md:w-[60px] w-[50px]"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <img
            src={react}
            alt="react logo"
            className="m-4 md:w-[60px] w-[50px]"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <img
            src={figma}
            alt="figma logo"
            className="m-4 md:w-[60px] w-[50px]"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <img
            src={bootstrap}
            alt="bootstrap logo"
            className="m-4 md:w-[80px] w-[50px]"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
        </div>
        <div className="flex mb-12">
          <img
            src={tailwind}
            alt="tailwind logo"
            className="m-2 md:w-[60px] w-[50px]"
            data-aos="flip-right"
            data-aos-duration="2000"
          />
          <img
            src={git}
            alt="git logo"
            className="m-2 md:w-[60px] w-[50px]"
            data-aos="flip-right"
            data-aos-duration="2000"
          />
          <img
            src={github}
            alt="github logo"
            className="m-2 md:w-[60px] w-[50px]"
            data-aos="flip-right"
            data-aos-duration="2000"
          />
          <img
            src={node}
            alt="node logo"
            className="m-2 md:w-[60px] w-[50px]"
            data-aos="flip-right"
            data-aos-duration="2000"
          />
          <img
            src={mongodb}
            alt="mongodb logo"
            className="m-2 md:w-[60px] w-[50px]"
            data-aos="flip-right"
            data-aos-duration="2000"
          />
          <img
            src={postman}
            alt="postman logo"
            className="m-2 md:w-[60px] w-[50px]"
            data-aos="flip-right"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </>
  );
};

const Education = () => {
  return (
    <>
      <div className="mt-20">
        <div className="md:flex justify-center">
          <div className="font-bold text-center text-4xl">Education</div>
        </div>
        <div className="flex justify-end mr-64">
          <img
            src={coding}
            alt="coding"
            className="md:w-[200px] w-[180px] mt-12"
          />
        </div>
        <div className="flex flex-col justify-center ">
          <Generation />
          <Silpakorn />
        </div>
      </div>
    </>
  );
};

const Generation = () => {
  return (
    <div className="flex justify-start ml-32 ">
      <div
        data-aos="fade-up-right"
        data-aos-duration="2000"
        className=" rounded-lg p-8 bg-[#F5DEB3]	flex md:w-[40%] w-[90%] items-center mt-8 md:mt-0"
      >
        <div className="w-[75%]">
          Generation Thailand
          <div className="italic"> July 2023 - October 2023</div>
          Learned technical skills such as programming fundamentals and
          essential web development expertise, encompassing HTML, CSS,
          JavaScript, React, Node.js, Express, and MongoDB, alongside behavioral
          skills and mindsets
        </div>
        <div className="w-[25%]">
          <img
            src={genth}
            alt="generation thailand logo"
            width="100px"
            height="50px"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const Silpakorn = () => {
  return (
    <div className="flex justify-end mr-44 mt-16">
      <div
        data-aos="fade-up-left"
        data-aos-duration="3000"
        className=" md:w-[35%] w-[95%] rounded-lg p-8 bg-[#F5DEB3] flex items-center"
      >
        <div className="flex">
          <div className="w-[100%]">
            Silpakorn University
            <div className="italic"> 2016 - 2019</div>
            Bachelor of Arts, Faculty of Archeology in Thai major (Second -
            Class honors)
          </div>
          <div className="w-[60%]">
            <img
              src={silpakorn}
              alt="generation thailand logo"
              width="100px"
              height="50px"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AOS.init();
export default About;
