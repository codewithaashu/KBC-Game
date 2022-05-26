import React from 'react'
import prizeMoney from './prizeMoney'
const Score = ({number}) => {
  return (
    <div>
      <div className="container py-2 score" style={{textAlign:"center"}}>
          {
              prizeMoney.map((curElem)=>{
                  return(
             <li className={curElem.id===number?"active px-5":" "} style={{listStyle:"none"}} key={curElem.id}>
                {curElem.money}
            </li>
                  )
              })
          }
      </div>
    </div>
  )
}

export default Score