import {
    FiCheck,
    FiChevronsDown,
    FiChevronsUp,
    FiLayers,
    FiRefreshCw,
    FiSliders,
} from "react-icons/fi";

import styles from "./Controls.module.css";

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
        <section className={styles.controls} aria-labelledby="controls-title">
            <div className={styles.topRow}>
                <div className={styles.intro}>
                    <span className={styles.introIcon}>
                        <FiSliders aria-hidden="true" />
                    </span>

                    <div>
                        <span className={styles.eyebrow} id="controls-title">
                            Quick controls
                        </span>
                        <p>Choose a panel mode and manage every item quickly.</p>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button
                        type="button"
                        className={`${styles.button} ${styles.primary}`}
                        onClick={onExpandAll}
                        disabled={allOpen || mode === "single"}
                        title={
                            mode === "single"
                                ? "Switch to multiple mode to expand all panels"
                                : "Expand all panels"
                        }
                    >
                        <FiChevronsDown aria-hidden="true" />
                        <span>Expand all</span>
                    </button>

                    <button
                        type="button"
                        className={styles.button}
                        onClick={onCollapseAll}
                        disabled={noneOpen}
                        title="Collapse all panels"
                    >
                        <FiChevronsUp aria-hidden="true" />
                        <span>Collapse all</span>
                    </button>

                    <button
                        type="button"
                        className={`${styles.button} ${styles.reset}`}
                        onClick={onReset}
                        title="Reset saved state"
                    >
                        <FiRefreshCw aria-hidden="true" />
                        <span>Reset state</span>
                    </button>
                </div>
            </div>

            <fieldset className={styles.modeFieldset}>
                <legend>
                    <FiLayers aria-hidden="true" />
                    Opening mode
                </legend>

                <div className={styles.modeOptions}>
                    <label
                        className={`${styles.modeOption} ${mode === "single" ? styles.selected : ""}`}
                    >
                        <input
                            type="radio"
                            name="accordion-mode"
                            value="single"
                            checked={mode === "single"}
                            onChange={() => onModeChange("single")}
                        />
                        <span className={styles.radioMark}>
                            {mode === "single" && <FiCheck aria-hidden="true" />}
                        </span>
                        <span>
                            <strong>One at a time</strong>
                            <small>Opening a new panel closes the previous one.</small>
                        </span>
                    </label>

                    <label
                        className={`${styles.modeOption} ${mode === "multiple" ? styles.selected : ""}`}
                    >
                        <input
                            type="radio"
                            name="accordion-mode"
                            value="multiple"
                            checked={mode === "multiple"}
                            onChange={() => onModeChange("multiple")}
                        />
                        <span className={styles.radioMark}>
                            {mode === "multiple" && <FiCheck aria-hidden="true" />}
                        </span>
                        <span>
                            <strong>More than one</strong>
                            <small>Keep multiple panels open together.</small>
                        </span>
                    </label>
                </div>
            </fieldset>
        </section>
    );
};

export default Controls;
