import React, { useContext } from 'react'
import Logo from '../../Assets/menem-tours_imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from '../../Context/LangContext';
import { Link } from 'react-router-dom';

function Footer() {
    const { translations } = useContext(LangContext)
    return (
        <footer>
            <div className='container'>
                <div className="row gy-4">
                    <div className="logo_div col-lg-5 col-md-6 col-12">
                        <div className="image d-flex align-items-center justify-content-between">
                            <img src={Logo} alt="Logo" />
                            <h3>Menem Tours</h3>
                        </div>
                        <h4 className='h6'>{translations.getThereInStyle}</h4>
                    </div>

                    <div className="contact_data col-lg-5 col-md-6 col-12">
                        <div className="location data">
                            <FontAwesomeIcon icon={faLocationDot} size="lg" />
                            <p className='m-0'>{translations.sharmOldMarketAddress}</p>
                        </div>

                        <div className="phone data my-3">
                            <FontAwesomeIcon icon={faPhone} />
                            <p className='m-0'>+20 10 10351064 | +201033794941 | +201002500976</p>
                        </div>

                        {/* <div className="envelope data">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='m-0'>ahmed@gmail.com</p>
                        </div> */}
                    </div>

                    <div className="social col-lg-2 col-md-12 col-12">
                        <h4>{translations.followUs}</h4>
                        <div className="icons d-flex justify-content-between">

                            <Link
                                href="https://www.facebook.com/profile.php?id=100066385935958"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon icon1"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>

                            <Link
                                href="https://www.instagram.com/menem.tours/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon icon2"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>

                            <Link
                                href="https://www.tiktok.com/@menem.tours?_r=1&_t=ZS-94gn3TxQTL8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon icon3"
                            >
                                <FontAwesomeIcon icon={faTiktok} />
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer