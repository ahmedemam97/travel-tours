import { useState } from "react";
import styles from "./FAQS.module.css";

function FAQS() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Can I cancel my booking?",
            answer:
                "Yes, you can cancel your booking within 24 hours for a full refund.",
        },
        {
            question: "Do you offer group discounts?",
            answer:
                "Yes, we provide special discounts for groups of 5 people or more.",
        },
        {
            question: "Is travel insurance included?",
            answer:
                "Travel insurance is optional and can be added during checkout.",
        },
        {
            question: "How do I receive my tickets?",
            answer:
                "Your tickets will be sent instantly to your email after payment confirmation.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""
                                }`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className={styles.question}>
                                <span>{faq.question}</span>
                                <span className={styles.icon}>
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </div>

                            <div className={styles.answer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQS;