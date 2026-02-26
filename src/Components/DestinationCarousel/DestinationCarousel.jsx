import Slider from 'react-slick'
import Img_1 from '../../Assets/Images/destination-1.png'
import Img_2 from '../../Assets/Images/destination-2.png'
import Img_3 from '../../Assets/Images/destination-3.png'
import Img_4 from '../../Assets/Images/destination-4.png'
import MainBtn from '../MainBtn/MainBtn'
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


function DestinationCarousel() {


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

    return (
        <div className='container destination my-5 pt-3'>
            <h2 className='mt-3 mb-4'>Top Destination For Your Next Vacation</h2>
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
                    <div className='image'>
                        <img src={Img_2} alt="" />
                        <div className="content">
                            <h2 className='text-white'>Tokio</h2>
                            <div className="text">
                                <p className='text-white'>Discover the Tokyo with our special tours</p>
                                <MainBtn text="See All Tours" color="transparentBtn" />
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={Img_3} alt="" />
                        <div className="content">
                            <h2 className='text-white'>Tokio</h2>
                            <div className="text">
                                <p className='text-white'>Discover the Tokyo with our special tours</p>
                                <MainBtn text="See All Tours" color="transparentBtn" />
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={Img_4} alt="" />
                        <div className="content">
                            <h2 className='text-white'>Tokio</h2>
                            <div className="text">
                                <p className='text-white'>Discover the Tokyo with our special tours</p>
                                <MainBtn text="See All Tours" color="transparentBtn" />
                            </div>
                        </div>
                    </div>
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
                    <div className='image'>
                        <img src={Img_3} alt="" />
                        <div className="content">
                            <h2 className='text-white'>Tokio</h2>
                            <div className="text">
                                <p className='text-white'>Discover the Tokyo with our special tours</p>
                                <MainBtn text="See All Tours" color="transparentBtn" />
                            </div>
                        </div>
                    </div>
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
                    <div className='image'>
                        <img src={Img_2} alt="" />
                        <div className="content">
                            <h2 className='text-white'>Tokio</h2>
                            <div className="text">
                                <p className='text-white'>Discover the Tokyo with our special tours</p>
                                <MainBtn text="See All Tours" color="transparentBtn" />
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={Img_3} alt="" />
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

            <div className="w-100 mt-5 d-flex justify-content-center">
                <MainBtn text="See All Destination" color="lightColor" />
            </div>


        </div>
    )
}

export default DestinationCarousel