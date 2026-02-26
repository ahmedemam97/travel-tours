import MainBtn from "../MainBtn/MainBtn"
function goToTripsSection() {
    document
        .getElementById("offers_cards")
        .scrollIntoView({ behavior: "smooth" });
}
function Hero() {

    return (
        <div>
            <div className='hero_parent container'>
                <div className='hero'>
                    <div className="hero-text">
                        <h2>TripZone For Trips</h2>
                        <p>Find what's make you happy anytime, anywhere</p>

                        <div className="search-btn-wrapper">
                            <MainBtn
                                text="Search For Trips"
                                color="lightColor"
                                tripData={goToTripsSection}
                            />

                            <span className="scroll-arrow">
                                ↓
                            </span>
                        </div>
                    </div>

                    {/* <div className="hero-search">
                        <div className="where">
                            <FontAwesomeIcon icon={faLocationDot} size="lg" />
                            <div className='text'>
                                <span>Where to?</span>
                                <p className='search'>Search a place or actitivity</p>
                            </div>
                        </div>

                        <div className="when">
                            <FontAwesomeIcon icon={faCalendar} />
                            <div>
                                <span>When?</span>
                                <input type="text" placeholder='Select Dates' />
                                <Calendar />
                            </div>

                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default Hero