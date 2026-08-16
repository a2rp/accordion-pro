import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        margin-top: 34px;
        padding-top: 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.07);

        .top {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(320px, 1.2fr);
            gap: 32px;
            align-items: start;
        }

        .author {
            display: flex;
            align-items: flex-start;
            gap: 14px;
        }

        .author-icon {
            display: grid;
            flex: 0 0 auto;
            width: 42px;
            height: 42px;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.035);
            color: rgba(255, 255, 255, 0.7);
            transition:
                transform 180ms ease,
                background 180ms ease,
                color 180ms ease;

            svg {
                width: 17px;
                height: 17px;
                transition: transform 180ms ease;
            }

            &:hover {
                transform: translateY(-3px) rotate(-5deg);
                background: rgba(255, 255, 255, 0.07);
                color: #ffffff;

                svg {
                    transform: scale(1.12);
                }
            }
        }

        .author-text {
            min-width: 0;
        }

        .label {
            display: block;
            margin-bottom: 4px;
            color: rgba(255, 255, 255, 0.35);
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        h2 {
            color: rgba(255, 255, 255, 0.92);
            font-size: 1rem;
            font-weight: 700;
        }

        .author p {
            max-width: 420px;
            margin-top: 7px;
            color: rgba(255, 255, 255, 0.4);
            font-size: 0.8rem;
            line-height: 1.6;
        }

        .links {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
        }

        .link {
            display: flex;
            align-items: center;
            gap: 9px;
            min-height: 42px;
            padding: 0 12px;
            border: 1px solid rgba(255, 255, 255, 0.065);
            border-radius: 11px;
            background: rgba(255, 255, 255, 0.02);
            color: rgba(255, 255, 255, 0.55);
            font-size: 0.78rem;
            font-weight: 600;
            text-decoration: none;
            transition:
                transform 180ms ease,
                border-color 180ms ease,
                background 180ms ease,
                color 180ms ease,
                box-shadow 180ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.13);
                background: rgba(255, 255, 255, 0.05);
                color: #ffffff;
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);

                .link-icon {
                    transform: scale(1.1) rotate(-5deg);
                }

                .open-icon {
                    transform: translate(2px, -2px);
                    opacity: 1;
                }
            }
        }

        .link-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            transition: transform 180ms ease;

            svg {
                width: 15px;
                height: 15px;
            }
        }

        .open-icon {
            width: 13px;
            height: 13px;
            margin-left: auto;
            opacity: 0.35;
            transition:
                transform 180ms ease,
                opacity 180ms ease;
        }

        .support {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            margin-top: 22px;
            padding: 14px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .support-title {
            display: flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.44);
            font-size: 0.76rem;
            font-weight: 650;

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .support-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 8px;
        }

        .support-links a {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 7px 10px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 9px;
            background: rgba(255, 255, 255, 0.018);
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.72rem;
            font-weight: 600;
            text-decoration: none;
            transition:
                transform 180ms ease,
                color 180ms ease,
                background 180ms ease,
                border-color 180ms ease;

            svg {
                width: 12px;
                height: 12px;
                transition: transform 180ms ease;
            }

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.12);
                background: rgba(255, 255, 255, 0.045);
                color: #ffffff;

                svg {
                    transform: translate(2px, -2px);
                }
            }
        }

        .bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            padding-top: 16px;
            color: rgba(255, 255, 255, 0.25);
            font-size: 0.68rem;
            text-align: center;
        }

        .dot {
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 820px) {
            .top {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 600px) {
            .support {
                align-items: flex-start;
                flex-direction: column;
            }

            .support-links {
                justify-content: flex-start;
            }

            .bottom {
                flex-wrap: wrap;
            }
        }

        @media (max-width: 430px) {
            .links {
                grid-template-columns: 1fr;
            }

            .author {
                gap: 11px;
            }

            .link {
                min-height: 40px;
            }
        }

        h2 a {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: rgba(255, 255, 255, 0.92);
            text-decoration: none;
            transition:
                color 180ms ease,
                transform 180ms ease;

            svg {
                width: 13px;
                height: 13px;
                opacity: 0.4;
                transition:
                    opacity 180ms ease,
                    transform 180ms ease;
            }

            &:hover {
                color: #ffffff;
                transform: translateX(2px);

                svg {
                    opacity: 1;
                    transform: translate(2px, -2px);
                }
            }
        }

        .support-title {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.44);
            font-size: 0.76rem;
            font-weight: 650;
            text-decoration: none;
            transition:
                color 180ms ease,
                transform 180ms ease;

            svg {
                width: 14px;
                height: 14px;
                transition: transform 180ms ease;
            }

            &:hover {
                color: #ffffff;
                transform: translateY(-2px);

                svg:last-child {
                    transform: translate(2px, -2px);
                }
            }
        }

        .bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            padding-top: 16px;
            color: rgba(255, 255, 255, 0.3);
            font-size: 0.72rem;
            text-align: center;

            a {
                color: rgba(255, 255, 255, 0.65);
                font-weight: 650;
                text-decoration: none;
                transition: color 180ms ease;

                &:hover {
                    color: #ffffff;
                }
            }
        }
    `,
};
