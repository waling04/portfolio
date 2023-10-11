import { useState } from "react";
import React from "react";
import "./App.css";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* desktop */}
      <main className="hidden md:flex w-[100%] scroll-behavior:smooth;">
        <div className="bg-[#FAEBD7] w-[95%] h-full">
          <div id="home" className="flex">
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
          <About />
          <Project />
          <Contact />
        </div>
        <nav>
          <Navbar />
        </nav>
      </main>
      {/* mobile  */}
      <main className="md:hidden sm:block w-full flex scroll-behavior:smooth;">
        <nav>
          <Navbar />
        </nav>
        <div className="bg-[#FAEBD7] w-full h-full">
          <div id="home" className="mb-24 md:mb-0">
            <div className="w-[95%]">
              <div className="flex justify-center items-center mt-40">
                <div className="font-fontOne text-7xl text-center">
                  HELLO,
                  <br />
                  I am
                  <br />
                  <p className="text-6xl">THANWARAT</p>
                </div>
              </div>
              <div className="flex justify-end font-fontTwo text-sm mt-4 mr-4">
                <h2>A FRONTEND DEVELOPER</h2>
              </div>
            </div>
          </div>
          <About />
          <Project />
          <Contact />
        </div>
      </main>
      <footer className="bg-black text-[#FAEBD7] font-fontTwo text-center h-[30px]">
        Copyright © 2023 waling04
      </footer>
    </>
  );
}

export default App;
