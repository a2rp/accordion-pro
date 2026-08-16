import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: relative;
        padding: 42px 0 30px;

        .header-content {
            position: relative;
        }

        .top-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 18px;
            padding: 7px 11px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.03);
            color: rgba(255, 255, 255, 0.58);
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            transition:
                color 180ms ease,
                border-color 180ms ease,
                background 180ms ease,
                transform 180ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.15);
                background: rgba(255, 255, 255, 0.055);
                color: #ffffff;

                .label-icon {
                    transform: rotate(-8deg) scale(1.08);
                }

                .label-arrow {
                    transform: translateX(3px);
                }
            }
        }

        .label-icon,
        .label-arrow {
            display: inline-flex;
            transition: transform 180ms ease;
        }

        .label-icon {
            color: rgba(255, 255, 255, 0.9);
        }

        .title-row {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 220px;
            gap: 34px;
            align-items: end;
        }

        .title-content {
            min-width: 0;
        }

        h1 {
            margin: 0;
            color: #ffffff;
            font-size: clamp(3rem, 8vw, 6.4rem);
            font-weight: 800;
            line-height: 0.9;
            letter-spacing: -0.065em;

            span {
                color: rgba(255, 255, 255, 0.32);
                transition: color 220ms ease;
            }

            &:hover span {
                color: rgba(255, 255, 255, 0.58);
            }
        }

        p {
            max-width: 700px;
            margin: 22px 0 0;
            color: rgba(255, 255, 255, 0.56);
            font-size: 1rem;
            line-height: 1.75;
        }

        .status-card {
            padding: 18px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.055),
                rgba(255, 255, 255, 0.015)
            );
            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.04),
                0 18px 45px rgba(0, 0, 0, 0.2);
            transition:
                transform 200ms ease,
                border-color 200ms ease,
                background 200ms ease;

            &:hover {
                transform: translateY(-4px);
                border-color: rgba(255, 255, 255, 0.15);
                background: linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.08),
                    rgba(255, 255, 255, 0.02)
                );

                .status-icon {
                    transform: rotate(-6deg) scale(1.08);
                }

                .progress-info svg {
                    transform: rotate(25deg);
                }
            }
        }

        .status-card-top {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .status-icon {
            display: grid;
            flex: 0 0 auto;
            width: 42px;
            height: 42px;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.055);
            color: #ffffff;
            transition: transform 200ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .status-label {
            display: block;
            margin-bottom: 2px;
            color: rgba(255, 255, 255, 0.42);
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        strong {
            display: block;
            color: #ffffff;
            font-size: 1.45rem;
            line-height: 1;

            span {
                color: rgba(255, 255, 255, 0.32);
                font-size: 0.82rem;
                font-weight: 500;
            }
        }

        .progress-track {
            height: 5px;
            margin-top: 16px;
            overflow: hidden;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.07);
        }

        .progress-value {
            width: ${({ $completion }) => `${$completion}%`};
            height: 100%;
            border-radius: inherit;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.65),
                #ffffff
            );
            transition: width 300ms ease;
        }

        .progress-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 9px;
            color: rgba(255, 255, 255, 0.36);
            font-size: 0.72rem;

            svg {
                width: 13px;
                height: 13px;
                transition: transform 200ms ease;
            }
        }

        .feature-row {
            display: flex;
            flex-wrap: wrap;
            gap: 9px;
            margin-top: 26px;
        }

        .feature-item {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 8px 11px;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.02);
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.78rem;
            font-weight: 600;
            transition:
                color 180ms ease,
                border-color 180ms ease,
                background 180ms ease,
                transform 180ms ease;

            svg {
                width: 14px;
                height: 14px;
                transition: transform 180ms ease;
            }

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.13);
                background: rgba(255, 255, 255, 0.045);
                color: #ffffff;

                svg {
                    transform: scale(1.12);
                }
            }
        }

        @media (max-width: 820px) {
            padding-top: 32px;

            .title-row {
                grid-template-columns: 1fr;
            }

            .status-card {
                width: min(100%, 280px);
            }
        }

        @media (max-width: 520px) {
            padding: 26px 0 24px;

            .top-label {
                margin-bottom: 15px;
                font-size: 0.7rem;
            }

            h1 {
                font-size: clamp(2.8rem, 17vw, 4.5rem);
            }

            p {
                margin-top: 17px;
                font-size: 0.94rem;
                line-height: 1.65;
            }

            .feature-row {
                margin-top: 20px;
            }

            .feature-item {
                font-size: 0.72rem;
            }

            .status-card {
                width: 100%;
            }
        }
    `,
};
