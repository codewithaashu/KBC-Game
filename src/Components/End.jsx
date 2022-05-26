import React from 'react'
const End = ({name,prizeMoney}) => {
  return (
    <div className='startDiv' style={{display:"flex",justifyContent:'center'}}>
      <div className='endInnerDiv p-5'>
        <div className='mb-3'>
          <h1 className='endHeading'>
          Congratulation {name}, You have earned {prizeMoney} Rupees ✌️
          </h1>
        </div>
          <a href='/' type="button" className="btn btn-primary py-2 px-3 endBtn" >Play Again</a>
      </div>
    </div>
  )
}

export default End