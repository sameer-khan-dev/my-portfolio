import ProjectsList from "./ProjectsList"
export default function Projects(){
    return(
        <section id="projects" className="border-t-1 border-violet-500/18 p-8 bg-[#0a0a0f]">
                    <h1 className="text-xs pb-1 text-[#8b5cf6]">03 — Projects</h1>
                    <h2 className="pb-1 sm:pb-4 text-[#e2e2f0]">Things I've built</h2>
                    <ProjectsList/>
        </section>
    )
}