import { createElement } from "react";
import { FiLayers, FiSmartphone, FiZap } from "react-icons/fi";

import styles from "./Showcase.module.css";

const showcaseItems = [
    {
        title: "Reusable structure",
        description: "Small components keep the interaction easy to extend.",
        image: `${import.meta.env.BASE_URL}images/accordion-architecture.jpg`,
        alt: "Abstract architectural lines and light",
        icon: FiLayers,
    },
    {
        title: "Focused controls",
        description: "Clear controls make large content sets simple to manage.",
        image: `${import.meta.env.BASE_URL}images/accordion-controls.jpg`,
        alt: "People walking beside a calm shoreline",
        icon: FiZap,
    },
    {
        title: "Responsive by default",
        description: "Every panel and control adapts to smaller screens.",
        image: `${import.meta.env.BASE_URL}images/accordion-responsive.jpg`,
        alt: "A wide mountain valley under a soft sky",
        icon: FiSmartphone,
    },
];

const Showcase = () => {
    return (
        <section className={styles.showcase} id="features" aria-labelledby="features-title">
            <div className={styles.sectionHeading}>
                <span className={styles.eyebrow}>Built for real interfaces</span>
                <h2 id="features-title">Simple patterns, polished details.</h2>
                <p>
                    Use the component for FAQs, documentation, settings, product tours,
                    and any interface that needs progressive disclosure.
                </p>
            </div>

            <div className={styles.cards}>
                {showcaseItems.map(({ title, description, image, alt, icon }) => (
                    <article className={styles.card} key={title}>
                        <div className={styles.imageWrap}>
                            <img src={image} alt={alt} loading="lazy" />
                            <span className={styles.cardIcon}>
                                {createElement(icon, { "aria-hidden": true })}
                            </span>
                        </div>

                        <div className={styles.cardBody}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Showcase;
