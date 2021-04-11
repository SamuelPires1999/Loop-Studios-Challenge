export default function Footer() {
    return(
        <div className="py-16 bg-black-custom text-white-custom mt-16 flex justify-center flex-col md:flex-row  md:justify-between md:px-44">
            <div className="flex flex-col gap-10 md:w-1/2 md:justify-center">
                <div className="flex justify-center md:justify-start">
                    <img src="/images/logo.svg" className="w-min h-auto"/>
                </div>
                <div className={`flex items-center font-alata text-lg space-y-4 md:flex my-12 md:my-0  md:space-x-6 md:space-y-0 flex-col md:flex-row`}>
                    <span>About</span>
                    <span>Careers</span>
                    <span>Events</span>
                    <span>Products</span>
                    <span>Support</span>
                </div>
            </div>
            <div className="flex flex-col gap-10 md:w-1/2">
                <div className="flex justify-center gap-8 mb-10 md:mb-0 md:justify-end">
                    <img src="/images/icon-facebook.svg"/>
                    <img src="/images/icon-instagram.svg"/>
                    <img src="/images/icon-twitter.svg"/>
                </div>
                <div className="flex justify-center md:justify-end">
                    <span className="text-dark-gray font-alata">
                        © 2021 Loopstudios. All rights reserved. 
                    </span>
                </div>
            </div>
        </div>
    )
}