import { useState } from "react";

const Die = (props) =>{

const styles = {
backgroundColor:props.die.isHeld ? '#59E391':'#fff'
}



const onClickHandler = (id) =>{
    props.hold(id);

    console.log(props.die.isHeld)
}


    return(
 
        <button style={styles}  onClick={()=>onClickHandler(props.die.id)} className="die">{props.die.value}</button>
      
    )
}

export default Die;