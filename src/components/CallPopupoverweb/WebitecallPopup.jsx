
import { useEffect, useState } from "react";
import {
    Phone,
    X,
    ShieldCheck,
    Clock3,
    Headphones
} from "lucide-react";

import "./WebitecallPopup.css";

const PHONE_NUMBER = "+1 866 618 4718";

function WebitecallPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after 1 minute
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        // Show popup when user is about to leave the website
        const handleExitIntent = (event) => {
            if (event.clientY <= 5) {
                setIsOpen(true);
            }
        };

        document.addEventListener("mouseout", handleExitIntent);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("mouseout", handleExitIntent);
        };
    }, []);

    if (!isOpen) return null;

    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
    };

    return (
        <div className="WebitecallPopup-overlay">

            <div className="WebitecallPopup">

                {/* Close Button */}
                <button
                    className="WebitecallPopup-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close call popup"
                >
                    <X size={18} />
                </button>

                {/* Top Green Area */}
                <div className="WebitecallPopup__top">

                    <div className="WebitecallPopup__ring">

                        <div className="WebitecallPopup__ring-pulse" />

                        <div className="WebitecallPopup__phone">
                            <Phone
                                size={30}
                                strokeWidth={2.4}
                            />
                        </div>

                    </div>

                    <div className="WebitecallPopup__available">
                        <span />
                        Available to help
                    </div>

                </div>

                {/* Content */}
                <div className="WebitecallPopup__content">

                    <span className="WebitecallPopup__eyebrow">
                        LET'S CONNECT
                    </span>

                    <h2>
                        Have questions?
                        <br />
                        <strong>We're here to help.</strong>
                    </h2>

                    <p>
                        Need help choosing the right health and wellness offer?
                        Our team is happy to help you find the information
                        you're looking for.
                    </p>

                    {/* Trust Features */}
                    <div className="WebitecallPopup__features">

                        <div className="WebitecallPopup__feature">
                            <ShieldCheck size={17} />
                            <span>Trusted support</span>
                        </div>

                        <div className="WebitecallPopup__feature">
                            <Clock3 size={17} />
                            <span>Quick response</span>
                        </div>

                        <div className="WebitecallPopup__feature">
                            <Headphones size={17} />
                            <span>Friendly assistance</span>
                        </div>

                    </div>

                    {/* Call Button */}
                    <button
                        className="WebitecallPopup__button"
                        onClick={handleCall}
                        type="button"
                    >
                        <span className="WebitecallPopup__button-icon">
                            <Phone size={19} />
                        </span>

                        <span className="WebitecallPopup__button-text">
                            <small>Speak with our team</small>
                            <strong>Call Now</strong>
                        </span>

                        <span className="WebitecallPopup__button-arrow">
                            →
                        </span>
                    </button>

                    {/* Phone Number */}
                    <div className="WebitecallPopup__number">
                        {PHONE_NUMBER}
                    </div>

                    {/* Note */}
                    <p className="WebitecallPopup__note">
                        No pressure. Just helpful guidance.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default WebitecallPopup;
