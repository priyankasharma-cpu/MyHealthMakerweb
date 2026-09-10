import { Phone } from "lucide-react";
import "./FloatingActions.css";

const PHONE_NUMBER = "1234567890";
const WHATSAPP_NUMBER = "1234567890";

const FloatingActions = () => {
    return (
        <div className="floating-actions">

            {/* ================= WHATSAPP ================= */}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-action floating-whatsapp"
                aria-label="Chat with us on WhatsApp"
            >
                <span className="floating-action__icon">

                    {/* WhatsApp Logo */}
                    <svg
                        viewBox="0 0 32 32"
                        width="25"
                        height="25"
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="M16.01 3.2c-7.06 0-12.79 5.73-12.79 12.79
                            0 2.25.59 4.45 1.72 6.38L3.1 28.8l6.58-1.72
                            a12.74 12.74 0 0 0 6.33 1.68h.01c7.05 0
                            12.78-5.73 12.78-12.78S23.07 3.2 16.01 3.2Zm0
                            23.35h-.01a10.58 10.58 0 0 1-5.39-1.47l-.39-.23
                            -3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 1 1
                            8.9 4.88Zm5.8-7.95c-.32-.16-1.9-.94-2.2-1.05
                            -.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04
                            1.27-.19.22-.38.25-.7.08-.33-.16-1.38-.51
                            -2.63-1.63-.97-.86-1.63-1.92-1.82-2.25
                            -.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57
                            .16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57
                            -.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.55
                            -.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14
                            1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.22
                            2.3 3.51 5.58 4.92.78.34 1.39.55 1.86.7
                            .78.25 1.49.21 2.05.13.63-.09 1.9-.78
                            2.17-1.53.27-.76.27-1.41.19-1.54
                            -.08-.14-.3-.22-.63-.38Z"
                        />
                    </svg>

                </span>

                <span className="floating-action__label">
                    WhatsApp
                </span>
            </a>


            {/* ================= DIRECT CALL ================= */}
            <a
                href={`tel:+${PHONE_NUMBER}`}
                className="floating-action floating-call"
                aria-label="Call us directly"
            >
                <span className="floating-action__icon">
                    <Phone
                        size={23}
                        strokeWidth={2.5}
                    />
                </span>

                <span className="floating-action__label">
                    Call Us
                </span>
            </a>

        </div>
    );
};

export default FloatingActions;