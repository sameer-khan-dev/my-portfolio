import Info from "./Info"
export default function InfoCard(){
    return(
        <div className="flex items-center gap-14 max-sm:gap-7 max-sm:pl-6 pl-8 h-20 b border-t-1 border-violet-500/18 bg-[#0a0a0f] ">
        <Info title="2" description="PROJECTS DONE"/>
        <Info title="3+" description="TECHNOLOGIES"/>
        <Info title="Fresher" description="OPEN TO WORK"/>
        </div>
    )
}