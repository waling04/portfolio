import { useState } from "react";
import React from "react";
import "./App.css";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#FAEBD7]">
        <div id="home" className=" w-screen h-screen flex">
          <div className="w-[96%]">
            <div className="flex justify-center items-center mt-32">
              <h1 className="font-fontOne text-9xl">
                HELLO,
                <br />
                I am
                <br />
                THANWARAT
              </h1>
            </div>
            <div className="flex justify-end w-[80%] font-fontTwo text-4xl mt-4">
              <h2>A FRONTEND DEVELOPER</h2>
            </div>
          </div>
        </div>
        <About />
        <Project />
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
