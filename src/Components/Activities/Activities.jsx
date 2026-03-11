import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MainBtn from '../MainBtn/MainBtn';
import { useNavigate } from 'react-router-dom';
import img_1 from '../../Assets/menem-tours_imgs/trips/Rass-Mohammed.jpg'
import img_2 from '../../Assets/menem-tours_imgs/trips/Albatraa.jpg'
import img_3 from '../../Assets/menem-tours_imgs/trips/Safari.jpg'
import img_4 from '../../Assets/menem-tours_imgs/trips/Dolphins.jpg'
import img_5 from '../../Assets/menem-tours_imgs/trips/Boat.jpg'
import img_6 from '../../Assets/menem-tours_imgs/trips/Diving.jpg'
import { useContext } from 'react';
import { LangContext } from '../../Context/LangContext';
function Activities() {
    const navigate = useNavigate();
    const goToTrip = (offer) => navigate('/trip', { state: offer });
    const { translations } = useContext(LangContext)

    const trips = [
        {
            id: 1,
            imgSrc: img_1,
            title: 'Rass Mohammed',
            text: translations.redSeaColors,
            price: 500
        },
        {
            id: 2,
            imgSrc: img_2,
            title: 'Alpatraa',
            text: translations.walkThroughHistory,
            price: 600
        },
        {
            id: 3,
            imgSrc: img_3,
            title: translations.safariAdventure,
            text: translations.unleashExplorer,
            price: 350
        },
        {
            id: 4,
            imgSrc: img_4,
            title: translations.swimWithDolphins,
            text: translations.onceInALifetime,
            price: 950
        },
        {
            id: 5,
            imgSrc: img_5,
            title: translations.boatTours,
            text: translations.liveTheSea,
            price: 800
        },
        {
            id: 6,
            imgSrc: img_6,
            title: translations.diving,
            text: 'Not Everyone Dares to Go This Deep',
            price: 1000
        },
    ]

    return (
        <div className='container my-5 pt-5 offers_cards' id="offers_cards">
            <div className="header">
                <h2>{translations.Explore_Our_Trips}</h2>
            </div>
            <div className="parent_wrapper">
                <div className="parent">

                    {trips.map((trip) => (
                        <div key={trip.id} className=" activity_card p-0 ">
                            <div className="img_div">
                                <img src={trip.imgSrc} alt="Offer One" />
                            </div>

                            <div className="content ">
                                <div className="location">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p className='m-0 ps-2'>{trip.title}</p>
                                </div>
                                <h4 className='py-1 trip_text'>{trip.text}</h4>
                                <div className="rating">
                                    <div className="icons pe-2 py-1">
                                        {[...Array(4)].map((_, i) => (
                                            <FontAwesomeIcon icon={faStar} color='orange' key={i} />
                                        ))}
                                        <FontAwesomeIcon icon={faStarHalfStroke} color='orange' />
                                    </div>
                                    <span>(276 {translations.reviews})</span>
                                </div>

                                <p className='price'>{translations.price}: <span>{trip.price}</span></p>
                                <div className="button w-100 text-center">
                                    <MainBtn text={translations.bookNow} color="lightColor" tripData={() =>
                                        goToTrip({ title: trip.text, price: trip.price, img: trip.imgSrc })} />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}

export default Activities