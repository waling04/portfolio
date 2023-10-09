import React from "react"
const Navbar = () => {
    return (
        //<div className="flex items-center w-[5%] h-screen fixed">
        <div className="text-xs">
        <ul className="fixed bg-black text-orange-50 h-screen flex flex-col justify-center w-[5%]
        items-center font-fontTwo ">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    )
}

export default Navbar

