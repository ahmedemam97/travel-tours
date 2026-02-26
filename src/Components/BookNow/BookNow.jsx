import React from 'react'
import MainBtn from '../MainBtn/MainBtn'

function BookNow() {
    return (
        <section className="book-section container">
            <div className="book-overlay">
                <div className="book-container">


                    <div className="book-card"><div className="book-content">
                        <h2>Plan Your Next Adventure</h2>
                        <p>Book now and get instant confirmation with best price guarantee</p>
                    </div>

                        <form>
                            <div className="book-form">
                                <div className="form-group">
                                    <label>Destination</label>
                                    <select>
                                        <option>Bali</option>
                                        <option>Maldives</option>
                                        <option>Tokyo</option>
                                        <option>Paris</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Check In</label>
                                    <input type="date" />
                                </div>

                                <div className="form-group">
                                    <label>Check Out</label>
                                    <input type="date" />
                                </div>

                                <div className="form-group">
                                    <label>Guests</label>
                                    <input type="number" min="1" defaultValue="2" />
                                </div>
                            </div>

                            <div className="w-100 mt-2">
                                <MainBtn text="Book Now" color="lightColor" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BookNow