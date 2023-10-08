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
import mongodb from "../assets/mongodb.svg"
import node from "../assets/node.svg"
import postman from "../assets/postman.svg"
import silpakorn from "../assets/silpakorn.png"
import Navbar from "./Navbar"


const About = () => {
  return (
    <div
      id="about" data-aos="fade-up" data-aos-duration="3000"
      className="w-screen h-full scroll-smooth flex flex-col justify-center items-center">
      <div className="border border-black rounded-lg p-16 w-[50%] bg-orange-100 mt-12">
        <div className="font-fontTwo">
          I am a graduate of Generation's Junior Software Developer Bootcamp.
          Who is an expert on React.JS and a frontend that can handle HTML, CSS,
          JavaScript, and Node.js As a person who is passionate about
          development and technically skilled, with dedication, effort, and a
          willingness to learn from every experience, I can continually improve
          and achieve my goals.
        </div>
      </div>
      <br />
      <div className="w-[100%] mt-16 font-fontTwo">
       <Skills /> 
       <Education />
        
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
    <div>
      <div className="font-bold text-center text-4xl mt-12 mb-12">
        Skills
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
      <img src={html5} alt="html logo" className="m-4" data-aos="flip-left" data-aos-duration="1000"/>
      <img src={css3} alt=" css3 logo" className="m-4" data-aos="flip-left" data-aos-duration="1000"/>
      <img src={JavaScript} alt="javascript logo" className="m-4"data-aos="flip-left" data-aos-duration="1000"/>
      <img src={react} alt="react logo" className="m-4" data-aos="flip-left" data-aos-duration="1000"/>
      <img src={figma} alt="figma logo" className="m-4" data-aos="flip-left" data-aos-duration="1000"/>
    </div>
    <div className="flex mb-12">
      <img src={git} alt="git logo" className="m-2" data-aos="flip-right" data-aos-duration="2000"/>
      <img src={github} alt="github logo" className="m-2" data-aos="flip-right" data-aos-duration="2000"/>
      <img src={node} alt="github logo" className="m-2 " width="90px" data-aos="flip-right" data-aos-duration="2000"/>
      <img src={mongodb} alt="github logo" className="m-2" width="90px" data-aos="flip-right" data-aos-duration="2000"/>
      <img src={postman} alt="github logo" className="m-2" width="65px" data-aos="flip-right" data-aos-duration="2000"/>
    </div>
    </div>
    
    </>
  )
}

const Education = () => {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="font-bold text-center text-4xl">Education</div>
        </div>
        <div className="flex justify-end mr-64">
          <img src={coding} alt="coding" width="200px"/>
        </div>
        <div className="flex flex-col justify-center ">
            <Generation />
          <Silpakorn />
          {/* <Bp /> */}
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
        className=" rounded-lg p-8 bg-[#F5DEB3]	flex w-[40%] items-center "
      >
        <div className="w-[75%]">
          Generation Thailand
          <div className="italic"> July 2023 - October 2023</div>
          Learned technical skills such as programming fundamentals and
          essential web development expertise, encompassing HTML, CSS,
          JavaScript, React, Node.js, Express, and MongoDB, alongside behavioral
          skills and mindsets</div>
          <div className="w-[25%]">
          <img
          src={genth}
          alt="generation thailand logo"
          width="100px"
          height="50px"
          className="rounded-lg"
        /></div>
        </div>
    </div>
  );
};

const Silpakorn = () => {
  return (
    <div className="flex justify-end mr-44">
    <div
      data-aos="fade-up-left"
      data-aos-duration="3000"
      className=" w-[35%] rounded-lg p-8 bg-[#F5DEB3]	flex items-center">
      <div className="flex">
      <div className="w-[100%]">
      Silpakorn University
      <div className="italic"> 2016 - 2019</div>
      Bachelor of Arts, Faculty of Archeology in Thai major
      (Second - Class honors)
      </div>
      <div className="w-[45%]">
          <img
          src={silpakorn}
          alt="generation thailand logo"
          width="100px"
          height="50px"
          className="rounded-lg"
        /></div>
      </div>
    </div>
    </div>
  );
};

// const Bp = () => {
//   return (
//     <div className="flex justify-start ml-40">
//     <div
//       data-aos="fade-up-right"
//       data-aos-duration="4000"
//       className=" w-[30%] rounded-lg p-8 bg-[#F5DEB3] flex justify-center items-center"
//     >
//       <div className="w-[100%]">
//       Buriram Phittayakhom School
//       <div className="italic"> 2012 - 2014 </div>
//       Mathematics-Science program 
//     </div>
//     </div></div>
//   );
// };


AOS.init();
export default About;
