import { useState } from "react"
import myResume from "./assets/Sameer_Khan_Frontend_Developer_Resume.pdf"

export function HomeBar({changer}){
    let [isVisible,setIsVisible]=useState(true);
    let updateVisibility=()=>{
        setIsVisible(!isVisible);
        changer();
    }
    if(isVisible){
    return(
        <div className="absolute  right-0 top-0 flex flex-col text-lg rounded gap-5 text-[#7c3aed] bg-[#0d0d0d]/95 w-40 h-70 justify-center items-center ">
            <span className="h-0" onClick={updateVisibility}><i className="fa-solid fa-xmark relative right-14 bottom-2"></i></span>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
            <a href={myResume} download >
            <i class="fa-solid fa-download"></i> Resume
            </a>
        </div>
    )
}else{
    return null;
}}