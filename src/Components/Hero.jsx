import React from 'react'
import Timer from './Timer'
import kbc from '../kbc.jpg';
import Score from './Score';

const Hero = ({question, setTimer,number }) => {
    return (
        <div style={{ height: "65vh"}}>
            <div className="container pt-3">
                <div className="row">
                    <div className='col-md-3 col-lg-3 heroDiv' style={{ justifyContent: "flex-start" }}>
                        <div className='py-5'>
                            <div className='p-1 timerOut'>
                                <div className='px-4 py-3 timer' style={{textAlign:"center"}}>
                                    <span style={{ textAlign: "center" }}>
                                        {<Timer
                                            setTimer={setTimer} question={question} />}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-5 col-lg-5 heroDiv'>
                        <img src={kbc} alt="" style={{ width: "560px", height: "360px" }} />
                    </div>
                    <div className='col-md-4 col-lg-4 heroDiv' style={{ justifyContent: "flex-end" }}>
                        <Score number={number} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
