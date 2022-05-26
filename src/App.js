import React, { useState } from 'react'
import Hero from './Components/Hero'
import Quiz from './Components/Quiz'
import './App.css'
import data from "../src/Components/Question";
import money from './Components/prizeMoney';
import Start from './Components/Start';
import End from './Components/End';
const App = () => {
  let val =Math.floor(Math.random() * 51)+1;
  const [question, setQuestion] = useState(val);
  const [timer, setTimer] = useState(false);
  const [name, setName] = useState(null);
  const [number,setNumber] = useState(1);
  const submit=async(name,prizeMoney)=>{
    const res= await fetch('https://kbc-game-2609-default-rtdb.firebaseio.com/dataBase.json',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,prizeMoney
      })
    })
  }
  return (
    <>
      {
        !name ? (
          <Start
            setName={setName}
            setTimer={setTimer}
            submit ={submit}
          />
        ) : (
          <div className='mert' >
            {
              timer ? (
                <End
                name={name} prizeMoney={number===1 || number ===data.length?(number!==data.length?0:money[12-number].money):money[(12-number)+1].money} />
              ) :
                (
                  <>
                    <Hero
                      question={question}
                      setTimer={setTimer} number={number} name={name} prizeMoney={number===1 || number ===data.length?(number!==data.length?0:money[12-number].money):money[(12-number)+1].money} submit={submit} />
                    <Quiz
                      data={data}
                      question={question}
                      setTimer={setTimer} setQuestion={setQuestion} setNumber={setNumber} number={number} name={name} prizeMoney={number===1 || number ===data.length?(number!==data.length?0:money[12-number].money):money[(12-number)+1].money} submit={submit} />
                    </>
                )
}
            </div>
        )
      }
    </>
  )
}

export default App

// #020230
// rgba(29,15,82,1)