import SkillsCard from "./SkillsCard";

export default function SkillsList(){
    return(
        <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4 max-sm:gap-3">
            <SkillsCard skill="HTML5" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[60%] h-[100%]  bg-[#8b5cf6]"/>
            <SkillsCard skill="CSS" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[90%] h-[100%]  bg-[#8b5cf6]"/>
            <SkillsCard skill="JS" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[70%] h-[100%]  bg-[#8b5cf6]"/>
            <SkillsCard skill="React" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[90%] h-[100%]  bg-[#8b5cf6]"/>
            <SkillsCard skill="Tailwind" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[75%] h-[100%]  bg-[#8b5cf6]"/>
            <SkillsCard skill="Git & GitHub" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[40%] h-[100%]  bg-[#8b5cf6]"/>
            <SkillsCard skill="Responsive Design" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[50%] h-[100%]  bg-[#8b5cf6]"/>
            <SkillsCard skill="Flexbox & Grid" styles="w-[95%] rounded-sm h-2 border-black border-1 bg-[#8b5cf626]" expertise="rounded-sm w-[70%] h-[100%]  bg-[#8b5cf6]"/>
        </div>
    )
}