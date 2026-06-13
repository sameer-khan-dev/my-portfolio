export default function SkillsCard({skill,styles,expertise}){
    return(
        <div className="max-sm:text-sm  px-6 pb-2 rounded-xl   border-[#8b5cfa]/25  border-2 ">
        <h1 className="text-[#c4b5fd] pb-1">{skill}</h1>
        <div className={styles}>
            <div className={expertise}></div>
        </div>

        </div>
    )
}