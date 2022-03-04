import React, {useState, useEffect, useRef} from 'react'

function Pomodoro() {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const shouldStart = useRef(false);


    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    
    useEffect(() => {
        if (shouldStart.current) {
            let interval = setInterval(() => {
                clearInterval(interval);
                if (seconds === 0) {
                    if (minutes === 0) {
                        setMinutes(displayMessage ? 25 : 5);
                        setSeconds(0);
                        setDisplayMessage(!displayMessage);
                    } else {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
    }, [seconds]);

    function triggerCountdown() {
        shouldStart.current = true;
        setMinutes(minutes - 1);
        setSeconds(59);
    }

    function resetCountdown() {
        shouldStart.current = false;
        setMinutes(25);
        setSeconds(0);
    }
  return (
    <div className='pomodoro'>
        <div className='message'>
            {displayMessage && <div>Take a break! New session starts in:</div>}
        </div>
        <div className='timer'>
            <button id='start-button' onClick={triggerCountdown}>Start</button>
            {displayMinutes}:{displaySeconds}
            <button id='reset-button' onClick={resetCountdown}>Reset</button>
        </div>

    </div>
  )
}


export default Pomodoro