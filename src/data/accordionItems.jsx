export const accordionItems = [
    {
        id: "getting-started",
        title: "Getting Started",
        subtitle: "Understand how Accordion Pro works.",
        content: (
            <>
                <p>
                    Accordion Pro is a reusable React accordion with persistent
                    open state, smooth interactions, and modular architecture.
                </p>

                <p>
                    Open or close any panel individually. Your current state is
                    saved automatically and restored after refresh.
                </p>
            </>
        ),
    },
    {
        id: "persistent-state",
        title: "Persistent State",
        subtitle: "Open panels remain saved between sessions.",
        content: (
            <>
                <p>
                    Accordion Pro stores the currently opened panel IDs in
                    localStorage.
                </p>

                <p>
                    Refreshing or reopening the page restores the last saved
                    accordion state automatically.
                </p>
            </>
        ),
    },
    {
        id: "multiple-panels",
        title: "Multiple Panels",
        subtitle: "Keep more than one section open at the same time.",
        content: (
            <>
                <p>
                    Unlike traditional single-open accordions, Accordion Pro
                    allows multiple panels to stay expanded simultaneously.
                </p>

                <p>
                    This is useful for documentation, FAQs, dashboards, and
                    knowledge-based interfaces.
                </p>
            </>
        ),
    },
    {
        id: "quick-controls",
        title: "Quick Controls",
        subtitle: "Manage every panel instantly.",
        content: (
            <>
                <p>
                    Use Expand All to open every section or Collapse All to
                    close them instantly.
                </p>

                <p>
                    Reset State clears the saved accordion state and restores
                    the default configuration.
                </p>
            </>
        ),
    },
    {
        id: "keyboard-accessibility",
        title: "Keyboard Accessibility",
        subtitle: "Designed for mouse and keyboard interaction.",
        content: (
            <>
                <p>
                    Every accordion trigger uses a native button element with
                    proper ARIA attributes.
                </p>

                <p>
                    Keyboard users can navigate using Tab and toggle panels
                    using Enter or Space.
                </p>
            </>
        ),
    },
    {
        id: "microinteractions",
        title: "Microinteractions",
        subtitle: "Small details create a polished experience.",
        content: (
            <>
                <p>
                    Hover states, icon movement, card elevation, progress
                    feedback, and smooth accordion transitions make the
                    interface feel more responsive.
                </p>

                <p>
                    Motion remains subtle so the UI feels premium instead of
                    distracting.
                </p>
            </>
        ),
    },
    {
        id: "responsive-design",
        title: "Responsive Design",
        subtitle: "Built to work across different screen sizes.",
        content: (
            <>
                <p>
                    The layout automatically adapts for desktop, tablet, and
                    mobile screens.
                </p>

                <p>
                    Controls, accordion cards, typography, and footer links
                    reorganize gracefully on smaller devices.
                </p>
            </>
        ),
    },
    {
        id: "reusable-architecture",
        title: "Reusable Architecture",
        subtitle: "Components remain clean and easy to maintain.",
        content: (
            <>
                <p>
                    Header, controls, accordion, footer, data, and localStorage
                    logic are separated into dedicated modules.
                </p>

                <p>
                    This makes Accordion Pro easier to extend, customize, and
                    reuse in future React projects.
                </p>
            </>
        ),
    },
];
