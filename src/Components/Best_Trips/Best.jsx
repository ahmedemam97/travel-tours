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
function Best() {
    const navigate = useNavigate();
    const goToTrip = (offer) => navigate('/trip', { state: offer });

    const trips = [
        {
            id: 1,
            imgSrc: img_1,
            title: 'Rass Mohammed',
            text: 'Where the Red Sea Shows Its True Colors'
        },
        {
            id: 2,
            imgSrc: img_2,
            title: 'Alpatraa',
            text: 'Walk Through 2,000 Years of Wonder.'
        },
        {
            id: 3,
            imgSrc: img_3,
            title: 'Safari Adventure',
            text: 'Unleash Your Inner Explorer.'
        },

    ]

    return (
        // <div className='container  my-5 pt-5 offers_cards' id="offers_cards">
        //     <h2>Best Trips</h2>
        //     <div className="parent_wrapper">
        //         <div className="parent">
        //             <div className=" activity_card p-0 ">
        //                 <div className="img_div">
        //                     <img src={img_1} alt="Offer One" />
        //                 </div>

        //                 <div className="content ">
        //                     <div className="location">
        //                         <FontAwesomeIcon icon={faLocationDot} />
        //                         <p className='m-0 ps-2'>Mountain, Vietnam</p>
        //                     </div>
        //                     <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
        //                     <div className="rating">
        //                         <div className="icons pe-2 py-1">
        //                             {[...Array(4)].map((_, i) => (
        //                                 <FontAwesomeIcon icon={faStar} color='orange' key={i} />
        //                             ))}
        //                             <FontAwesomeIcon icon={faStarHalfStroke} color='orange' />
        //                         </div>
        //                         <span>(276 reviews)</span>
        //                     </div>

        //                     <p className='price'>Price: <span>250$</span></p>
        //                     <div className="button w-100 text-center">
        //                         <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_1 })} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className=" activity_card p-0">
        //                 <div className="img_div">
        //                     <img src={img_3} alt="Offer One" />
        //                 </div>

        //                 <div className="content">
        //                     <div className="location">
        //                         <FontAwesomeIcon icon={faLocationDot} />
        //                         <p className='m-0 ps-2'>Mountain, Vietnam</p>
        //                     </div>
        //                     <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
        //                     <div className="rating">
        //                         <div className="icons pe-2 py-1">
        //                             {[...Array(4)].map((_, i) => (
        //                                 <FontAwesomeIcon icon={faStar} color='orange' key={i} />
        //                             ))}
        //                             <FontAwesomeIcon icon={faStarHalfStroke} color='orange' />
        //                         </div>
        //                         <span>(276 reviews)</span>
        //                     </div>

        //                     <p className='price'>Price: <span>250$</span></p>
        //                     <div className="button w-100 text-center">
        //                         <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_3 })} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className=" activity_card p-0">
        //                 <div className="img_div">
        //                     <img src={img_2} alt="Offer One" />
        //                 </div>

        //                 <div className="content">
        //                     <div className="location">
        //                         <FontAwesomeIcon icon={faLocationDot} />
        //                         <p className='m-0 ps-2'>Mountain, Vietnam</p>
        //                     </div>
        //                     <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
        //                     <div className="rating">
        //                         <div className="icons pe-2 py-1">
        //                             {[...Array(4)].map((_, i) => (
        //                                 <FontAwesomeIcon icon={faStar} color='orange' key={i} />
        //                             ))}
        //                             <FontAwesomeIcon icon={faStarHalfStroke} color='orange' />
        //                         </div>
        //                         <span>(276 reviews)</span>
        //                     </div>

        //                     <p className='price'>Price: <span>250$</span></p>
        //                     <div className="button w-100 text-center">
        //                         <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_2 })} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div >

        <div className='container my-5 pt-5 offers_cards' id="offers_cards">
            <h2>Best Trips</h2>
            <div className="parent_wrapper">
                <div className="parent">

                    {trips.map((trip) => (
                        <div key={trip.id} className=" activity_card best_choice p-0 ">
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
                                    <span>(276 reviews)</span>
                                </div>

                                <p className='price'>Price: <span>250$</span></p>
                                <div className="button w-100 text-center">
                                    <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_1 })} />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}

export default Best