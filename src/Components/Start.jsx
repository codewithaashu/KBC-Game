import React, { useRef } from 'react'
const Start = ({setName,setTimer}) => {
    const luckyName = useRef(null);
    const handleClick = ()=>{
        setTimer(false);
        setName(luckyName.current.value);
    }
  return (
    <div className='startDiv'>
      <div className='startInnerDiv'>
        <div>
          <input type="text" className='py-4 px-2 inputStyle' placeholder='Enter your name' ref={luckyName}  />
          </div>
          <button type="button" className="btn btn-primary mt-3 startBtn" onClick={handleClick} >Start</button>
      </div>
    </div>
  )
}

export default Start
