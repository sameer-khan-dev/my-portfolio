import AboutCard from "./AboutCard";

export default function About(){
    return(
        <>
        <section id='about' className="h-16 pl-7 pt-8  border-t-1 border-violet-500/18 bg-[#0a0a0f]">
        <h1 className="text-xs text-[#8b5cf6]">01-ABOUT</h1>
        <h2 className="text-[#e2e2f0]">A little about me</h2>
        </section>
        <div className="flex gap-6 p-6 flex-wrap bg-[#0a0a0f]">
        <AboutCard heading={"Who I am"} parah={"A passionate frontend developer from India, focused on building clean and accessible web interfaces using HTML, CSS & JavaScript."}/>
        <AboutCard heading={"What I'm seeking"} parah={"Looking for my first professional role where I can grow, contribute, and ship real-world products with a great team."}/>
        <AboutCard heading={"Education"} parah={"Pursuing a degree in Computer Science or related field. Self-learning through online courses, tutorials, and hands-on projects."}/>
        <AboutCard heading={"Interests"} parah={"UI/UX design, responsive layouts, open-source exploration, and growing into modern frameworks like React."}/>
        </div>
        </>
    )
}