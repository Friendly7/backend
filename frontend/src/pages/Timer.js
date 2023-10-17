import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(60);
    const [isRunning] = useState(true);

    useEffect(() => {
        if(isRunning == true){
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                else if(seconds <=0) {
                    setSeconds(60)
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [seconds]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            {/*<p>{formatTime(seconds)}</p>*/}
            <p>{seconds}초</p>}
        </div>
    );
}

export default Timer;
