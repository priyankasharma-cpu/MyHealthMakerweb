import "./footer.css";

function Footer() {
    const categories = [
        "Beauty",
        "Body Health",
        "Brain Health",
        "Diabetes",
        "Gut Health",
        "Heart Health",
        "Joint Pain",
        "Memory",
    ];

    return (
        <footer className="site-footer">

            {/* =====================================================
                MAIN FOOTER
            ===================================================== */}

            <div className="footer-main">

                <div className="footer-container">

                    {/* BRAND */}

                    <div className="footer-brand">

                        <a href="/" className="footer-logo">
                            <img
                                src="/images/logo/image (7).png"
                                alt="MyHealthMaker"
                                className="footer-logo__image"
                            />
                        </a>

                        <p className="footer-description">
                            MyHealthMaker is a modern health and wellness
                            marketplace designed to help people discover
                            products, resources, and offers that fit their
                            everyday lifestyle.
                        </p>

                        <a
                            href="/"
                            className="footer-primary-btn"
                        >
                            Explore Marketplace

                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5 12H19"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M13 6L19 12L13 18"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                    </div>


                    {/* MARKETPLACE */}

                    <div className="footer-column">

                        <h3>Marketplace</h3>

                        <a href="/">
                            All Offers
                        </a>

                        <a href="/#popular-offers">
                            Popular Offers
                        </a>

                        <a href="/#new-offers">
                            New Arrivals
                        </a>

                        <a href="/#featured">
                            Featured Products
                        </a>

                    </div>


                    {/* CATEGORIES */}

                    <div className="footer-column">

                        <h3>Categories</h3>

                        {categories.map((category) => (
                            <a
                                href={`/#${category
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")}`}
                                key={category}
                            >
                                {category}
                            </a>
                        ))}

                    </div>


                    {/* COMPANY */}

                    <div className="footer-column">

                        <h3>Company</h3>

                        <a href="/#about">
                            About Us
                        </a>

                        <a href="/#health-guides">
                            Health Guides
                        </a>

                        <a href="/contact">
                            Contact Us
                        </a>

                        <a href="/#faq">
                            FAQ
                        </a>

                    </div>

                </div>

            </div>


            {/* =====================================================
                TRUST / PLATFORM STRIP
            ===================================================== */}

            <div className="footer-trust">

                <div className="footer-container footer-trust-inner">

                    <div className="trust-item">

                        <span className="trust-icon">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <div>
                            <strong>Curated Marketplace</strong>
                            <span>
                                Explore selected health & wellness offers
                            </span>
                        </div>

                    </div>


                    <div className="trust-item">

                        <span className="trust-icon">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 3L20 7V12C20 17 16.5 20 12 21C7.5 20 4 17 4 12V7L12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <div>
                            <strong>Privacy Focused</strong>
                            <span>
                                Designed with responsible data practices
                            </span>
                        </div>

                    </div>


                    <div className="trust-item">

                        <span className="trust-icon">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 3V21M3 12H21"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>

                        <div>
                            <strong>Easy to Explore</strong>
                            <span>
                                Simple access to products & resources
                            </span>
                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                HEALTH & MARKETPLACE DISCLAIMER
            ===================================================== */}

            <div className="footer-disclaimer">

                <div className="footer-container">

                    <div className="footer-disclaimer__inner">

                        <div className="footer-disclaimer__icon">

                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 9V13"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M12 17H12.01"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M10.3 3.8L2.9 17.2C2.2 18.5 3.1 20 4.6 20H19.4C20.9 20 21.8 18.5 21.1 17.2L13.7 3.8C13 2.5 11 2.5 10.3 3.8Z"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </div>


                        <div className="footer-disclaimer__content">

                            <h3>
                                Important Information
                            </h3>

                            <p>
                                MyHealthMaker is an online health and wellness
                                marketplace that helps users discover products,
                                resources, and promotional offers from third-party
                                providers. We do not manufacture, sell, or provide
                                medical products, treatments, or healthcare services
                                unless specifically stated.
                            </p>

                            <p>
                                Information presented on this website is provided
                                for general informational and educational purposes
                                only and should not be considered medical advice,
                                diagnosis, or treatment. Product descriptions,
                                claims, pricing, availability, and other information
                                may be provided by or sourced from third-party
                                providers and may change without notice.
                            </p>

                            <p>
                                MyHealthMaker may receive compensation when users
                                click on certain links or take an action through
                                participating offers. This compensation may affect
                                how and where offers are displayed, but it does not
                                change the price you pay to the third-party provider.
                            </p>

                            <p>
                                Before purchasing or using any product, please
                                review the information provided by the applicable
                                provider and consult a qualified healthcare
                                professional when appropriate.
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                BOTTOM FOOTER
            ===================================================== */}

            <div className="footer-bottom">

                <div className="footer-container footer-bottom-inner">

                    <div className="footer-copyright">

                        <span className="footer-copyright__dot" />

                        <p>
                            © {new Date().getFullYear()} MyHealthMaker.
                            All rights reserved.
                        </p>

                    </div>


                    <div className="footer-legal">

                        <a href="/privacy">
                            Privacy Policy
                        </a>

                        <span>•</span>

                        <a href="/terms">
                            Terms & Conditions
                        </a>

                        <span>•</span>

                        <a href="/health-disclaimer">
                            Health Disclaimer
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;