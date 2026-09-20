import { FiBookOpen, FiChevronDown, FiCircle } from "react-icons/fi";

import styles from "./Accordion.module.css";

const Accordion = ({ items, openIds, onToggle }) => {
    return (
        <section
            className={styles.accordion}
            id="accordion"
            aria-labelledby="accordion-title"
        >
            <div className={styles.heading}>
                <div className={styles.headingText}>
                    <span className={styles.headingIcon}>
                        <FiBookOpen aria-hidden="true" />
                    </span>

                    <div>
                        <span className={styles.eyebrow}>Interactive content</span>
                        <h2 id="accordion-title">Explore the accordion</h2>
                    </div>
                </div>

                <span className={styles.count}>{items.length} items</span>
            </div>

            <div className={styles.list}>
                {items.map((item, index) => {
                    const isOpen = openIds.includes(item.id);
                    const buttonId = `accordion-button-${item.id}`;
                    const panelId = `accordion-panel-${item.id}`;

                    return (
                        <article
                            className={`${styles.item} ${isOpen ? styles.open : ""}`}
                            key={item.id}
                        >
                            <button
                                type="button"
                                className={styles.itemButton}
                                onClick={() => onToggle(item.id)}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                id={buttonId}
                            >
                                <span className={styles.itemInfo}>
                                    <span className={styles.number}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className={styles.itemText}>
                                        <span className={styles.itemTitle}>
                                            <FiCircle
                                                className={styles.dot}
                                                aria-hidden="true"
                                            />
                                            <span>{item.title}</span>
                                        </span>

                                        {item.subtitle && <span className={styles.subtitle}>{item.subtitle}</span>}
                                    </span>
                                </span>

                                <span className={styles.arrow} aria-hidden="true">
                                    <FiChevronDown />
                                </span>
                            </button>

                            <div
                                className={styles.panel}
                                id={panelId}
                                role="region"
                                aria-labelledby={buttonId}
                                aria-hidden={!isOpen}
                            >
                                <div className={styles.panelInner}>
                                    <div className={styles.line} />
                                    <div className={styles.content}>{item.content}</div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Accordion;
