import myResume from "./assets/Sameer_Khan_Frontend_Developer_Resume.pdf"
import { HomeBar } from './HomeBar';
import { useState } from 'react';
function Navbar(){
    let [isBar,setIsBar]=useState(false);
    let activeBar=()=>{
        setIsBar(!isBar);
    }
    return(
        <div className="border-b-1 border-violet-500/18 flex justify-between items-center h-16 pr-6 pl-6 bg-[#0d0d0d]">
        <div className="text-[#a78bfa]">SK</div>
        <div className="flex text-sm gap-8 text-[#c4b5fd]">
            <a href='#about' className="max-sm:hidden">About</a>
            <a href='#skills' className="max-sm:hidden">Skills</a>
            <a href='#projects' className="max-sm:hidden">Projects</a>
            <a href='#contact' className="max-sm:hidden">Contact</a>
        </div>
        <a href={myResume} download className="max-sm:hidden bg-[#7C3AED] h-8  w-32 flex  justify-center items-center text-[#FFFFFF] rounded-lg text-sm">
            <i class="fa-solid fa-download"></i> Resume
        </a>
        <span className='sm:hidden text-xl  text-[#a78bfa]'>
        <i className="fa-solid fa-bars relative" onClick={activeBar}></i>
         {isBar?<div><HomeBar changer={activeBar}/></div>:null}
        </span>
        </div>
    );
}
export default Navbar;