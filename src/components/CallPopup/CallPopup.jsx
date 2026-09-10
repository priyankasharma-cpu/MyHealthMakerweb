import { useEffect, useState } from "react";
import "./CallPopup.css";

const PHONE_NUMBER = "+1 866 618 4718";
const PHONE_LINK = "tel:+18666184718";

const CallPopup = ({ isOpen, onClose }) => {
    const [timeLeft, setTimeLeft] = useState(15 * 60);

    /* =========================================================
       COUNTDOWN TIMER
    ========================================================= */
    useEffect(() => {
        if (!isOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((previousTime) => {
                if (previousTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }

                return previousTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    /* =========================================================
       ESC KEY
    ========================================================= */

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);


    /* =========================================================
       BODY SCROLL LOCK
    ========================================================= */

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);


    if (!isOpen) return null;


    /* =========================================================
       FORMAT TIMER
    ========================================================= */

    const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, "0");

    const seconds = (timeLeft % 60)
        .toString()
        .padStart(2, "0");


    return (
        <div
            className="call-popup-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >

            <div className="call-popup">

                {/* Decorative glow */}
                <div className="call-popup__glow call-popup__glow--one" />
                <div className="call-popup__glow call-popup__glow--two" />


                {/* =================================================
                    CLOSE
                ================================================= */}

                <button
                    type="button"
                    className="call-popup__close"
                    onClick={onClose}
                    aria-label="Close popup"
                >
                    ×
                </button>


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="call-popup__header">

                    <span className="call-popup__eyebrow">
                        QUICK & EASY
                    </span>

                    <h2>
                        Ready to get
                        <span> started?</span>
                    </h2>

                    <p>
                        Have questions about this offer?
                        Speak with our team and get help
                        with the next step.
                    </p>

                </div>


                {/* =================================================
                    PHONE ICON
                ================================================= */}

                <div className="call-popup__phone-circle">
                    <span>☎</span>
                </div>


                {/* =================================================
                    BENEFITS
                ================================================= */}

                <div className="call-popup__benefits">

                    <div className="call-popup__benefit">
                        <span className="call-popup__benefit-icon">
                            ✓
                        </span>

                        <span>
                            Speak with our team
                        </span>
                    </div>


                    <div className="call-popup__benefit">
                        <span className="call-popup__benefit-icon">
                            ⚡
                        </span>

                        <span>
                            Quick assistance
                        </span>
                    </div>


                    <div className="call-popup__benefit">
                        <span className="call-popup__benefit-icon">
                            ✓
                        </span>

                        <span>
                            Simple & convenient
                        </span>
                    </div>

                </div>


                {/* =================================================
                    TIMER
                ================================================= */}

                <div className="call-popup__timer-label">
                    CALL NOW BEFORE THIS OFFER ENDS
                </div>

                <div className="call-popup__timer">

                    <div className="call-popup__time-box">
                        <strong>{minutes}</strong>
                        <span>MIN</span>
                    </div>

                    <span className="call-popup__timer-colon">
                        :
                    </span>

                    <div className="call-popup__time-box">
                        <strong>{seconds}</strong>
                        <span>SEC</span>
                    </div>

                </div>


                {/* =================================================
                    CALL CTA
                ================================================= */}

                <a
                    href={PHONE_LINK}
                    className="call-popup__call-button"
                >

                    <span className="call-popup__call-icon">
                        ☎
                    </span>

                    <span className="call-popup__call-content">
                        <small>
                            Tap to call — free, no obligation
                        </small>

                        <strong>
                            {PHONE_NUMBER}
                        </strong>
                    </span>

                    <span className="call-popup__call-arrow">
                        →
                    </span>

                </a>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="call-popup__footer">
                    <span>🔒</span>
                    Your information is safe with us
                </div>

            </div>

        </div>
    );
};

export default CallPopup;