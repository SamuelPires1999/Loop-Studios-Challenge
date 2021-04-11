import Card from "./Card";

const cards = [
    {id: 1, bg:"bg-deep-earth", smallBg:"bg-deep-earth-small",text:"Deep Earth"},
    {id: 2, bg:"bg-night-arcade",smallBg:"bg-night-arcade-small",text:"Night Arcade"},
    {id: 3, bg:"bg-soccer-team",smallBg:"bg-soccer-team-small",text:"Team Soccer VR"},
    {id: 4, bg:"bg-grid",smallBg:"bg-grid-small",text:"The Grid"},
    {id: 5, bg:"bg-from-above",smallBg:"bg-from-above-small",text:"From Up Above VR"},
    {id: 6, bg:"bg-pocket-borealis",smallBg:"bg-pocket-borealis-small",text:"Pocket Borealis"},
    {id: 7, bg:"bg-curiosity",smallBg:"bg-curiosity-small",text:"The Curiosity"},
    {id: 8, bg:"bg-fisheye",smallBg:"bg-fisheye-small",text:"Make it Fisheye"}
]

export default function CreationsSection(){
    return(
        <div className="w-screen h-auto md:px-36">
            <div className="flex justify-center sm:justify-between font-josefin my-4 sm:my-16">
                <h1 className="text-3xl md:text-5xl text-center">OUR CREATIONS</h1>
                <button className="border-solid border-black-custom border-1 tracking-widest px-10 hidden md:block">
                    <span className="font-josefin text-sm font-bold">SEE ALL</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 sm:p-0">
                {
                    cards.map((card)=>(
                        <Card key={card.id} bgName={card.bg} smallBgName={card.smallBg} text={card.text}/>
                    ))
                }
            </div>
        </div>
    )
}