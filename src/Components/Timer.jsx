import { useEffect, useState } from 'react'

const Timer = ({ setTimer, question,name,prizeMoney,submit }) => {
  const [timeout, setTimeOut] = useState(30);
  useEffect(() => {
    if (timeout === 0) {
      return setTimer(true);
    }
    const interval = setInterval(() => {
      setTimeOut((timeout) =>
        timeout - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeout, setTimer]);
  useEffect(() => {
    setTimeOut(30);
  }, [question]);
  return timeout;
}

export default Timer
