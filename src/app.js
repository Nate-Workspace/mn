import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { Header } from "./Header";
import Boxes from "./Boxes";
import { BoxesProp } from "./BoxesProp";


export function App(){

    //FOR THE BOXES
    //-----------------------



    function toggle(id){
        setBoxTruth(prevBoxTruth=>{
            return prevBoxTruth.map(each=>{
                return each.id===id ? {...each, on:!each.on} : each;
            })
        })
    }
    const [boxTruth, setBoxTruth]=React.useState(Boxes);
    const boxIterate=boxTruth.map(each=>{
        const randomNum=Math.floor(Math.random()*6 +1);
        return <BoxesProp 
                    id={each.id}   
                    on={each.on} 
                    random={randomNum} 
                    toggle={toggle}
                />
    });

    //FOR THE BUTTON
    //-------------------------------------

    const [Roller, setRoller]=React.useState('Roll');

    return(
        <main className="Parent">
            <Header/>
            <div className="Box_Package">
                {boxIterate}
            </div>
            <button>{Roller}</button>
        </main>
    );
}