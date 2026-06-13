import SkillsList from "./SkillsList";

export default function Skills(){
    return(
        <section id="skills" className="border-t-1 border-violet-500/18 p-8 bg-[#0a0a0f]">
            <h1 className="text-xs pb-1 text-[#8b5cf6]">02-SKILLS</h1>
            <h2 className="pb-5 text-[#e2e2f0]">Technologies I work with</h2>
            <SkillsList/>
        </section>
    )
}