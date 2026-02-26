import Activities from "../Activities/Activities"
import Best from "../Best_Trips/Best"
import BookNow from "../BookNow/BookNow"
import DestinationCarousel from "../DestinationCarousel/DestinationCarousel"
import FAQS from "../FAQS/FAQS"
import Hero from "../Hero/Hero"
import Social from "../SocialProof/Social"
import Urgency from "../Urgency/Urgency"

function Home() {
    return (
        <div className="">
            <Hero />
            <Social />
            <Activities />
            <Best />
            <Urgency />
            <BookNow />
            <FAQS />
            <DestinationCarousel />
            {/* <Offers /> */}
            {/* <Features /> */}
        </div>
    )
}

export default Home