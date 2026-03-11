import React, { useContext } from 'react'
import MainBtn from '../MainBtn/MainBtn'
import { LangContext } from '../../Context/LangContext';

function BookNow() {
    const { translations } = useContext(LangContext)
    return (
        <section className="book-section container">
            <div className="header">
                <h2>{translations.bookNow}</h2>
            </div>
            <div className="book-overlay">
                <div className="book-container">

                    <div className="book-card"><div className="book-content">
                        <h2>{translations.planNextAdventure}</h2>
                        <p>{translations.bookInstantConfirmation}</p>
                    </div>

                        <form>
                            <div className="book-form">
                                <div className="form-group">
                                    <label>{translations.destination}</label>
                                    <select>
                                        <option>{translations.bali}</option>
                                        <option>{translations.maldives}</option>
                                        <option>{translations.tokyo}</option>
                                        <option>{translations.paris}</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>{translations.checkIn}</label>
                                    <input type="date" />
                                </div>

                                <div className="form-group">
                                    <label>{translations.checkOut}</label>
                                    <input type="date" />
                                </div>

                                <div className="form-group">
                                    <label>{translations.guests}</label>
                                    <input type="number" min="1" defaultValue="2" />
                                </div>
                            </div>

                            <div className="w-100 mt-2">
                                <MainBtn text={translations.bookNow} color="lightColor" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BookNow