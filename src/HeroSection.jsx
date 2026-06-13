export default function HeroSection(){
    return(
        <div className="bg-[#0a0a0f] h-full px-4 pt-12">
         <h1 className="border-[#7c3aed] border-1 w-42 text-center rounded-xl h-5 text-xs pt-0.5 text-[#c4b5fd]">&bull; Available for opportunities</h1>
         <h2 className="text-4xl pt-4 text-[#f1f0ff]">Hi, I'm <span className="text-[#a78bfa]">Sameer Khan</span></h2>
         <h3 className="mt-2 text-[#9ca3af]">Frontend Developer · HTML · CSS · JavaScript</h3>
         <p className="pt-4 text-[#c4b5fd]">I build clean, responsive, and user-focused web interfaces. Passionate about crafting pixel-perfect experiences that work beautifully across all devices.</p>
         <div className="flex gap-4 max-sm:flex-col">
         <a href="#projects" className="flex items-center justify-center mt-4 bg-[#7c3aed] text-[#fff] h-8 w-30 max-sm:w-[100%] w-30 rounded-xl">View Projects</a>
         <a href="#contact" className="flex items-center justify-center mt-4 mb-8 max-sm:mb-6 max-sm:mt-0 rounded-xl h-8 w-28 max-sm:w-[100%] w-26 border-1 text-[#c4b5fd] border-[#7c3aed]">Contact Me</a>
         </div>
        </div>
    );
}