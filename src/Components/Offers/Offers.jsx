import React from 'react'
import MainBtn from '../MainBtn/MainBtn'

function Offers() {
    return (
        <div className='container mb-5'>
            <h2 className='py-3'>Offers to inspire you</h2>

            <div className="offers row">
                <div className="offer offer_1 m-auto">
                    <div className="offer_content">
                        <h1>South Bali (Kuta, Canggu, Uluwatu, Jimbaran)</h1>
                        <p>Travel hassle-free within Bali, visit popular attractions, or do water activities!</p>
                    </div>

                    <div className='button'>
                        <MainBtn text="See All Activities" color="lightColor" />
                    </div>
                </div>

                <div className="offer offer_2 m-auto">
                    <div className="offer_content">
                        <h1>Beyond the City</h1>
                        <p>Discover the wonders that lie outside the walls of Da Nang with these exciting tours of surrounding areas</p>
                    </div>

                    <div className='button'>
                        <MainBtn text="See All Activities" color="lightColor" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers