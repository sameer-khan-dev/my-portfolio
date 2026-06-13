import { useState } from "react"

export function HomeBar(){
    let [isVisible,setIsVisible]=useState(true);
    let updateVisibility=()=>{
        setIsVisible(!isVisible);
    }
    if(isVisible){
    return(
        <div className="absolute  right-0 top-0 flex flex-col text-lg rounded gap-8 text-[#c4b5fd] bg-white w-40 h-70 justify-center items-center ">
            <span className="h-0" onClick={updateVisibility}><i className="fa-solid fa-xmark relative right-14 bottom-2"></i></span>
            <a href='#about' className="">About</a>
            <a href='#skills' className="">Skills</a>
            <a href='#projects' className="">Projects</a>
            <a href='#contact' className="">Contact</a>
        </div>
    )
}else{
    return null;
}}