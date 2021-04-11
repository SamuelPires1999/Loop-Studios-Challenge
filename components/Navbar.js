import { useState } from "react"

export default function Navbar(){
    const [open, setOpen] = useState(false)


    return(
        <div className="flex bg-black-custom p-10 md:p-0 md:bg-transparent flex-col md:flex-row text-white-custom  md:py-16 font-alata">
            <div className="flex justify-between sm:w-full md:w-auto flex-1">
                <img src="/images/logo.svg" className="w-min h-auto"/>
                {
                  open ? (<img src="/images/icon-close.svg" className="w-[24px] h-[20px] md:hidden sm:block " onClick={()=> setOpen(!open)}/>)
                  : <img src="/images/icon-hamburger.svg" className="w-[24px] h-[20px] md:hidden sm:block " onClick={()=> setOpen(!open)}/>
                }
            </div>  
            <div className={`${open ? "flex" : "hidden"} space-y-4 md:flex mt-6 md:mt-0 md:space-x-6 md:space-y-0 flex-col md:flex-row`}>
                <span>About</span>
                <span>Careers</span>
                <span>Events</span>
                <span>Products</span>
                <span>Support</span>
            </div>          
        </div>
    )
}