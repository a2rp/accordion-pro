import { FiLayers, FiZap } from "react-icons/fi";

import Accordion from "../../components/Accordion";
import Controls from "../../components/Controls";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { accordionItems } from "../../data/accordionItems";
import useLocalStorage from "../../hooks/useLocalStorage";

import { Styled } from "./styled";

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

    const toggleItem = (id) => {
        setOpenIds((currentIds) => {
            const isOpen = currentIds.includes(id);

            if (isOpen) {
                return currentIds.filter((itemId) => itemId !== id);
            }

            if (mode === "single") {
                return [id];
            }

            return [...currentIds, id];
        });
    };

    const changeMode = (newMode) => {
        setMode(newMode);

        if (newMode === "single") {
            setOpenIds((currentIds) =>
                currentIds.length > 0 ? [currentIds[0]] : [],
            );
        }
    };

    const expandAll = () => {
        if (mode === "single") {
            setOpenIds([accordionItems[0].id]);
            return;
        }

        setOpenIds(accordionItems.map((item) => item.id));
    };

    const collapseAll = () => {
        setOpenIds([]);
    };

    const resetAll = () => {
        resetOpenIds();
        setMode(DEFAULT_MODE);
    };

    const allOpen =
        mode === "multiple" && openIds.length === accordionItems.length;

    const noneOpen = openIds.length === 0;

    return (
        <Styled.Wrapper>
            <div className="glow glow-one" />
            <div className="glow glow-two" />

            <div className="container">
                <div className="label-row">
                    <div className="page-label">
                        <FiLayers />
                        <span>Accordion Pro</span>
                    </div>

                    <div className="page-label">
                        <FiZap />
                        <span>Persistent & Interactive</span>
                    </div>
                </div>

                <main className="main">
                    <Header
                        openCount={openIds.length}
                        totalCount={accordionItems.length}
                    />

                    <Controls
                        mode={mode}
                        onModeChange={changeMode}
                        onExpandAll={expandAll}
                        onCollapseAll={collapseAll}
                        onReset={resetAll}
                        allOpen={allOpen}
                        noneOpen={noneOpen}
                    />

                    <Accordion
                        items={accordionItems}
                        openIds={openIds}
                        onToggle={toggleItem}
                    />

                    <Footer />
                </main>
            </div>
        </Styled.Wrapper>
    );
};

export default AccordionPro;
