export default function Card({bgName, text, smallBgName}){
    return(
        <div className={`relative w-full h-[180px] sm:h-[550px] shadow-lg bg-cover ${bgName}`}>
            <div className="absolute p-10 bottom-0 w-full flex justify-start bg-gradient-to-t from-black to-transparent">
                <a href="#" className="text-3xl sm:text-4xl uppercase font-josefin text-white-custom hover:underline">
                    {text}
                </a>
            </div>
        </div>  
    )
}