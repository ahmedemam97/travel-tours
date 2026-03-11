import React, { useContext } from 'react'
import Logo from '../../Assets/menem-tours_imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from '../../Context/LangContext';

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