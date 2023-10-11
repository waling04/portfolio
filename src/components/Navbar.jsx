import React from "react"
const Navbar = () => {
    return (
        <div className="text-xs">
            {/* desktop  */}
         <ul className="hidden fixed bg-black text-orange-50 h-screen md:flex flex-col justify-center w-[5%]
        items-center font-fontTwo">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        
            {/* mobile  */}
        <ul className="md:hidden fixed bg-black text-orange-50 w-screen h-[10%] flex justify-center
        items-center font-fontTwo text-[18px]">
            <li><a href='#home' className="mr-12">Home</a></li>
            <li><a href='#about' className="mr-12">About</a></li>
            <li><a href='#project' className="mr-12">Project</a></li>
            <li><a href='#contact' className="">Contact</a></li>
        </ul>
        </div>
    )
}

export default Navbar

