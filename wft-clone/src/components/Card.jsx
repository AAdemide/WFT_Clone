export default function Card (props){
  
    return(
        <div className="mt-5 w-[680px] mx-auto px-4 pt-6 rounded shadow-md bg-[#575757] shadow-neutral-800/70">
            <section className="border-b-4 border-grey-200 flex items-baseline justify-between">
                <h3 className="pb-2 border-b-4 border-pink-300 text-3xl relative top-1">{props.header}</h3>
            {props.viewLink ? <span className="text-xl text-pink-300">View</span> : ""}
            </section>
            <section className="flex pt-5">
                {props.child}
            </section>
            
        </div>
    )
}
