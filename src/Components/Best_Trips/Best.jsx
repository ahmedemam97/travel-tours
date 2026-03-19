import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MainBtn from '../MainBtn/MainBtn';
import { useNavigate } from 'react-router-dom';
import img_1 from '../../Assets/menem-tours_imgs/trips/Rass-Mohammed.jpg'
import img_2 from '../../Assets/menem-tours_imgs/trips/Albatraa.jpg'
import img_3 from '../../Assets/menem-tours_imgs/trips/Safari.jpg'
import { useContext, useEffect } from 'react';
import { LangContext } from '../../Context/LangContext';
import { TripContext } from '../../Context/Trips/TripContext';

function Best() {
    const navigate = useNavigate();
    const { translations } = useContext(LangContext)
    const { Trips } = useContext(TripContext)

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
            price: 600,
            class: "newOffer"
        },
        {
            id: 3,
            imgSrc: img_3,
            title: translations.safariAdventure,
            text: translations.unleashExplorer,
            price: 350
        },

    ]


    return (
        <div className='container my-5 pt-5 offers_cards' id="popular">
            <div className="header">
                <h2>{translations.popularTrips}</h2>
            </div>
            <div className="parent_wrapper">
                <div className="parent">

                    {Trips.map((trip) => (
                        trip.popular ? (<div key={trip.id} className={`best_choice activity_card p-0 ${trips.class || ''}`}>
                            <div className="img_div">
                                <img src={trip.img} alt="Offer One" />
                            </div>

                            <div className="content ">
                                <div className="location">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p className='m-0 ps-2'>{translations[trip.title]}</p>
                                </div>
                                <h4 className='py-1 trip_text'>{translations[trip.text]}</h4>
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
                                    <MainBtn text={translations.bookNow} color="lightColor" tripData={() => navigate(`trip/${trip.id}`)} />
                                </div>
                            </div>
                        </div>) : ""
                    ))}

                </div>
            </div>
        </div >
    )
}

export default Best