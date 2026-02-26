import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/Logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useRef, useState } from 'react';
import { LangContext } from '../../Context/LangContext';
function Navbar() {
    const [openLang, setOpenLang] = useState(false);
    const langRef = useRef(null);
    let { setLanguage, language, translations } = useContext(LangContext)

    function newLang(lng) {
        setLanguage(lng);
        setOpenLang(false);
    }

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


    useEffect(() => {
        console.log(translations);
    }, [language]);


    return (
        <div>
            <nav className="navbar navbar-expand-lg fw-bold container">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto d-flex align-items-center">

                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="" />
                        </Link>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">{translations.home}</Link>
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
                                    <Link className="dropdown-item" to="#" onClick={() => newLang('en')} >
                                        English
                                    </Link>

                                    <Link className="dropdown-item" to="#" onClick={() => newLang('fr')}>
                                        French
                                    </Link>

                                    <Link className="dropdown-item" to="#" onClick={() => newLang('rus')}>
                                        Russian
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