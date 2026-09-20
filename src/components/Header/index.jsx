import { createElement, useEffect, useState } from "react";
import {
    FiActivity,
    FiBookOpen,
    FiChevronRight,
    FiGithub,
    FiMenu,
    FiX,
} from "react-icons/fi";

import styles from "./Header.module.css";

const menuLinks = [
    { label: "Overview", href: "#top", icon: FiActivity },
    { label: "Accordion", href: "#accordion", icon: FiBookOpen },
    { label: "Features", href: "#features", icon: FiChevronRight },
];

const Header = ({ openCount, totalCount }) => {
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const completion =
        totalCount > 0 ? Math.round((openCount / totalCount) * 100) : 0;

    useEffect(() => {
        let previousScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll <= 16) {
                setIsHidden(false);
            } else if (currentScroll > previousScroll + 4) {
                setIsHidden(true);
                setIsMenuOpen(false);
            } else if (currentScroll < previousScroll - 4) {
                setIsHidden(false);
            }

            previousScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`${styles.header} ${isHidden ? styles.hidden : ""}`}>
            <div className={styles.inner}>
                <a className={styles.brand} href="#top" onClick={closeMenu}>
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Ashish Ranjan logo"
                    />

                    <span>
                        <small>React UI component</small>
                        <strong>Accordion Pro</strong>
                    </span>
                </a>

                <nav className={styles.desktopNav} aria-label="Main navigation">
                    {menuLinks.map(({ label, href, icon }) => (
                        <a key={label} href={href}>
                            {createElement(icon, { "aria-hidden": true })}
                            <span>{label}</span>
                        </a>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <div
                        className={styles.progress}
                        aria-label={`${completion}% expanded`}
                    >
                        <span className={styles.progressIcon}>
                            <FiActivity aria-hidden="true" />
                        </span>
                        <span>
                            <strong>{openCount}</strong>/{totalCount} open
                        </span>
                    </div>

                    <a
                        className={styles.github}
                        href="https://github.com/a2rp/accordion-pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Accordion Pro on GitHub"
                        title="View on GitHub"
                    >
                        <FiGithub aria-hidden="true" />
                    </a>

                    <button
                        className={styles.menuButton}
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            <div
                className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ""}`}
                id="mobile-navigation"
                aria-hidden={!isMenuOpen}
            >
                <nav aria-label="Mobile navigation">
                    {menuLinks.map(({ label, href, icon }) => (
                        <a key={label} href={href} onClick={closeMenu}>
                            {createElement(icon, { "aria-hidden": true })}
                            <span>{label}</span>
                            <FiChevronRight aria-hidden="true" />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
