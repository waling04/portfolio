import React from 'react'
import firstproject from '../assets/firstproject.mp4';

const Project = () => {
  return (
      <div id='project' className='w-screen h-full mt-32 font-fontTwo'>
      <div className="flex justify-center ">
          <div className="font-bold text-center text-4xl ">Education</div>
        </div>
        <div className='flex justify-center items-center'>
        <FirstProject />
        <SecondProject /></div>
      </div>
    
  )
}

function FirstProject() {
  const [showProject, setShowProject] = React.useState(false);
  return (
    <>
      <button
        className="bg-black text-[#F5DEB3] active:bg-black font-fontTwo uppercase  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowProject(true)}
      >
        ETCH-A-SKETCH Project
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
                  Etch A Sketch is a JavaScript project where clicking on any position within a grid creates colors, 
                  and only straight lines can be drawn. You can also erase the drawing by shaking the "erase" 
                  and then clicking again on the same spot.
                  </p>
                  <div className='flex justify-center items-center'>
                    <a href="https://waling04.github.io/etch-a-sketch/" target="_blank"  className='mr-4'>Link to Project</a>
                  <a href="https://github.com/waling04/etch-a-sketch" target="_blank" className='mr-4' >Link to GitHub</a>
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
        className="bg-black text-[#F5DEB3] active:bg-black font-fontTwo uppercase  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowProject(true)}
      >
        Second Project
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
                    Second Project
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
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    This project is about bla bla blah.
                  </p>
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