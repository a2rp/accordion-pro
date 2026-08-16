import { FiChevronDown, FiCircle, FiLayers } from "react-icons/fi";

import { Styled } from "./styled";

const Accordion = ({ items, openIds, onToggle }) => {
    return (
        <Styled.Wrapper>
            <div className="top-row">
                <div className="title-info">
                    <span className="title-icon">
                        <FiLayers />
                    </span>

                    <div>
                        <span className="label">Content</span>
                        <h2>Explore the accordion</h2>
                    </div>
                </div>

                <span className="count">{items.length} items</span>
            </div>

            <div className="list">
                {items.map((item, index) => {
                    const isOpen = openIds.includes(item.id);

                    return (
                        <article
                            key={item.id}
                            className={`item ${isOpen ? "open" : ""}`}
                        >
                            <button
                                type="button"
                                className="item-button"
                                onClick={() => onToggle(item.id)}
                                aria-expanded={isOpen}
                                aria-controls={`panel-${item.id}`}
                                id={`button-${item.id}`}
                            >
                                <div className="item-info">
                                    <span className="number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="item-text">
                                        <div className="item-title">
                                            <FiCircle className="dot" />
                                            <h3>{item.title}</h3>
                                        </div>

                                        {item.subtitle && (
                                            <p>{item.subtitle}</p>
                                        )}
                                    </div>
                                </div>

                                <span className="arrow">
                                    <FiChevronDown />
                                </span>
                            </button>

                            <div
                                className="panel"
                                id={`panel-${item.id}`}
                                role="region"
                                aria-labelledby={`button-${item.id}`}
                            >
                                <div className="panel-inner">
                                    <div className="line" />

                                    <div className="content">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
};

export default Accordion;
