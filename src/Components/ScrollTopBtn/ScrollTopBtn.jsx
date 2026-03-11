import { useEffect, useState } from "react";

function ScrollTopBtn() {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className={`scroll_top ${showBtn ? "show" : ""}`}
            onClick={goToTop}
        >
            ↑
        </button>
    );
}

export default ScrollTopBtn;