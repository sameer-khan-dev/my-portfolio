import myResume from "./assets/Sameer_Khan_Frontend_Developer_Resume.pdf";
export default function Links(){
    return (
        <div className="flex gap-4 pt-6 border-t-1 border-violet-500/18  mt-6">
            <p className="text-[#9ca3af] text-xs pt-2">Find me on</p>
            <a href="https://github.com/sameer-khan-dev" className="text-[#c4b5fd]  bg-purple-500/10 border-1 border-[#8b5cf64d] w-20 text-center rounded-xl text-xs h-8 pt-2">GitHub</a>
            <a href="https://www.linkedin.com/in/sameer-khan-858a3137a" className="text-[#c4b5fd] bg-purple-500/10 border-1 border-[#8b5cf64d] w-23 text-center rounded-xl text-xs h-8 pt-2">LinkedIn</a>
            <a href={myResume} target="_self" className="text-[#c4b5fd] bg-purple-500/10 border-1 border-[#8b5cf64d] w-22 text-center rounded-xl text-xs h-8 pt-2">Resume</a>
        </div>
    )
}