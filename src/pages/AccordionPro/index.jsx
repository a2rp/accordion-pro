import { FiArrowDown, FiCheckCircle, FiGithub, FiLayers, FiZap } from "react-icons/fi";

import Accordion from "../../components/Accordion";
import BackToTop from "../../components/BackToTop";
import Controls from "../../components/Controls";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Showcase from "../../components/Showcase";
import { accordionItems } from "../../data/accordionItems";
import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./AccordionPro.module.css";

const STORAGE_KEY = "accordion-pro:open";
const MODE_STORAGE_KEY = "accordion-pro:mode";
const DEFAULT_OPEN_IDS = ["getting-started"];
const DEFAULT_MODE = "multiple";

const AccordionPro = () => {
    const [openIds, setOpenIds, resetOpenIds] = useLocalStorage(
        STORAGE_KEY,
        DEFAULT_OPEN_IDS,
    );
    const [mode, setMode] = useLocalStorage(MODE_STORAGE_KEY, DEFAULT_MODE);
    const validIds = new Set(accordionItems.map((item) => item.id));
    const currentOpenIds = Array.isArray(openIds)
        ? openIds.filter((id) => validIds.has(id))
        : [];
    const currentMode = mode === "single" ? "single" : DEFAULT_MODE;

    const toggleItem = (id) => {
        setOpenIds((savedIds) => {
            const safeIds = Array.isArray(savedIds)
                ? savedIds.filter((savedId) => validIds.has(savedId))
                : [];
            const isOpen = safeIds.includes(id);

            if (isOpen) {
                return safeIds.filter((itemId) => itemId !== id);
            }

            if (currentMode === "single") {
                return [id];
            }

            return [...safeIds, id];
        });
    };

    const changeMode = (newMode) => {
        setMode(newMode);

        if (newMode === "single") {
            setOpenIds((savedIds) => {
                const safeIds = Array.isArray(savedIds)
                    ? savedIds.filter((id) => validIds.has(id))
                    : [];

                return safeIds.length > 0 ? [safeIds[0]] : [];
            });
        }
    };

    const expandAll = () => {
        if (currentMode === "single") {
            setOpenIds([accordionItems[0].id]);
            return;
        }

        setOpenIds(accordionItems.map((item) => item.id));
    };

    const collapseAll = () => setOpenIds([]);

    const resetAll = () => {
        resetOpenIds();
        setMode(DEFAULT_MODE);
    };

    const allOpen =
        currentMode === "multiple" &&
        currentOpenIds.length === accordionItems.length;
    const noneOpen = currentOpenIds.length === 0;

    return (
        <div className={styles.page}>
            <div className={styles.glowOne} aria-hidden="true" />
            <div className={styles.glowTwo} aria-hidden="true" />

            <Header
                openCount={currentOpenIds.length}
                totalCount={accordionItems.length}
            />

            <main className={styles.container} id="top">
                <section className={styles.hero} aria-labelledby="page-title">
                    <div className={styles.heroCopy}>
                        <div className={styles.kicker}>
                            <FiLayers aria-hidden="true" />
                            <span>Reusable React component</span>
                        </div>

                        <h1 id="page-title">
                            Accordion <span>Pro</span>
                        </h1>

                        <p className={styles.heroText}>
                            A responsive and accessible accordion experience with persistent
                            state, flexible opening modes, and carefully tuned interaction
                            details.
                        </p>

                        <div className={styles.heroActions}>
                            <a className={styles.primaryAction} href="#accordion">
                                Try the demo
                                <FiArrowDown aria-hidden="true" />
                            </a>
                            <a
                                className={styles.secondaryAction}
                                href="https://github.com/a2rp/accordion-pro"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub aria-hidden="true" />
                                Source code
                            </a>
                        </div>

                        <div className={styles.stats}>
                            <div>
                                <strong>{accordionItems.length}</strong>
                                <span>demo panels</span>
                            </div>
                            <div>
                                <strong>{currentOpenIds.length}</strong>
                                <span>currently open</span>
                            </div>
                            <div>
                                <strong>{currentMode === "single" ? "1" : "∞"}</strong>
                                <span>opening mode</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <img
                            src={`${import.meta.env.BASE_URL}images/accordion-hero.jpg`}
                            alt="Light passing through a modern architectural structure"
                        />
                        <div className={styles.visualCard}>
                            <FiCheckCircle aria-hidden="true" />
                            <span>
                                <strong>Ready to reuse</strong>
                                <small>Keyboard friendly and persistent</small>
                            </span>
                        </div>
                        <div className={styles.visualBadge}>
                            <FiZap aria-hidden="true" />
                            Smooth motion
                        </div>
                    </div>
                </section>

                <section className={styles.workspace}>
                    <Controls
                        mode={currentMode}
                        onModeChange={changeMode}
                        onExpandAll={expandAll}
                        onCollapseAll={collapseAll}
                        onReset={resetAll}
                        allOpen={allOpen}
                        noneOpen={noneOpen}
                    />

                    <Accordion
                        items={accordionItems}
                        openIds={currentOpenIds}
                        onToggle={toggleItem}
                    />

                    <Showcase />
                    <Footer />
                </section>
            </main>

            <BackToTop />
        </div>
    );
};

export default AccordionPro;
