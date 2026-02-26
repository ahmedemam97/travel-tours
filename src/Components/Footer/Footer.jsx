import React from 'react'
import Logo from '../../Assets/Images/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className="row">
                    <div className="logo_div col-md-5 col-sm-5">
                        <div className="image">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <h4 className='h6'>Don't just get there, get there in style.</h4>
                    </div>

                    <div className="contact_data col-md-5 col-sm-5">
                        <div className="location data">
                            <FontAwesomeIcon icon={faLocationDot} size="lg" />
                            <p className='m-0'>Sharm Alshikh-
                                Old Market – In front of Al Sahaba Mosque</p>
                        </div>

                        <div className="phone data my-3">
                            <FontAwesomeIcon icon={faPhone} />
                            <p className='m-0'>+20 10 10351064 | +201033794941 | +201002500976</p>
                        </div>

                        <div className="envelope data">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='m-0'>ahmed@gmail.com</p>
                        </div>
                    </div>

                    <div className="social col-lg-2 col-md-3 col-sm-5">
                        <h4>Follow Us</h4>
                        <div className="icons d-flex justify-content-between">
                            <div className="icon icon1">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>

                            <div className="icon icon2">
                                <FontAwesomeIcon icon={faInstagram} />

                            </div>

                            <div className="icon icon3">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>

                            <div className="icon icon4">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer