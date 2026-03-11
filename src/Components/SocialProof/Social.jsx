import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { LangContext } from "../../Context/LangContext";


function Social() {
    const { translations } = useContext(LangContext);

    const testimonials = [
        {
            id: 1,
            name: "Марина",
            role: translations.client_1.role,
            text: translations.client_1.comment,
            imgClass: "img_1",
        },
        {
            id: 2,
            name: "Артем Попов",
            role: translations.client_2.role,
            text: translations.client_2.comment,
            imgClass: "img_2",
        },
        {
            id: 3,
            name: "Ergün Özcebeci",
            role: translations.client_3.role,
            text: translations.client_3.comment,
            imgClass: "img_3",
        },
        {
            id: 4,
            name: "Giacomo Giusto",
            role: translations.client_4.role,
            text: translations.client_4.comment,
            imgClass: "img_4",
        },
        {
            id: 5,
            role: translations.client_5.role,
            text: translations.client_5.comment,
            imgClass: "img_5",
        },
    ];

    return (
        <section className="social-section py-5" id="ourClients">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">{translations.What_Our_Clients_Say}</h2>
                    <p className="text-muted">
                        {translations.Trusted_by_companies_across_Middle_East}
                    </p>
                </div>

                <div className="row g-4">
                    {testimonials.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-6">
                            <div className="comment text-center">
                                <div className={`socialImg ${item.imgClass}`}></div>

                                <div className="socialContent mt-4">
                                    <h5 className="mt-3 mb-0 fw-bold">{item.name}</h5>
                                    <small className="text-muted">{item.role}</small>
                                    <div className="stars my-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>

                                    <p className="testimonial-text mb-0">"{item.text}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Social;