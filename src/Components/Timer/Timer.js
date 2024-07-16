import React, { useEffect, useState } from 'react';

function Timer(props) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const targetDate = "December 15, 2024 00:00:00";
        const target = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const distance = target - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds, distance };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.distance < 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (timeLeft.distance < 0) {
        return <div className="timer">EXPIRED</div>;
    }

    return (
        <div>
            <div className="home_product-sale-text">
                <div className="home_product-sale-hours">
                    <div className="Gtext">Flash Sales</div>
                    <div className="timer">
                        <div className="timer_start">
                            <p>Days</p>
                            <span>{String(timeLeft.days).padStart(2, '0')}</span>
                        </div>
                        <p>:</p>
                        <div className="timer_start">
                            <p>Hours</p>
                            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                        </div>
                        <p>:</p>
                        <div className="timer_start">
                            <p>Minutes</p>
                            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                        </div>
                        <p>:</p>
                        <div className="timer_start">
                            <p>Seconds</p>
                            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
