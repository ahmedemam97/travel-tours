import React from 'react'

function MainBtn({ color, text, tripData }) {
    return (
        <div>
            <button className={`mainBtn ${color}`} onClick={tripData}>{text}</button>
        </div>
    )
}

export default MainBtn  