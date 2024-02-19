//https://www.youtube.com/watch?v=S-T9XoCMwt4
export default function ToggleMenu(props){
    return(
        <div className="flex size-full">
            <div className="h-full w-80 pt-7 bg-green-500">
            
            
            </div>
            <div className="flex-1">
                {props.children}
            </div>
        
        </div>
        
    )
}