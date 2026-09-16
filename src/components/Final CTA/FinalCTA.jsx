import {
    ArrowRight,
    BadgeCheck,
    Headphones,
    Phone,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./final-cta.css";

const FinalCTA = () => {
    return (
        <section className="final-cta" aria-labelledby="final-cta-title">
            <div className="final-cta__glow final-cta__glow--one" />
            <div className="final-cta__glow final-cta__glow--two" />

            <div className="final-cta__container">
                <div className="final-cta__inner">

                    {/* LEFT CONTENT */}
                    <div className="final-cta__content">

                        <div className="final-cta__eyebrow">
                            <Sparkles size={16} />
                            <span>Find What Fits Your Wellness Goals</span>
                        </div>

                        <h2 id="final-cta-title" className="final-cta__title">
                            Discover Health &amp; Wellness
                            <span> Products Made Simple.</span>
                        </h2>

                        <p className="final-cta__description">
                            Explore wellness products and current offers, or
                            speak with our team to learn more about the options
                            available to you.
                        </p>

                        <div className="final-cta__actions">

                            <a
                                href="tel:+18666184718"
                                className="final-cta__button final-cta__button--call"
                            >
                                <span className="final-cta__phone-icon">
                                    <Phone size={20} />
                                </span>

                                <span>
                                    <small>Need help choosing?</small>
                                    <strong>Speak With a Specialist</strong>
                                </span>
                            </a>

                            <Link
                                to="/offers"
                                className="final-cta__button final-cta__button--explore"
                            >
                                Explore Products
                                <ArrowRight size={19} />
                            </Link>

                        </div>

                        <div className="final-cta__trust">

                            <span>
                                <ShieldCheck size={16} />
                                Easy Product Discovery
                            </span>

                            <span>
                                <BadgeCheck size={16} />
                                Curated Wellness Options
                            </span>

                            <span>
                                <Headphones size={16} />
                                Helpful Support
                            </span>

                        </div>
                    </div>


                    {/* RIGHT CALL CARD */}
                    <div className="final-cta__call-card">

                        <div className="final-cta__call-icon">
                            <Phone size={30} />
                        </div>

                        <span className="final-cta__call-label">
                            HAVE QUESTIONS?
                        </span>

                        <h3>
                            We're Here to Help
                        </h3>

                        <p>
                            Connect with our team to learn more about
                            available health and wellness products.
                        </p>

                        <a
                            href="tel:+18666184718"
                            className="final-cta__call-number"
                        >
                            <Phone size={18} />
                            +1 (866) 618-4718
                        </a>

                        <span className="final-cta__call-note">
                            Speak With a Specialist
                        </span>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinalCTA;