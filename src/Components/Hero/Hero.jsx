import { useContext } from "react";
import MainBtn from "../MainBtn/MainBtn"
import { LangContext } from "../../Context/LangContext";
function goToTripsSection() {
    document
        .getElementById("offers_cards")
        .scrollIntoView({ behavior: "smooth" });
}
function Hero() {
    const { translations } = useContext(LangContext)

    return (
        <div>
            <div className='hero_parent container'>
                <div className='hero'>
                    <div className="hero-text">
                        <h2>{translations.hero_header}</h2>
                        <p>{translations.hero_text}</p>

                        <div className="search-btn-wrapper">
                            <MainBtn
                                text={translations.Discover_Trips}
                                color="greenColor"
                                tripData={goToTripsSection}
                            />

                            <span className="scroll-arrow">
                                ↓
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero