export default function AboutCard({heading,parah}){
    return(
    <div className="p-4  border-[#8b5cfa]/25  border-2  w-148 rounded-xl">
        <h1 className="text-[#e2e2f0]">{heading}</h1>
        <p className="text-[#9ca3af]">{parah}</p>
    </div>
    )
}