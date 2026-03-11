import { useContext, useEffect } from "react"
import Activities from "../Activities/Activities"
import Best from "../Best_Trips/Best"
import BookNow from "../BookNow/BookNow"
import DestinationCarousel from "../DestinationCarousel/DestinationCarousel"
import FAQS from "../FAQS/FAQS"
import Hero from "../Hero/Hero"
import Social from "../SocialProof/Social"
import Urgency from "../Urgency/Urgency"
import { LangContext } from "../../Context/LangContext"
import { useLocation } from "react-router-dom"
import WhatsAppBtn from "../WhatsAppBtn/WhatsAppBtn"
import ScrollTopBtn from "../ScrollTopBtn/ScrollTopBtn"

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div className="">
            <Hero />
            <Social />
            <Activities />
            <Best />
            <Urgency />
            {/* <BookNow /> */}
            <FAQS />
            <WhatsAppBtn />
            <ScrollTopBtn />
            {/* <DestinationCarousel /> */}
            {/* <Offers /> */}
            {/* <Features /> */}
        </div>
    )
}

export default Home