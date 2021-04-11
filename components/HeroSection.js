import Navbar from "./Navbar";

export default function HeroSection() {
    return(
        <div className="bg-hero-image w-screen h-screen  bg-left md:bg-cover text-white-custom md:px-36">
            <Navbar/>
            <div className="md:flex md:flex-grow items-center px-6 md:px-0 max-w-full">
                <div className="border-white border-2 border-solid px-8 py-8 max-w-2xl tracking-wider mt-20 sm:w-full">
                    <span className="text-white-custom font-alata text-4xl md:text-7xl">
                        IMERSIVE EXPERIENCES THAT DELIVER
                    </span>
                </div>
            </div>

        </div>
    )
}