import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/Logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';
function Navbar() {
    const [openLang, setOpenLang] = useState(false);
    const langRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setOpenLang(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg fw-bold container">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto d-flex align-items-center">
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="#">Action</Link>
                                <Link class="dropdown-item" to="#">Another action</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tours
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="#">Action</Link>
                                <Link class="dropdown-item" to="#">Another action</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Destination
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="#">Destination List</Link>
                                <Link class="dropdown-item" to="#">Single Destination</Link>
                                <Link class="dropdown-item" to="#">Trip Ideas</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">Deals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Careers</Link>
                        </li> */}
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="" />
                        </Link>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto align-items-center gap-3">
                        <li
                            className="nav-item d-flex align-items-center gap-2 lang-div"
                            ref={langRef}
                        >
                            <FontAwesomeIcon icon={faEarthAmericas} size="lg" />

                            <span
                                className="nav-link p-0"
                                onClick={() => setOpenLang(!openLang)}
                                style={{ cursor: "pointer" }}
                            >
                                English
                            </span>

                            {openLang && (
                                <div className="dropdown-menu lang-ddn show">
                                    <Link className="dropdown-item" to="#">
                                        Arabic
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        French
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar