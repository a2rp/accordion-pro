import React from "react";

/**
 * Accordion (click-only)
 * - No Arrow/Home/End handlers anymore
 * - Keeps ARIA (expanded/controls/labelledby) for screen readers
 */
export default function Accordion({
    items,                  // [{ id, title, render: () => ReactNode }]
    openIds,                // string[] of open item ids
    onToggle,               // (id: string) => void
    allowMultiple = true,   // kept for API compatibility (handled by parent)
}) {
    const isOpen = (id) => openIds.includes(id);

    return (
        <div className="accordion" role="presentation">
            {items.map((item) => {
                const expanded = isOpen(item.id);
                const controlId = `accordion-panel-${item.id}`;
                const headerId = `accordion-header-${item.id}`;

                return (
                    <div key={item.id} className="accordion-item">
                        <button
                            id={headerId}
                            className="accordion-header"
                            aria-expanded={expanded ? "true" : "false"}
                            aria-controls={controlId}
                            onClick={() => onToggle(item.id)}
                        >
                            <span>{item.title}</span>
                            <span className="caret" data-open={expanded ? "true" : "false"}>▶</span>
                        </button>

                        <div
                            id={controlId}
                            role="region"
                            aria-labelledby={headerId}
                            className="accordion-panel"
                            data-open={expanded ? "true" : "false"}
                        >
                            <div className="accordion-panel-inner">
                                {typeof item.render === "function" ? item.render() : null}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
