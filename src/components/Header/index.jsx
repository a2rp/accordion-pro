import {
    FiActivity,
    FiChevronRight,
    FiLayers,
    FiMousePointer,
    FiRefreshCw,
} from "react-icons/fi";

import { Styled } from "./styled";

const Header = ({ openCount, totalCount }) => {
    const completion =
        totalCount > 0 ? Math.round((openCount / totalCount) * 100) : 0;

    return (
        <Styled.Wrapper $completion={completion}>
            <div className="header-content">
                <div className="top-label">
                    <span className="label-icon">
                        <FiLayers />
                    </span>

                    <span>Advanced React Accordion</span>

                    <FiChevronRight className="label-arrow" />
                </div>

                <div className="title-row">
                    <div className="title-content">
                        <h1>
                            Accordion
                            <span> Pro</span>
                        </h1>

                        <p>
                            A polished, persistent, and interactive accordion
                            experience with smooth motion, responsive behavior,
                            and reusable architecture.
                        </p>
                    </div>

                    <div className="status-card">
                        <div className="status-card-top">
                            <div className="status-icon">
                                <FiActivity />
                            </div>

                            <div>
                                <span className="status-label">
                                    Active Panels
                                </span>

                                <strong>
                                    {openCount}
                                    <span> / {totalCount}</span>
                                </strong>
                            </div>
                        </div>

                        <div className="progress-track">
                            <div className="progress-value" />
                        </div>

                        <div className="progress-info">
                            <span>{completion}% expanded</span>
                            <FiRefreshCw />
                        </div>
                    </div>
                </div>

                <div className="feature-row">
                    <div className="feature-item">
                        <FiRefreshCw />
                        <span>Persistent State</span>
                    </div>

                    <div className="feature-item">
                        <FiMousePointer />
                        <span>Microinteractions</span>
                    </div>

                    <div className="feature-item">
                        <FiLayers />
                        <span>Reusable Structure</span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;
