import { useState } from "react";
export default function ThemeToggle(){
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
}