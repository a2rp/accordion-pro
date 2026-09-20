import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import styles from "./BackToTop.module.css";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 360);

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`${styles.button} ${isVisible ? styles.visible : ""}`}
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            tabIndex={isVisible ? 0 : -1}
        >
            <FiArrowUp aria-hidden="true" />
        </button>
    );
};

export default BackToTop;
