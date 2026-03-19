import Slider from 'react-slick'
import { useContext } from 'react'
import { TripContext } from '../../Context/Trips/TripContext'
function NextArrow(props) {


    const { onClick } = props;
    return (
        <div className="arrow next" onClick={onClick}>
            ❯
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow prev" onClick={onClick}>
            ❮
        </div>
    );
}


function DestinationCarousel({ id }) {

    const { Trips } = useContext(TripContext);

    const trip = Trips.find(t => t.id === id);
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 589,
                settings: {
                    slidesToShow: 1,
                    dots: true
                },
            },
        ],
    };


    return (
        < div className='container destination my-5 pt-3' >
            {/* <div className="header">
                <h2>Top Destination For Your Next Vacation</h2>
            </div> */}
            <div className="">
                <Slider {...settings}>
                    {trip.travelMemories.memories.map((memory, index) => (
                        <div className='image' key={index}>
                            <img src={memory} alt="" />
                            {console.log(memory)}
                            {/* <div className="content">
                                <h2 className='text-white'>Tokio</h2>
                                <div className="text">
                                    <p className='text-white'>Discover the Tokyo with our special tours</p>
                                    <MainBtn text="See All Tours" color="transparentBtn" />
                                </div>
                            </div> */}
                        </div>)
                    )}
                </Slider>
            </div>
        </div >
    )
}

export default DestinationCarousel