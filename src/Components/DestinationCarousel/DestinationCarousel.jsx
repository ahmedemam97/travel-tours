import Slider from 'react-slick'
import Img_1 from '../../Assets/menem-tours_imgs/trips/Albatraa.jpg'
import Img_2 from '../../Assets/menem-tours_imgs/trips/Boat.jpg'
import Img_3 from '../../Assets/menem-tours_imgs/trips/Diving.jpg'
import Img_4 from '../../Assets/menem-tours_imgs/trips/Dolphins.jpg'
import MainBtn from '../MainBtn/MainBtn'
import { useContext, useEffect } from 'react'
import { TripContext } from '../../Context/Trips/TripContext'
import { LangContext } from '../../Context/LangContext'
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

    const { translations } = useContext(LangContext);
    const { Trips } = useContext(TripContext);

    const trip = Trips.find(t => t.id === id);
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
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

    useEffect(() => {
        console.log(trip);
    }, [])

    return (
        < div className='container destination my-5 pt-3' >
            <div className="header">
                <h2>Top Destination For Your Next Vacation</h2>
            </div>
            <div className="mt-2">
                <Slider {...settings}>
                    <div className='image'>
                        <img src={Img_1} alt="" />
                        <div className="content">
                            <h2 className='text-white'>Tokio</h2>
                            <div className="text">
                                <p className='text-white'>Discover the Tokyo with our special tours</p>
                                <MainBtn text="See All Tours" color="transparentBtn" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div >
    )
}

export default DestinationCarousel