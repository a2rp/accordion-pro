import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        margin-bottom: 24px;
        padding: 16px;
        border: 1px solid rgba(255, 255, 255, 0.075);
        border-radius: 18px;
        background:
            linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.035),
                rgba(255, 255, 255, 0.012)
            ),
            rgba(255, 255, 255, 0.01);
        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.035),
            0 14px 34px rgba(0, 0, 0, 0.16);
        transition:
            border-color 200ms ease,
            background 200ms ease;

        &:hover {
            border-color: rgba(255, 255, 255, 0.12);
        }

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 22px;
        }

        .info {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .info-icon {
            display: grid;
            flex: 0 0 auto;
            width: 42px;
            height: 42px;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.045);
            color: rgba(255, 255, 255, 0.82);
            transition:
                transform 180ms ease,
                background 180ms ease,
                color 180ms ease;

            svg {
                width: 18px;
                height: 18px;
                transition: transform 180ms ease;
            }

            &:hover {
                transform: rotate(-5deg) scale(1.06);
                background: rgba(255, 255, 255, 0.075);
                color: #ffffff;

                svg {
                    transform: rotate(8deg);
                }
            }
        }

        .label {
            display: block;
            margin-bottom: 3px;
            color: rgba(255, 255, 255, 0.88);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.045em;
            text-transform: uppercase;
        }

        .para {
            color: rgba(255, 255, 255, 0.4);
            font-size: 0.82rem;
            line-height: 1.45;
        }

        .buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            flex-wrap: wrap;
        }

        .button {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-height: 42px;
            padding: 0 14px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 11px;
            background: rgba(255, 255, 255, 0.035);
            color: rgba(255, 255, 255, 0.7);
            font: inherit;
            font-size: 0.8rem;
            font-weight: 650;
            cursor: pointer;
            isolation: isolate;
            transition:
                color 180ms ease,
                border-color 180ms ease,
                background 180ms ease,
                transform 180ms ease,
                box-shadow 180ms ease;

            &::before {
                content: "";
                position: absolute;
                z-index: -1;
                top: 0;
                left: -130%;
                width: 110%;
                height: 100%;
                background: linear-gradient(
                    110deg,
                    transparent,
                    rgba(255, 255, 255, 0.09),
                    transparent
                );
                transform: skewX(-18deg);
                transition: left 380ms ease;
            }

            &:hover:not(:disabled) {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.16);
                background: rgba(255, 255, 255, 0.065);
                color: #ffffff;
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);

                &::before {
                    left: 130%;
                }

                .button-icon {
                    transform: scale(1.12);
                }
            }

            &:active:not(:disabled) {
                transform: scale(0.98);
            }

            &:disabled {
                opacity: 0.28;
                cursor: not-allowed;
            }
        }

        .button-icon {
            display: inline-flex;
            transition: transform 180ms ease;

            svg {
                width: 15px;
                height: 15px;
            }
        }

        .button.primary {
            border-color: rgba(255, 255, 255, 0.14);
            background: #ffffff;
            color: #0b0b0d;

            &:hover:not(:disabled) {
                background: rgba(255, 255, 255, 0.9);
                color: #000000;
            }
        }

        .button.reset:hover:not(:disabled) {
            border-color: rgba(255, 120, 120, 0.2);
            background: rgba(255, 92, 92, 0.07);
            color: #ffb0b0;

            .button-icon svg {
                transform: rotate(-25deg);
            }
        }

        .mode {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mode-title {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.78rem;
            font-weight: 650;

            svg {
                width: 15px;
                height: 15px;
            }
        }

        .mode-options {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            width: min(100%, 600px);
        }

        .mode-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 11px 12px;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 11px;
            background: rgba(255, 255, 255, 0.02);
            cursor: pointer;
            transition:
                transform 180ms ease,
                border-color 180ms ease,
                background 180ms ease;

            input {
                position: absolute;
                width: 1px;
                height: 1px;
                opacity: 0;
                pointer-events: none;
            }

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.14);
                background: rgba(255, 255, 255, 0.045);

                .check {
                    transform: scale(1.08);
                }
            }
        }

        .mode-option.selected {
            border-color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.065);

            .check {
                background: #ffffff;
                color: #09090b;
            }

            strong {
                color: #ffffff;
            }
        }

        .check {
            display: grid;
            flex: 0 0 auto;
            width: 28px;
            height: 28px;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.035);
            color: rgba(255, 255, 255, 0.5);
            transition:
                transform 180ms ease,
                background 180ms ease,
                color 180ms ease;

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .mode-text {
            min-width: 0;

            strong {
                display: block;
                color: rgba(255, 255, 255, 0.7);
                font-size: 0.78rem;
                font-weight: 650;
                transition: color 180ms ease;
            }

            small {
                display: block;
                margin-top: 2px;
                color: rgba(255, 255, 255, 0.34);
                font-size: 0.68rem;
                line-height: 1.4;
            }
        }

        @media (max-width: 900px) {
            .top {
                align-items: flex-start;
                flex-direction: column;
            }

            .buttons {
                width: 100%;
                justify-content: flex-start;
            }

            .mode {
                align-items: flex-start;
                flex-direction: column;
            }

            .mode-options {
                width: 100%;
            }
        }

        @media (max-width: 580px) {
            padding: 14px;

            .buttons {
                display: grid;
                grid-template-columns: 1fr;
            }

            .button {
                width: 100%;
            }

            .mode-options {
                grid-template-columns: 1fr;
            }
        }
    `,
};
