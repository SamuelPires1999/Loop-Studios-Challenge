export default function InteractiveSection() {
    return(
        <div className="flex flex-col bg-white-custom w-screen h-screen   md:px-36 font-alata relative pt-32">
            <img src="/images/image-interactive.jpg" className="w-[731px] h-[500px] z-0 px-6 md:px-0"/>
            <div className="flex flex-col p-10 md:p-24 max-w-xl space-y-4 bg-white-custom relative md:absolute md:right-0 transform md:translate-x-[-250px] md:bottom-0">
                <h1 className="text-2xl md:text-5xl font-josefin text-center md:text-left">THE LEADER IN INTERACTIVE VR</h1>
                <p className="text-sm text-very-dark-gray text-center md:text-left">
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. 
                </p>
            </div>
        </div>
    )
}