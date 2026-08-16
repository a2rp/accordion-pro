import {
    FiCheck,
    FiChevronsDown,
    FiChevronsUp,
    FiLayers,
    FiRefreshCw,
    FiSliders,
    FiSquare,
} from "react-icons/fi";

import { Styled } from "./styled";

const Controls = ({
    mode,
    onModeChange,
    onExpandAll,
    onCollapseAll,
    onReset,
    allOpen,
    noneOpen,
}) => {
    return (
        <Styled.Wrapper>
            <div className="top">
                <div className="info">
                    <div className="info-icon">
                        <FiSliders />
                    </div>

                    <div>
                        <span className="label">Quick Controls</span>

                        <p className="para">
                            Choose how panels open and manage them instantly.
                        </p>
                    </div>
                </div>

                <div className="buttons">
                    <button
                        type="button"
                        className="button primary"
                        onClick={onExpandAll}
                        disabled={allOpen || mode === "single"}
                        title={
                            mode === "single"
                                ? "Available in multiple panels mode"
                                : "Expand all panels"
                        }
                    >
                        <span className="button-icon">
                            <FiChevronsDown />
                        </span>

                        <span>Expand All</span>
                    </button>

                    <button
                        type="button"
                        className="button"
                        onClick={onCollapseAll}
                        disabled={noneOpen}
                        title="Collapse all panels"
                    >
                        <span className="button-icon">
                            <FiChevronsUp />
                        </span>

                        <span>Collapse All</span>
                    </button>

                    <button
                        type="button"
                        className="button reset"
                        onClick={onReset}
                        title="Reset saved state"
                    >
                        <span className="button-icon">
                            <FiRefreshCw />
                        </span>

                        <span>Reset State</span>
                    </button>
                </div>
            </div>

            <div className="mode">
                <span className="mode-title">
                    <FiLayers />
                    Opening Mode
                </span>

                <div className="mode-options">
                    <label
                        className={`mode-option ${
                            mode === "single" ? "selected" : ""
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={mode === "single"}
                            onChange={() => onModeChange("single")}
                        />

                        <span className="check">
                            {mode === "single" ? <FiCheck /> : <FiSquare />}
                        </span>

                        <span className="mode-text">
                            <strong>One at a time</strong>
                            <small>
                                Opening a new panel closes the previous one.
                            </small>
                        </span>
                    </label>

                    <label
                        className={`mode-option ${
                            mode === "multiple" ? "selected" : ""
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={mode === "multiple"}
                            onChange={() => onModeChange("multiple")}
                        />

                        <span className="check">
                            {mode === "multiple" ? <FiCheck /> : <FiSquare />}
                        </span>

                        <span className="mode-text">
                            <strong>More than one</strong>
                            <small>Keep multiple panels open together.</small>
                        </span>
                    </label>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Controls;
