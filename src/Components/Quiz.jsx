import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from "./play2.mp3";
import correct from './correct.mp3';
import wrong from './wrong.mp3';
import option from './KbcOption.mp3';
const Quiz = ({data,question,setTimer,setQuestion,setNumber,number,name,prizeMoney,submit}) => {
  const [selectedAnswer,setSelectedAnswer] = useState(null);
  const [className,setClassName] = useState(null);
  const questionNo = data[question-1];
  const [letsPlay] = useSound(play);
  const [correctPlay] = useSound(correct);
  const [wrongPlay] = useSound(wrong);
  const [optionPlay] = useSound(option);
  let item;
  const submitAnswer =(id)=>{
    optionPlay();
    item = questionNo.answers[id];
    setSelectedAnswer(item.option);
    setClassName(null);
    setTimeout(()=>{
      setClassName(item.isCorrect?'correctAnswer':'wrongAnswer')

    },1000)
    setTimeout(()=>{
      if(item.isCorrect){
        correctPlay();
        setTimeout(()=>{
          let plus =Math.floor(Math.random() * 10)+1;
          setQuestion((question+plus)%50);
          setNumber(number+1);
          setSelectedAnswer(null);
        },5000)
      }
      else{
        wrongPlay();
        submit(name,prizeMoney)
        setTimeout(()=>{
          setTimer(true);
        },5000)
      }
    },3000)
    if(question===data.length){
      setTimer(true);
    }
  }
  useEffect(()=>{
    letsPlay();
  },[letsPlay,question])
  return (
    <div style={{ minHeight: "35vh", maxWidth: "100vw" }}>
      <div className="row" >
        <div className='quizInnerDiv' style={{display:"flex"}}>
          <span className='hrDiv'>
            <hr className='line' style={{ height: "4px" }} />
          </span>
          <span className="col-md-12 py-2 px-3 mx-0 question" style={{alignSelf:"center"}}>
            {questionNo.question}
          </span>
          <span className='hrDiv'>
            <hr className='line' style={{ height: "4px" }} />
          </span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6 mb-2">
          <div className='quizInnerDiv'>
            <span className='hrDivOptions'>
              <hr className='line' style={{ height: "4px" }} />
            </span>
            <span className={`col-md-12 py-1 px-3 mx-0 options ${selectedAnswer===questionNo.answers[0].option?className:""}`} onClick={()=>!selectedAnswer && submitAnswer(0)}>
              {questionNo.answers[0].option}
            </span>
          </div>
        </div>
        <div className="col-md-6 mx-0 mb-2">
          <div className='quizInnerDiv'>
            <span className={`col-md-12 py-1 px-3 mx-0 options ${selectedAnswer===questionNo.answers[1].option?className:""}`} onClick={()=>!selectedAnswer && submitAnswer(1)}>
            {questionNo.answers[1].option}
            </span>
            <span className='hrDivOptions'>
              <hr className='line' style={{ height: "4px" }} />
            </span>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className='quizInnerDiv'>
            <span className='hrDivOptions'>
              <hr className='line' style={{ height: "4px" }} />
            </span>
            <span className={`col-md-12 py-1 px-3 mx-0 options ${selectedAnswer===questionNo.answers[2].option?className:""}`} onClick={()=>!selectedAnswer && submitAnswer(2)}>
            {questionNo.answers[2].option}
            </span>
          </div>
        </div>
        <div className="col-md-6 mx-0 mb-2">
          <div className='quizInnerDiv'>
            <span className={`col-md-12 py-1 px-3 mx-0 options ${selectedAnswer===questionNo.answers[3].option?className:""}`} onClick={()=>!selectedAnswer && submitAnswer(3)}>
            {questionNo.answers[3].option}
            </span>
            <span className='hrDivOptions'>
              <hr className='line' style={{ height: "4px" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
