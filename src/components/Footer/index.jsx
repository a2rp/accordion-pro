import { createElement } from "react";
import {
    FiCodepen,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiStar,
    FiYoutube,
} from "react-icons/fi";

import styles from "./Footer.module.css";

const profileLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCodepen },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FiLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FiFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FiYoutube,
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
];

const supportLinks = [
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: FiHeart,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: FiCoffee,
    },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FiStar },
];

const FooterLink = ({ label, href, icon }) => {
    const isEmail = href.startsWith("mailto:");

    return (
        <a
            className={styles.iconLink}
            data-tooltip={label}
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            aria-label={label}
            title={label}
        >
            {createElement(icon, { "aria-hidden": true })}
        </a>
    );
};

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footerTop}>
                <div className={styles.footerIntro}>
                    <span className={styles.heart}>
                        <FiHeart aria-hidden="true" />
                    </span>

                    <div>
                        <span className={styles.eyebrow}>Keep exploring</span>
                        <p>Reusable components make thoughtful interfaces easier to build.</p>
                    </div>
                </div>

                <div className={styles.linkGroup} aria-label="Profile links">
                    {profileLinks.map((link) => (
                        <FooterLink key={link.label} {...link} />
                    ))}
                </div>
            </div>

            <div className={styles.supportRow}>
                <span className={styles.supportLabel}>Support the project</span>

                <div className={styles.linkGroup} aria-label="Support links">
                    {supportLinks.map((link) => (
                        <FooterLink key={link.label} {...link} />
                    ))}
                </div>
            </div>

            <p className={styles.copyright}>
                Copyright &copy; {year}{" "}
                <a
                    href="https://www.ashishranjan.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ashish Ranjan
                </a>
            </p>
        </footer>
    );
};

export default Footer;
