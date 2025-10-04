import { use } from "react"
import Die from "./Die"
import { useState } from "react"



const Main = () =>{
    

    return (
        <div className="main">
            <div className="main-inner-section">
            <div className="dies-container">   
                <Die value={1}/>
                <Die value={2}/>
                <Die value={3}/>
                <Die value={4}/>
                <Die value={5}/>
                <Die value={6}/>
                <Die value={1}/>
                <Die value={2}/>
                <Die value={3}/>
                <Die value={4}/>
            </div>
        </div>
        </div>   
    )



}


export default Main