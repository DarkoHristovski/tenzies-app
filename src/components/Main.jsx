
import Die from "./Die"
import { useState } from "react"
import {nanoid} from "nanoid";

function generateAllnewDice(){
  return new Array(10).fill(0)
  .map(()=> ({
     value: Math.ceil(Math.random() * 6),
     isHeld:false,
     id:nanoid(),
    }));
}

const Main = () =>{

  const [randomNumber, setRandomNumber]=useState(generateAllnewDice);


   


    const gameWon = randomNumber.every(x=>x.isHeld) &&
                    randomNumber.every(x=>x.value=== randomNumber[0].value);
    

    const hold = (id) =>{
      setRandomNumber(state => {
        return state.map(x=>{
          return x.id === id ?
          {...x, isHeld: !x.isHeld} : x;
        })
      })

    }

    
    const result = randomNumber.map((x)=><Die 
    key={x.id} 
    hold={hold} 
    die={x}/>);

    const handlerDies = () =>{
      if(!gameWon){
        setRandomNumber(oldDice => oldDice.map(x=>
          x.isHeld ? 
          x:
          {...x, value:Math.ceil(Math.random() * 6)}
        ));
      }else{
        setRandomNumber(generateAllnewDice());
      }
      
    }
   


    return (
        <div className="main">
            <div className="main-inner-section">
              <div className="text-section">
                <h2>Tenzies</h2>
             <p> Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
              </div>
            <div className="dies-container">   
              {result}
            </div>
            <div className="btn-section">
            <button onClick={handlerDies}>
            { gameWon ? 'Play Again' : 'Roll'}
              </button>
            </div>
        </div>
        </div>   
    )



}


export default Main