import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MainBtn from '../MainBtn/MainBtn';
import { useNavigate } from 'react-router-dom';
import img_1 from '../../Assets/Images/offers-3.png'
import img_2 from '../../Assets/Images/offers-4.png'
import img_3 from '../../Assets/Images/offers-5.png'
import img_4 from '../../Assets/Images/offers-6.png'
import img_5 from '../../Assets/Images/offers-7.png'
import img_6 from '../../Assets/Images/offers-8.png'
function Activities() {
    const navigate = useNavigate();
    const goToTrip = (offer) => navigate('/trip', { state: offer });

    return (
        <div className='container  my-5 pt-5 offers_cards' id="offers_cards">
            <h2>Offers</h2>
            <div className="parent_wrapper">
                <div className="parent">
                    <div className=" activity_card p-0 ">
                        <div className="img_div">
                            <img src={img_1} alt="Offer One" />
                        </div>

                        <div className="content ">
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className='m-0 ps-2'>Mountain, Vietnam</p>
                            </div>
                            <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
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

                    <div className=" activity_card p-0">
                        <div className="img_div">
                            <img src={img_3} alt="Offer One" />
                        </div>

                        <div className="content">
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className='m-0 ps-2'>Mountain, Vietnam</p>
                            </div>
                            <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
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
                                <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_3 })} />
                            </div>
                        </div>
                    </div>

                    <div className=" activity_card p-0">
                        <div className="img_div">
                            <img src={img_2} alt="Offer One" />
                        </div>

                        <div className="content">
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className='m-0 ps-2'>Mountain, Vietnam</p>
                            </div>
                            <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
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
                                <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_2 })} />
                            </div>
                        </div>
                    </div>

                    <div className=" activity_card p-0">
                        <div className="img_div">
                            <img src={img_5} alt="Offer One" />
                        </div>

                        <div className="content">
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className='m-0 ps-2'>Mountain, Vietnam</p>
                            </div>
                            <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
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
                                <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_5 })} />
                            </div>
                        </div>
                    </div>

                    <div className=" activity_card p-0">
                        <div className="img_div">
                            <img src={img_4} alt="Offer One" />
                        </div>

                        <div className="content">
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className='m-0 ps-2'>Mountain, Vietnam</p>
                            </div>
                            <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
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

                    <div className=" activity_card p-0">
                        <div className="img_div">
                            <img src={img_6} alt="Offer One" />
                        </div>

                        <div className="content">
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p className='m-0 ps-2'>Mountain, Vietnam</p>
                            </div>
                            <h4 className='py-1'>Tokyo Highlights & Mt. Fuji Day Trip</h4>
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
                                <MainBtn text="Book a flight" color="lightColor" tripData={() => goToTrip({ title: 'Tokyo Highlights & Mt. Fuji Day Trip', price: 250, img: img_6 })} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Activities