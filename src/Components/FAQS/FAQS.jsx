import { useContext, useState } from "react";
import styles from "./FAQS.module.css";
import { LangContext } from '../../Context/LangContext';


function FAQS() {
    const [activeIndex, setActiveIndex] = useState(null);
    const { translations } = useContext(LangContext)

    const faqs = [
        {
            question: translations.howToBook,
            answer:
                translations.howToBookDetail,
        },
        {
            question: translations.howToPay,
            answer:
                translations.howToPayDetail,
        },
        {
            question: translations.bookTrip,
            answer:
                translations.bookTripDetail,
        },
        {
            question: translations.faqTransportQuestion,
            answer:
                translations.faqTransportAnswer,
        },
        {
            question: translations.faqBeginnerQuestion,
            answer:
                translations.faqBeginnerAnswer,
        },
        {
            question: translations.faqBringQuestion,
            answer:
                translations.faqBringAnswer,
        },
        {
            question: translations.faqSafetyQuestion,
            answer:
                translations.faqSafetyAnswer,
        },
        {
            question: translations.faqCancelQuestion,
            answer:
                translations.faqCancelAnswer,
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.container}>
                <div className="header">
                    <h2 className={`${styles.title}`}>{translations.faq}</h2>
                </div>

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