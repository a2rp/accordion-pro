import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        margin-top: 10px;

        .top-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 15px;
        }

        .title-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .title-icon {
            display: grid;
            width: 40px;
            height: 40px;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.035);
            color: rgba(255, 255, 255, 0.78);
            transition:
                transform 180ms ease,
                background 180ms ease,
                color 180ms ease;

            svg {
                width: 17px;
                height: 17px;
            }

            &:hover {
                transform: rotate(-5deg) scale(1.06);
                background: rgba(255, 255, 255, 0.065);
                color: #ffffff;
            }
        }

        .label {
            display: block;
            margin-bottom: 2px;
            color: rgba(255, 255, 255, 0.34);
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        h2 {
            margin: 0;
            color: rgba(255, 255, 255, 0.88);
            font-size: 1rem;
            font-weight: 650;
        }

        .count {
            padding: 6px 10px;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.025);
            color: rgba(255, 255, 255, 0.38);
            font-size: 0.72rem;
            font-weight: 600;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .item {
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.075);
            border-radius: 16px;
            background:
                linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.035),
                    rgba(255, 255, 255, 0.012)
                ),
                rgba(255, 255, 255, 0.01);
            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.025),
                0 12px 30px rgba(0, 0, 0, 0.12);
            transition:
                transform 200ms ease,
                border-color 200ms ease,
                background 200ms ease,
                box-shadow 200ms ease;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 3px;
                height: 100%;
                background: #ffffff;
                opacity: 0;
                transform: scaleY(0.35);
                transform-origin: center;
                transition:
                    opacity 200ms ease,
                    transform 200ms ease;
            }

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.13);
                background:
                    linear-gradient(
                        145deg,
                        rgba(255, 255, 255, 0.055),
                        rgba(255, 255, 255, 0.016)
                    ),
                    rgba(255, 255, 255, 0.012);
                box-shadow:
                    inset 0 1px 0 rgba(255, 255, 255, 0.035),
                    0 18px 38px rgba(0, 0, 0, 0.16);
            }
        }

        .item.open {
            border-color: rgba(255, 255, 255, 0.14);
            background:
                linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.065),
                    rgba(255, 255, 255, 0.018)
                ),
                rgba(255, 255, 255, 0.012);

            &::before {
                opacity: 0.8;
                transform: scaleY(1);
            }

            .dot {
                fill: currentColor;
                color: #ffffff;
                transform: scale(0.72);
            }

            .arrow {
                transform: rotate(180deg);
                background: rgba(255, 255, 255, 0.08);
                color: #ffffff;
            }
        }

        .item-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            width: 100%;
            padding: 19px 20px;
            background: transparent;
            color: inherit;
            font: inherit;
            text-align: left;
            cursor: pointer;

            &:focus-visible {
                box-shadow:
                    inset 0 0 0 2px rgba(255, 255, 255, 0.28),
                    inset 0 0 0 5px rgba(255, 255, 255, 0.04);
            }

            &:hover {
                .number {
                    color: #ffffff;
                    transform: translateX(2px);
                }

                .arrow {
                    border-color: rgba(255, 255, 255, 0.14);
                    color: #ffffff;
                }

                h3 {
                    color: #ffffff;
                }
            }
        }

        .item-info {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            min-width: 0;
        }

        .number {
            flex: 0 0 auto;
            padding-top: 3px;
            color: rgba(255, 255, 255, 0.24);
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            transition:
                color 180ms ease,
                transform 180ms ease;
        }

        .item-text {
            min-width: 0;
        }

        .item-title {
            display: flex;
            align-items: center;
            gap: 9px;
        }

        .dot {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            color: rgba(255, 255, 255, 0.25);
            transition:
                color 180ms ease,
                fill 180ms ease,
                transform 180ms ease;
        }

        h3 {
            margin: 0;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.96rem;
            font-weight: 650;
            line-height: 1.4;
            transition: color 180ms ease;
        }

        .item-text p {
            margin: 6px 0 0;
            color: rgba(255, 255, 255, 0.38);
            font-size: 0.82rem;
            line-height: 1.55;
        }

        .arrow {
            display: grid;
            flex: 0 0 auto;
            width: 36px;
            height: 36px;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.025);
            color: rgba(255, 255, 255, 0.46);
            transition:
                transform 220ms ease,
                border-color 180ms ease,
                background 180ms ease,
                color 180ms ease;

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            opacity: 0;
            transition:
                grid-template-rows 300ms ease,
                opacity 220ms ease;
        }

        .item.open .panel {
            grid-template-rows: 1fr;
            opacity: 1;
        }

        .panel-inner {
            min-height: 0;
            overflow: hidden;
        }

        .line {
            height: 1px;
            margin: 0 20px 18px 67px;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.1),
                transparent
            );
        }

        .content {
            padding: 0 20px 21px 67px;
            color: rgba(255, 255, 255, 0.52);
            font-size: 0.9rem;
            line-height: 1.75;

            p + p {
                margin-top: 12px;
            }

            a {
                color: #ffffff;
                text-decoration: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                transition:
                    border-color 180ms ease,
                    opacity 180ms ease;

                &:hover {
                    border-color: #ffffff;
                    opacity: 0.78;
                }
            }

            code {
                padding: 2px 6px;
                border: 1px solid rgba(255, 255, 255, 0.07);
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.045);
                color: rgba(255, 255, 255, 0.85);
                font-size: 0.86em;
            }
        }

        @media (max-width: 600px) {
            .top-row {
                align-items: flex-start;
            }

            .item-button {
                padding: 17px 15px;
            }

            .item-info {
                gap: 11px;
            }

            .number {
                display: none;
            }

            .content {
                padding: 0 15px 18px 42px;
            }

            .line {
                margin: 0 15px 16px 42px;
            }

            .arrow {
                width: 34px;
                height: 34px;
            }
        }

        @media (max-width: 420px) {
            .title-icon {
                display: none;
            }

            .item-button {
                gap: 10px;
            }

            .item-text p {
                font-size: 0.78rem;
            }

            .content {
                padding-left: 15px;
            }

            .line {
                margin-left: 15px;
            }
        }
    `,
};
