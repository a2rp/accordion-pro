import {
    FiCodepen,
    FiExternalLink,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const links = [
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
        icon: FiGlobe,
    },
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
        icon: FiGithub,
    },
    {
        label: "CodePen",
        href: "https://codepen.io/ash1198",
        icon: FiCodepen,
    },
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
    {
        label: "Email",
        href: "mailto:ash.ranjan09@gmail.com",
        icon: FiMail,
    },
];

const supportLinks = [
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
    },
    {
        label: "Buy Me A Coffee",
        href: "https://buymeacoffee.com/a2rp",
    },
    {
        label: "Patreon",
        href: "https://patreon.com/a2rp",
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="top">
                <div className="author">
                    <div className="author-icon">
                        <FiHeart />
                    </div>

                    <div className="author-text">
                        <span className="label">Built by</span>

                        <h2>
                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ashish Ranjan
                                <FiExternalLink />
                            </a>
                        </h2>

                        <p>
                            Building clean, reusable, and interactive web
                            experiences.
                        </p>
                    </div>
                </div>

                <div className="links">
                    {links.map(({ label, href, icon: Icon }) => {
                        const isEmail = href.startsWith("mailto:");

                        return (
                            <a
                                key={label}
                                href={href}
                                target={isEmail ? undefined : "_blank"}
                                rel={isEmail ? undefined : "noreferrer"}
                                className="link"
                            >
                                <span className="link-icon">
                                    <Icon />
                                </span>

                                <span>{label}</span>

                                {!isEmail && (
                                    <FiExternalLink className="open-icon" />
                                )}
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="support">
                <a
                    href="https://a2rp-donation-page.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="support-title"
                >
                    <FiHeart />
                    <span>Support my work</span>
                    <FiExternalLink />
                </a>

                <div className="support-links">
                    {supportLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{item.label}</span>
                            <FiExternalLink />
                        </a>
                    ))}
                </div>
            </div>

            <div className="bottom">
                <span>
                    Developed by{" "}
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </span>

                <span className="dot" />

                <span>© {year} All rights reserved.</span>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
