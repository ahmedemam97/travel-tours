import React from "react";
import { FaStar } from "react-icons/fa";


function Social() {
    const testimonials = [
        {
            id: 1,
            name: "Ahmed Al-Qahtani",
            role: "Project Manager",
            text: "The team delivered a high-quality HVAC system with outstanding professionalism and on-time completion.",
            imgClass: "img_1",
        },
        {
            id: 2,
            name: "Manar Salem",
            role: "UI / UX Designer",
            text: "Excellent installation and maintenance service. Highly recommended for large-scale cooling projects.",
            imgClass: "img_2",
        },
        {
            id: 3,
            name: "Faisal Abdullah",
            role: "Facility Engineer",
            text: "Professional execution with great technical expertise in VRF and Chilled Water systems.",
            imgClass: "img_3",
        },
        {
            id: 4,
            name: "Khaled Hassan",
            role: "Operations Director",
            text: "Reliable company with strong commitment to quality and safety standards.",
            imgClass: "img_4",
        },
    ];

    return (
        <section className="social-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">What Our Clients Say</h2>
                    <p className="text-muted">
                        Trusted by companies across Middle East
                    </p>
                </div>

                <div className="row g-4">
                    {testimonials.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-6">
                            <div className="comment text-center">
                                <div className={`socialImg ${item.imgClass}`}></div>

                                <div className="socialContent mt-4">
                                    <div className="stars mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>

                                    <p className="testimonial-text">
                                        "{item.text}"
                                    </p>

                                    <h5 className="mt-3 mb-0 fw-bold">{item.name}</h5>
                                    <small className="text-muted">{item.role}</small>
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