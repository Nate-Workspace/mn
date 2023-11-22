import React from "react";
import ReactDOM  from "react-dom";

export function BoxesProp(props){
    
    const Styles={
        backgroundColor : props.on ? '#cccccc' : "transparent" 
    }
    return (
        <>
            <div className="Boxes_div" 
                onClick={()=>props.toggle(props.id)}
                style={Styles}>
                    <h3>{props.random}</h3>
            </div>
        </>
    )
}