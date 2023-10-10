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
    <main className="w-[100%] flex scroll-behavior:smooth;"> 
      <div className="bg-[#FAEBD7] w-[95%] h-[100%]">
        <div id="home" className="h-screen flex">
          <div className="w-[95%]">
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
        <About/>
        <Project />
        <Contact />
      </div>
      <nav><Navbar/></nav>
    </main>
    <footer className="bg-black text-[#FAEBD7] font-fontTwo text-center h-[30px]"> Copyright © 2023 waling04</footer>
    </>
  );
}

export default App;
