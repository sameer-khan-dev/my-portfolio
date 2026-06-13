export default function ProjectCard({technologies,idx, github, liveDemo,title,ProjectName,description}){
    return (
        <div className="flex flex-col gap-2  justify-center px-6 py-4 rounded-xl   border-[#8b5cfa]/25 w-[100%] border-2 bg-violet-500/10 max-sm:mt-4 max-sm:py-4">
            <h1 className="text-xs bg-purple-500/15 border-2 border-[#8b5cf64d] w-30  text-center rounded-2xl text-[#c4b5fd] pb-1">{title}</h1>
            <h2 className="text-white">{ProjectName}</h2>
            <p className="text-xs text-[#9ca3af]">{description}</p>
            <div className="flex gap-4">
                {technologies.map((technology)=>{
                return <h3 key={technology} className="text-xs bg-purple-500/15 w-20 text-center rounded-xl border-2 border-[#8b5cf64d] h-6 text-[#a78bfa]">{technology}</h3>
                })}
            </div>
            <div className="flex gap-4">
                <a href={github} className="text-sm h-7 w-19 text-center bg-purple-500/15 border-2 border-[#8b5cf64d] text-[#c4b5fd] rounded-xl">GitHub</a>
                <a href={liveDemo} className="text-sm h-7 w-25 text-center bg-purple-500/15 border-2 border-[#8b5cf64d] text-[#c4b5fd] rounded-xl">Live Demo</a>
            </div>
        </div>
    )
}