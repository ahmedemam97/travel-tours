import React, { useEffect, useState } from 'react'
import MainBtn from '../MainBtn/MainBtn';

function Urgency() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 14,
        seconds: 33,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <section className="urgency-section">
            <div className="urgency-overlay container">
                <div className="urgency-card">
                    <span className="badge">🔥 Limited Time Offer</span>

                    <h2>Explore Bali With 30% Discount</h2>

                    <div className="countdown">
                        <div className="time-box">
                            <h3>{timeLeft.hours.toString().padStart(2, "0")}</h3>
                            <span>Hours</span>
                        </div>
                        <div className="time-box">
                            <h3>{timeLeft.minutes.toString().padStart(2, "0")}</h3>
                            <span>Minutes</span>
                        </div>
                        <div className="time-box">
                            <h3>{timeLeft.seconds.toString().padStart(2, "0")}</h3>
                            <span>Seconds</span>
                        </div>
                    </div>

                    <p className="scarcity-text">
                        Only <strong>4 seats</strong> left at this price
                    </p>

                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>

                    <MainBtn text="Secure My Seat Now" color="lightColor" />
                </div>
            </div>
        </section>
    )
}

export default Urgency