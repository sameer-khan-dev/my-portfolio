export default function Info({title,description}){
    return(
         <div>
         <h2 className="text-[#a78bfa] max-sm:text-xl text-2xl">{title}</h2>
         <p className="text-[#6b7280] text-xs">{description}</p>
         </div>
    )
}