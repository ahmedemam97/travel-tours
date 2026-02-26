import Img_1 from '../../Assets/Images/section2-1.png'
import Img_2 from '../../Assets/Images/section2-2.png'
import Img_3 from '../../Assets/Images/section2-3.png'
import Img_4 from '../../Assets/Images/section2-4.png'
function Features() {
    return (
        <div className='container my-5 py-3'>
            <div className="features row text-center gap-">
                <div className="feature col-md-3 mx-auto">
                    <div className="image w-25 mx-auto d-flex align-items-center justify-content-center">
                        <img src={Img_1} alt="" className='w-100' />
                    </div>
                    <h4>Discover the possibilities</h4>
                    <p>With nearly half a million attractions,
                        hotels & more, you're sure to find joy. </p>
                </div>

                <div className="feature col-md-3 mx-auto">
                    <div className="image w-25 mx-auto d-flex align-items-center justify-content-center">
                        <img src={Img_2} alt="" className='w-100' />
                    </div>
                    <h4>Enjoy deals & delights</h4>
                    <p>Quality activities. Great prices. Plus,
                        earn credits to save more. </p>
                </div>

                <div className="feature col-md-3 mx-auto">
                    <div className="image w-25 mx-auto d-flex align-items-center justify-content-center">
                        <img src={Img_3} alt="" className='w-100' />
                    </div>
                    <h4>Exploring made easy</h4>
                    <p>Book last minute, skip lines & get free
                        cancellation for easier exploring. </p>
                </div>

                <div className="feature col-md-3 mx-auto">
                    <div className="image w-25 mx-auto d-flex align-items-center justify-content-center">
                        <img src={Img_4} alt="" className='w-100' />
                    </div>
                    <h4>Travel you can trust</h4>
                    <p>Read reviews & get reliable customer
                        support. We're with you at every step. </p>
                </div>
            </div>
        </div>
    )
}

export default Features