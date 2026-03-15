import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ImgOne from '../../Assets/menem-tours_imgs/trips/Boat.jpg'
import ImgTow from '../../Assets/menem-tours_imgs/trips/Albatraa.jpg'
import styles from "./Trip.module.css";

import emailjs from "@emailjs/browser";
import TransitionsModal from "../Modal/TransitionsModal";
import { TripContext } from "../../Context/Trips/TripContext";
import { LangContext } from "../../Context/LangContext";


function Trip() {
    const [mode, setMode] = useState('book');
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const { translations } = useContext(LangContext)
    const { Trips } = useContext(TripContext)
    let { id } = useParams();

    const location = useLocation();
    const offer = Trips.find(trip => trip.id === Number(id));


    // Mailjs code
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        checkIn: '',
        checkOut: '',
        totalPrice: offer?.price || 0
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log(form);



        emailjs.send(
            "service_d4px7wb",
            "template_pel49cx",
            {
                title: "Trip Tours",
                firstName: form.firstName,
                lastName: form.lastName,
                phone: form.phone,
                email: form.email,
                dateFrom: form.checkIn,
                dateTo: form.checkOut,
                totalPrice: form.totalPrice,
            },

            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                navigate('/');
                setOpenModal(true);
                console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
            })
            .catch((error) => {
                console.error("FAILED...", error);
                alert("Something went wrong");
                console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
            });
    }

    function handleOpenModal() {
        setOpenModal(true)
    }

    useEffect(() => { console.log(offer); }, [])

    return (
        <>
            <div className="container my-4">
                <TransitionsModal open={openModal} handleClose={() => setOpenModal(false)} />
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-2">
                        <li className="breadcrumb-item">
                            <Link to={'/'} >Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Tour Info</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="display-6">{offer.title}</h1>
                        <div className="d-flex flex-wrap align-items-center mb-3">
                            <span className="badge bg-warning text-dark me-2">Featured</span>
                            <span className="badge bg-danger me-2">Best seller</span>
                            <div className="text-muted me-3">
                                {[...Array(4)].map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} color='orange' key={i} />
                                ))}

                                <FontAwesomeIcon icon={faStarHalfStroke} color='orange' /> <small className="text-muted">(2467 reviews)</small></div>
                            <div className="text-muted">• Las Vegas, United States • <span className="fw-bold">1.5k booked</span></div>
                        </div>

                        <img src={offer.img} alt={offer.title} className={`img-fluid rounded mb-3 ${styles.mainImg}`} />

                        <div className="row mb-4 d-flex justify-content-between">
                            <div className={`col-md-4 col-sm-4 mb-2 ${styles.childImg}`}><img src={offer.img} className="img-fluid rounded" alt="thumb" /></div>
                            <div className={`col-md-4 col-sm-4 mb-2 ${styles.childImg}`}><img src={offer.img} className="img-fluid rounded" alt="thumb" /></div>
                            <div className={`col-md-4 col-sm-4 mb-2 ${styles.childImg}`}><img src={offer.img} className="img-fluid rounded" alt="thumb" /></div>
                        </div>

                        <section className="mb-4">
                            <h3>Overview</h3>
                            <p>This expertly guided small-group tour takes you to Antelope Canyon and Horseshoe Bend. Enjoy scenic views, learn about the geology, and take plenty of photos. The tour includes round-trip transportation from Las Vegas and a local guide.</p>
                        </section>

                        <section className="mb-4">
                            <h3>What's included</h3>
                            <ul>
                                <li>Round-trip transportation from Las Vegas</li>
                                <li>Professional local guide</li>
                                <li>Park entrance fees</li>
                                <li>Bottled water and light snacks</li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h3>Additional information</h3>
                            <p>Wear comfortable shoes and bring a hat. The tour involves walking on uneven surfaces. Not recommended for travelers with severe mobility issues.</p>
                        </section>

                        <section className="mb-5">
                            <h3>Cancellation policy</h3>
                            <p>Free cancellation up to 48 hours before departure. For cancellations within 48 hours, a partial refund may apply. Check terms at booking.</p>
                        </section>
                    </div>

                    <div className="col-lg-4">
                        <div className="card sticky-top" style={{ top: '20px' }}>
                            <div className="card-body">
                                <div className="d-flex mb-3">
                                    <button className={`btn me-2 ${mode === 'book' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setMode('book')}>Book</button>
                                    <button className={`btn ${mode === 'inquiry' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setMode('inquiry')}>Inquiry</button>

                                </div>

                                {mode === 'book' ? (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-6 mb-2">
                                                <input name="firstName" value={form.firstName} onChange={handleChange} required className="form-control" placeholder="First name" />
                                            </div>
                                            <div className="col-6 mb-2">
                                                <input name="lastName" value={form.lastName} onChange={handleChange} required className="form-control" placeholder="Last name" />
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <input name="phone" value={form.phone} onChange={handleChange} required className="form-control" placeholder="Phone" />
                                        </div>
                                        <div className="mb-2">
                                            <input name="email" value={form.email} onChange={handleChange} required className="form-control" placeholder="Email" type="email" />
                                        </div>

                                        <div className="row">
                                            <div className="col-6 mb-2">
                                                <label className="form-label small">Date</label>
                                                <input name="checkIn" value={form.checkIn} onChange={handleChange} className="form-control" type="date" />
                                            </div>
                                            <div className="col-6 mb-2">
                                                <label className="form-label small">Return</label>
                                                <input name="checkOut" value={form.checkOut} onChange={handleChange} className="form-control" type="date" />
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <label className="form-label small">Total price</label>
                                            <input name="totalPrice" value={form.totalPrice} onChange={handleChange} className="form-control" readOnly />
                                        </div>

                                        <div className="d-grid">
                                            <button onClick={() => handleOpenModal()} className="btn btn-success">Booking now</button>
                                        </div>
                                    </form>
                                ) : (
                                    <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent (demo)'); }}>
                                        <div className="mb-2">
                                            <input className="form-control" placeholder="Your name" required />
                                        </div>
                                        <div className="mb-2">
                                            <input className="form-control" placeholder="Email" type="email" required />
                                        </div>
                                        <div className="mb-2">
                                            <textarea className="form-control" placeholder="Your message" rows="4" />
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary">Send inquiry</button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Trip;