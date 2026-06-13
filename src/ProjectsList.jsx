import ProjectCard from "./ProjectCard"
export default function ProjectsList(){
    return (
        <div className="sm:flex gap-4">
            <ProjectCard technologies={["React","Tailwind"]} idx={0} github="#" liveDemo="#" title={"Personal Project"}
            ProjectName={"Portfolio Website"}
            description={"A clean, responsive personal portfolio built from scratch to showcase my skills and work."}/>
            <ProjectCard technologies={["HTML","CSS"]} idx={1} github={"https://github.com/sameer-khan-dev/my-amazon-clone"}
            liveDemo={"https://sameer-khan-dev.github.io/my-amazon-clone/"} title={"Guided Project"}
            ProjectName={"E-Commerce UI Clone"}
            description={"A pixel-perfect Amazon homepage clone built from scratch, showcasing advanced HTML structure and CSS styling skills."}/>
        </div>
    )
}