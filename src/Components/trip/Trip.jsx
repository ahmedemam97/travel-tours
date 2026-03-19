import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Trip.module.css";

import emailjs from "@emailjs/browser";
import TransitionsModal from "../Modal/TransitionsModal";
import { TripContext } from "../../Context/Trips/TripContext";
import { LangContext } from "../../Context/LangContext";
import DestinationCarousel from "../DestinationCarousel/DestinationCarousel";


function Trip() {
    const [modalStatus, setModalStatus] = useState('success');
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const { translations } = useContext(LangContext)
    const { Trips } = useContext(TripContext)
    let { id } = useParams();

    let tripId = id - 1;


    const offer = Trips.find(trip => trip.id === Number(id));
    console.log(tripId);


    ///////////////////// Mailjs code////////////////////
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

        const isComplete = form.firstName && form.lastName && form.phone && form.email && form.checkIn && form.checkOut;

        if (!isComplete) {
            setModalStatus('error');
            setOpenModal(true);
            return;
        }

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
                setModalStatus('success');
                setOpenModal(true);
                console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
                navigate('/');
            })
            .catch((error) => {
                console.error("FAILED...", error);
                alert("Something went wrong");
            });
    }
    /////////////////////////////////////////////////

    function handleOpenModal() {
        setOpenModal(true)
    }

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className="container my-4">
                <TransitionsModal open={openModal} handleClose={() => setOpenModal(false)} status={modalStatus} />
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mb-2">
                        <li className="breadcrumb-item">
                            <Link to={'/'} >{translations.home}</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{translations.tourInfo}</li>
                    </ol>
                </nav>
                {Trips[id - 1] ? <div className="row">
                    <div className="col-lg-8">
                        <h1 className="display-6">{translations[Trips[id - 1].title]}</h1>
                        <h3 className="">{translations[Trips[id - 1].tripHeader]}</h3>
                        <div className="d-flex flex-wrap align-items-center mb-3">
                            {Trips[id - 1].popular ? <>
                                <span className="badge bg-warning text-dark me-2 mb-0">{translations.featured}</span>
                                <span className="badge bg-danger me-2 mb-0">{translations.bestSeller}</span>
                            </> : ''}
                            <div className="text-muted me-3 rating">
                                {[...Array(4)].map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} color='orange' key={i} />
                                ))}


                                <FontAwesomeIcon icon={faStarHalfStroke} color='orange' /> <small className="text-muted">({Trips[id - 1].reviewsCount} reviews)</small></div>
                            {/* <div className="text-muted">• Las Vegas, United States • <span className="fw-bold">1.5k booked</span></div> */}

                        </div>

                        <img src={offer.img} alt={offer.title} className={`img-fluid rounded mb-3 ${styles.mainImg}`} />

                        <div className="row mb-4 d-flex justify-content-between">
                            <DestinationCarousel id={Trips[id - 1].id} />
                        </div>

                        <section className="mb-4">
                            <h3>{translations.overview}</h3>
                            {Trips[id - 1].overView.map((desc) => (
                                <p key={desc}>
                                    {translations[desc]}
                                </p>
                            ))}
                        </section>

                        <section className="mb-4">
                            <h3>{translations.whatsIncluded}</h3>
                            <ul className="p-0">
                                {Trips[id - 1].includedList.map((ele) => (
                                    <li className={styles.listEle}>✔ {translations[ele]}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h3>{translations.goodToKnow}</h3>
                            <ul className="p-0">
                                {Trips[id - 1].goodToKnow.map((ele) => (
                                    <li className={styles.listEle}>✔ {translations[ele]}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-5">
                            <h3>{translations.cancellationPolicy}</h3>
                            <p>{translations.cancellationPolicy1}</p>
                        </section>
                    </div>

                    <div className="col-lg-4">
                        <div className="card sticky-top" style={{ top: '20px' }}>
                            <div className="card-body">
                                <h5 className="mb-3 text-center">Book Your Trip</h5>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-6 mb-2">
                                            <input
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                required
                                                className="form-control"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div className="col-6 mb-2">
                                            <input
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                required
                                                className="form-control"
                                                placeholder="Last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="col-6 mb-2">
                                            <label className="form-label small">Date</label>
                                            <input
                                                name="checkIn"
                                                value={form.checkIn}
                                                onChange={handleChange}
                                                className="form-control"
                                                type="date"
                                            />
                                        </div>
                                        <div className="col-6 mb-2">
                                            <label className="form-label small">Return</label>
                                            <input
                                                name="checkOut"
                                                value={form.checkOut}
                                                onChange={handleChange}
                                                className="form-control"
                                                type="date"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <label className="form-label small">Total price</label>
                                        <input
                                            name="totalPrice"
                                            value={form.totalPrice}
                                            className="form-control"
                                            readOnly
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            onClick={handleOpenModal}
                                            className="btn btn-success"
                                        >
                                            Booking now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : ''}
            </div>

        </>
    );
}

export default Trip;