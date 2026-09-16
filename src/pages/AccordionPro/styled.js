import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: relative;
        min-height: 100vh;
        overflow: hidden;
        padding: 32px 20px;
        background:
            radial-gradient(
                circle at 15% 10%,
                rgba(255, 255, 255, 0.07),
                transparent 28%
            ),
            radial-gradient(
                circle at 85% 20%,
                rgba(124, 92, 255, 0.09),
                transparent 28%
            ),
            linear-gradient(145deg, #050506 0%, #090a0d 45%, #050506 100%);
        color: #ffffff;

        .glow {
            position: fixed;
            z-index: 0;
            width: 420px;
            height: 420px;
            border-radius: 50%;
            opacity: 0.18;
            filter: blur(120px);
            pointer-events: none;
        }

        .glow-one {
            top: -180px;
            left: -160px;
            background: rgba(255, 255, 255, 0.34);
        }

        .glow-two {
            right: -170px;
            bottom: -190px;
            background: rgba(110, 86, 255, 0.42);
        }

        .container {
            position: relative;
            z-index: 1;
            width: min(1120px, 100%);
            margin: 0 auto;
        }

        .label-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 14px;
        }

        .page-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.035);
            color: rgba(255, 255, 255, 0.62);
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.02em;
            backdrop-filter: blur(14px);
            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.04),
                0 10px 28px rgba(0, 0, 0, 0.18);
            transition:
                transform 180ms ease,
                border-color 180ms ease,
                background 180ms ease,
                color 180ms ease;

            svg {
                width: 15px;
                height: 15px;
                transition: transform 180ms ease;
            }

            &:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 255, 255, 0.16);
                background: rgba(255, 255, 255, 0.06);
                color: #ffffff;

                svg {
                    transform: rotate(-7deg) scale(1.1);
                }
            }
        }

        .main {
            position: relative;
            overflow: hidden;
            padding: 0 30px 26px;
            border: 1px solid rgba(255, 255, 255, 0.085);
            border-radius: 28px;
            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.035),
                    rgba(255, 255, 255, 0.008)
                ),
                rgba(10, 11, 14, 0.88);
            backdrop-filter: blur(22px);
            box-shadow:
                0 35px 100px rgba(0, 0, 0, 0.42),
                inset 0 1px 0 rgba(255, 255, 255, 0.045);
            transition:
                border-color 220ms ease,
                box-shadow 220ms ease;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 12%;
                width: 76%;
                height: 1px;
                background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(255, 255, 255, 0.24),
                    transparent
                );
                pointer-events: none;
            }

            &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                width: 38%;
                height: 260px;
                background: linear-gradient(90deg, transparent, rgba(10, 11, 14, 0.2)), url("/accordion-pro/images/feature-1.jpg") center / cover;
                opacity: 0.08;
                pointer-events: none;
                mix-blend-mode: screen;
            }

            &:hover {
                border-color: rgba(255, 255, 255, 0.12);
                box-shadow:
                    0 42px 120px rgba(0, 0, 0, 0.48),
                    inset 0 1px 0 rgba(255, 255, 255, 0.055);
            }
        }

        @media (max-width: 720px) {
            padding: 22px 14px;

            .label-row {
                flex-wrap: wrap;
            }

            .main {
                padding: 0 18px 20px;
                border-radius: 22px;
            }
        }

        @media (max-width: 480px) {
            padding: 14px 10px;

            .label-row {
                margin-bottom: 10px;
            }

            .page-label:last-child {
                display: none;
            }

            .main {
                padding: 0 14px 16px;
                border-radius: 18px;
            }
        }
    `,
};
