import { useState } from "react";

export default function Tester() {
    const [text, setText] = useState("LIGHT_MODE");
    const labelStyle = `
        w-[500px] h-[200px] inline-block rounded-full relative cursor-pointer top-10 left-5 bg-[#ebebeb] 
        after:content-[""] after:size-[180px] after:absolute after:top-[10px] after:left-[10px] 
        
        `;
    const beforeElement = (text=="LIGHT_MODE" ? ` before:content-["LIGHT_MODE"] `:` before:content-["DARK_MODE"] `)
    +
    `before:absolute before:top-[80px] before:left-[250px] before:text-2xl    
    `;
    const handleClick = () => {
        setText( text==="DARK_MODE" ? "LIGHT_MODE" : "DARK_MODE")
    }
    return(
       <div className="bg-slate-600 size-full">
            <div className="bg-slate-800 size-[550px] m-auto">
                <input type="checkbox" name="" id="darkmode-toggle" className="hidden" onClick={handleClick}/>
                <label htmlFor="darkmode-toggle" id="dt-label" className={labelStyle
                + beforeElement +" shadow-mybx "}></label>
            </div>
       </div>
    )
};

{/* <div className="select-none size-full bg-neutral-500 text-center pt-56">
<input type="checkbox" name="" id="darkmode-toggle" />
<label htmlFor="darkmode-toggle" className="w-[500px] h-[200px] m-auto bg-[#ebebeb] block rounded-full relative shadow-mybx cursor-pointer">
    <div  className="size-full rounded-full text-left">
        <span className="size-[200px] inline-block rounded-full text-center align-middle bg-pink-800 mHidden">
            <img
                className="bg-inherit size-3/4 mt-6 inline-block rounded-full"
                src="/sun-icon.svg"
                alt="" />
        </span>
        <span className="text-2xl ms-14">Light Mode</span>
    </div>
    
    <div className="size-full rounded-full text-right bg-slate-600 hidden">
        <span className="text-2xl me-14">Dark Mode</span>
        <span className="size-[200px] inline-block rounded-full text-center align-middle bg-white">
            <img
                className="bg-inherit size-3/4 mt-4 inline-block rounded-full"
                src="/moon-icon.svg"
                alt="" />
        </span>
        
    </div>
    
</label>

<blockquote class="pt-20 text-2xl font-semibold italic text-center text-slate-900">
    When you look
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
        <span class="relative text-white">annoyed</span>
    </span>
    all the time, people think that you're busy.
</blockquote>
</div> */}