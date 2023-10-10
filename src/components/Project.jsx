import React from 'react'
import firstproject from '../assets/firstproject.mp4';
import findyourhat from '../assets/findyourhat.mp4'
import calculator from '../assets/calculator.mp4'
import rockpaperscissors from '../assets/rockpaperscissors.mp4'

const Project = () => {
  return (
      <section id='project' className='h-[100%] mt-40 font-fontTwo'>
      <div className="font-bold text-4xl text-center">
          Project
        </div>
        <div className='flex flex-col items-center justify-center mt-12'>
          <div className=''>
            <FirstProject />
            <SecondProject />
          </div>
          <div> 
            <ThirdProject />
            <FourthProject />
          </div>
        </div>
      </section>
  )
}

function FirstProject() {
  const [showProject, setShowProject] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#F5DEB3] text-black active:bg-black font-fontTwo uppercase  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 
        ease-linear transition-all duration-150 w-[300px] h-[100px] mr-6 mb-6"
        type="button"
        onClick={() => setShowProject(true)}
      >
        Find Your Hat!
      </button>
      {showProject ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm  bg-white bg-opacity-30 backdrop-blur rounded-xl">
              {/*content*/}
              <div className="w-[100%]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl">
                  Find Your Hat
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowProject(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <video width="320" height="240" controls autoPlay>
  <source src={findyourhat} type="video/mp4" />
</video>
                  <p className="my-4 text-blueGray-500 leading-relaxed">
                  The "Find Your Hat" project is a JavaScript program that creates a simple game where a hat is hidden in a randomly generated field. 
                  Players can move around the field by selecting directions and try to locate the hidden hat.
                  </p>
                  <div className='flex justify-center items-center'>
                    <a href="https://replit.com/@waling04/52-find-your-hat" target="_blank"  className='mr-4 hover:text-white'>Link to Project</a>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowProject(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


function SecondProject() {
  const [showProject, setShowProject] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#F5DEB3] text-black active:bg-black font-fontTwo uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none 
        mr-1 mb-1 ease-linear transition-all duration-150 w-[300px] h-[100px] ml-6"
        type="button"
        onClick={() => setShowProject(true)}
      >
        Etch a Sketch!
      </button>
      {showProject ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm  bg-white bg-opacity-30 backdrop-blur rounded-xl">
              {/*content*/}
              <div className="">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl">
                    Etch a Sketch Project
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowProject(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                <video width="320" height="240" controls autoPlay>
  <source src={firstproject} type="video/mp4" />
</video></div>
                  <p className="my-4 text-blueGray-500 leading-relaxed">
                  The "Etch A Sketch" project is a JavaScript project where clicking on any position within a grid creates colors, 
                  and only straight lines can be drawn. You can also erase the drawing by shaking the "erase" 
                  and then clicking again on the same spot.
                  </p>
                  <div className='flex justify-center'>
                    <a href="https://waling04.github.io/etch-a-sketch/" target="_blank"  className='mr-4 hover:text-white'>Link to Project</a>
                  <a href="https://github.com/waling04/etch-a-sketch" target="_blank" className='mr-4 hover:text-white' >Link to GitHub</a>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowProject(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

function ThirdProject() {
  const [showProject, setShowProject] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#F5DEB3] text-black active:bg-black font-fontTwo uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none 
        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-[300px] h-[100px] mr-6 mt-6"
        type="button"
        onClick={() => setShowProject(true)}
      >
        Calculator!
      </button>
      {showProject ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm  bg-white bg-opacity-30 backdrop-blur rounded-xl">
              {/*content*/}
              <div className="">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl">
                    Calculator
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowProject(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                <video width="320" height="240" controls autoPlay>
  <source src={calculator} type="video/mp4" />
</video></div>
                  <p className="my-4 text-blueGray-500 leading-relaxed">
                  The "calculator" project created using JavaScript is a web-based application that allows users to perform mathematical calculations in their web browsers.
                  </p>
                  <div className='flex justify-center items-center'>
                    <a href="https://calculator-tawny-rho.vercel.app/" target="_blank"  className='mr-4 hover:text-white'>Link to Project</a>
                  <a href="https://github.com/waling04/calculator" target="_blank" className='mr-4 hover:text-white' >Link to GitHub</a>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowProject(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

function FourthProject() {
  const [showProject, setShowProject] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#F5DEB3] text-black active:bg-black font-fontTwo uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none 
        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-[300px] h-[100px] ml-6"
        type="button"
        onClick={() => setShowProject(true)}
      >
        Rock Paper Scissors!
      </button>
      {showProject ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm  bg-white bg-opacity-30 backdrop-blur rounded-xl">
              {/*content*/}
              <div className="">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl">
                  Rock Paper Scissors
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowProject(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                <video width="320" height="240" controls autoPlay>
  <source src={rockpaperscissors} type="video/mp4" />
</video></div>
                  <p className="my-4 text-blueGray-500 leading-relaxed">
                  A Rock-Paper-Scissors project created using JavaScript is a simple web application that allows users to play the classic hand game "Rock, Paper, Scissors" against the computer. 
                  </p>
                  <div className='flex justify-center items-center'>
                    <a href="https://rock-paper-scissors-npp9.vercel.app/" target="_blank"  className='mr-4 hover:text-white'>Link to Project</a>
                  <a href="https://github.com/waling04/Rock-Paper-Scissors#rock-paper-scissors" target="_blank" className='mr-4 hover:text-white' >Link to GitHub</a>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowProject(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Project