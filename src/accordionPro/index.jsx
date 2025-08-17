import React from "react";
import { Styled } from "./Styled.js";
import "./styles.css";
import Accordion from "./Accordion.jsx";
import useLocalStorage from "./useLocalStorage.js";

export default function AccordionProDemo() {
    const [openIds, setOpenIds, resetOpenIds] = useLocalStorage(
        "accordionpro:open",
        ["getting-started"]
    );

    const items = [
        {
            id: "getting-started",
            title: "Getting started",
            render: () => (
                <>
                    <p>This is a click-only, accessible accordion.</p>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                        <li>Click a header to expand or collapse its section.</li>
                        <li>Your open/close choices persist in <code>localStorage</code>.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "why-accessible",
            title: "Why accessibility matters",
            render: () => (
                <p>
                    Even without keyboard shortcuts, proper <code>aria-expanded</code> and
                    labelled regions help assistive tech announce state changes clearly.
                </p>
            ),
        },
        {
            id: "persistence",
            title: "Persistence & configuration",
            render: () => (
                <>
                    <p>Open panels are saved to <code>localStorage</code> so they survive reloads.</p>
                    <p>Set <code>allowMultiple</code> to <code>false</code> in this file if you want only one open at a time.</p>
                </>
            ),
        },
        {
            id: "faq",
            title: "FAQ",
            render: () => (
                <>
                    <p><strong>Can I nest accordions?</strong> Yes—place another component inside a panel.</p>
                    <p><strong>Is there an animation?</strong> A light max-height transition is included.</p>
                </>
            ),
        },
    ];

    const allowMultiple = true;

    const toggleById = (id) => {
        setOpenIds((previous) => {
            const alreadyOpen = previous.includes(id);
            if (allowMultiple) {
                return alreadyOpen ? previous.filter((value) => value !== id) : [...previous, id];
            } else {
                return alreadyOpen ? [] : [id];
            }
        });
    };

    const expandAll = () => setOpenIds(items.map((item) => item.id));
    const collapseAll = () => setOpenIds([]);
    const resetStorage = () => { resetOpenIds(); location.reload(); };

    return (
        <Styled.Shell>
            <Styled.Panel>
                <Styled.Title>Accordion Pro</Styled.Title>
                <Styled.Sub>
                    Click-only accordion with localStorage persistence.
                    &nbsp;<span className="badge">{openIds.length} open</span>
                </Styled.Sub>

                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <button onClick={expandAll}>Expand all</button>
                    <button onClick={collapseAll}>Collapse all</button>
                    <button onClick={resetStorage}>Reset localStorage</button>
                </div>

                <Accordion
                    items={items}
                    openIds={openIds}
                    onToggle={toggleById}
                    allowMultiple={allowMultiple}
                />
            </Styled.Panel>
        </Styled.Shell>
    );
}
