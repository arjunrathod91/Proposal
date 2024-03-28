// import React from 'react'
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Page2(){
    const [PositionX,setPositionX] = useState(47)
    const [PositionY,setPositionY] = useState(62)
    const [teasing,setTeasing] = useState(false)
    const tease=()=>{
        setTeasing(true)
        setPositionX(parseInt(Math.random() * 50))
        setPositionY(parseInt(Math.random() * 50))
        console.log(PositionX,PositionY)
    }
    return(
        <div>
            <div className="container">
                <div className="gifbox">
                <img src={'./IMG/please.gif'} />
                </div>
                <div className="childcont">
                <h3>Dekh Sochle Ek Aur Baar 😏 </h3>
                <p className="para" style={{display:teasing ? 'flex' : 'none'}}>-Itni Jaldi Bhi kya hain. </p>
                <div className="buttons">
                    <Link to="/page5"><button className="">Thik Hain </button></Link>
                    <button onClick={tease} className={teasing ? 'tease' : ''} style={{top:`${PositionY}%`,left:`${PositionX}%`}}>No</button>
                </div>
                </div>
            </div>
        </div>
    )

}
export default Page2;