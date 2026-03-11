import React, { useContext, useEffect, useState } from 'react'
import MainBtn from '../MainBtn/MainBtn';
import { LangContext } from '../../Context/LangContext';

function Urgency() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 14,
        seconds: 33,
    });

    const { translations } = useContext(LangContext)

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
        <section className="urgency-section" id='newOffer'>
            <div className="header">
                <h2>{translations.urgency}</h2>
            </div>
            <div className="urgency-overlay container">
                <div className="urgency-card">
                    <span className="badge">🔥 {translations.limitedTimeOffer}</span>

                    <h2>{translations.exploreBaliDiscount}</h2>

                    <div className="countdown">
                        <div className="time-box">
                            <h3>{timeLeft.hours.toString().padStart(2, "0")}</h3>
                            <span>{translations.hours}</span>
                        </div>
                        <div className="time-box">
                            <h3>{timeLeft.minutes.toString().padStart(2, "0")}</h3>
                            <span>{translations.minutes}</span>
                        </div>
                        <div className="time-box">
                            <h3>{timeLeft.seconds.toString().padStart(2, "0")}</h3>
                            <span>{translations.seconds}</span>
                        </div>
                    </div>

                    <p className="scarcity-text">
                        {translations.only} <strong>{translations.fourSeats}</strong> left at this price
                    </p>

                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>

                    <MainBtn text={translations.secureMySeat} color="lightColor" />
                </div>
            </div>
        </section>
    )
}

export default Urgency