import "./about.css";

const About = () => {
    return (
        <main className="about-page">

            {/* ================= ABOUT HERO ================= */}
            <section className="about-hero">
                <div className="about-container">

                    {/* LEFT CONTENT */}
                    <div className="about-hero__content">

                        <span className="about-eyebrow">
                            ABOUT MYHEALTHMAKER
                        </span>

                        <h1>
                            Discover Better
                            <span> Health & Wellness </span>
                            Choices
                        </h1>

                        <p>
                            MyHealthMaker is a modern health and wellness
                            marketplace designed to help people discover
                            products, resources, and offers that fit their
                            everyday lifestyle.
                        </p>

                        <div className="about-hero__actions">

                            <a
                                href="/#offers"
                                className="about-btn about-btn--primary"
                            >
                                Explore Products
                                <span>→</span>
                            </a>

                            <a
                                href="/contact"
                                className="about-btn about-btn--secondary"
                            >
                                Contact Us
                            </a>

                        </div>
                    </div>

                </div>
            </section>


            {/* ================= INTRO ================= */}
            <section className="about-intro">
                <div className="about-container">

                    <div className="about-intro__layout">

                        {/* LEFT SIDE */}
                        <div className="about-intro__side">

                            <div className="about-intro__index">
                                <span>01</span>
                            </div>

                            <div className="about-intro__side-line"></div>

                            <p>WHO WE ARE</p>

                            {/* IMAGE */}
                            <div className="about-intro__image">
                                <img
                                    src="/images/b6bd3ef5-5206-49cc-b565-c03e860b26d9.png"
                                    alt="Healthy lifestyle and wellness products"
                                />
                            </div>

                        </div>


                        {/* RIGHT SIDE */}
                        <div className="about-intro__main">

                            <div className="about-intro__eyebrow">
                                <span className="about-intro__dot"></span>
                                ABOUT MYHEALTHMAKER
                            </div>

                            <h2>
                                Making health product
                                <br />
                                discovery <span>simpler.</span>
                            </h2>

                            <div className="about-intro__body">

                                <p className="about-intro__lead">
                                    Finding the right health and wellness products
                                    shouldn't feel overwhelming. MyHealthMaker brings
                                    relevant products, resources, and offers together
                                    in one easy-to-explore marketplace.
                                </p>

                                <p>
                                    From health and wellness to beauty, lifestyle, and
                                    everyday essentials, we create a cleaner way to
                                    discover products that fit your interests and needs.
                                </p>

                                <p>
                                    Our goal is simple: make product discovery more
                                    convenient, transparent, and user-friendly.
                                </p>

                            </div>


                            {/* HIGHLIGHTS */}
                            <div className="about-intro__highlights">

                                <div className="about-intro__highlight">
                                    <div className="about-intro__highlight-icon">
                                        ✓
                                    </div>

                                    <div>
                                        <strong>Curated Discovery</strong>
                                        <span>Explore relevant products</span>
                                    </div>
                                </div>


                                <div className="about-intro__highlight">
                                    <div className="about-intro__highlight-icon">
                                        ◉
                                    </div>

                                    <div>
                                        <strong>Easy to Explore</strong>
                                        <span>Simple browsing experience</span>
                                    </div>
                                </div>


                                <div className="about-intro__highlight">
                                    <div className="about-intro__highlight-icon">
                                        ↗
                                    </div>

                                    <div>
                                        <strong>Better Choices</strong>
                                        <span>Discover useful offers</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= VALUES ================= */}
            <section className="about-values">
                <div className="about-container">

                    <div className="about-heading">
                        <span className="about-eyebrow">
                            WHAT WE STAND FOR
                        </span>

                        <h2>
                            Built around a
                            <span> better experience.</span>
                        </h2>

                        <p>
                            Everything we do is focused on creating a cleaner,
                            easier, and more useful product discovery journey.
                        </p>
                    </div>


                    <div className="about-values__grid">

                        {/* 01 */}
                        <article className="about-value-card">

                            <div className="about-value-card__top">
                                <span className="about-value-card__number">
                                    01
                                </span>

                                <span className="about-value-card__line" />
                            </div>

                            <div className="about-value-card__icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="11"
                                        cy="11"
                                        r="6.5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                    <path
                                        d="M16 16L21 21"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M8.5 11H13.5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M11 8.5V13.5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <h3>Curated Discovery</h3>

                            <p>
                                Explore a selection of products and offers organized
                                into simple, easy-to-browse categories.
                            </p>

                            <span className="about-value-card__corner" />

                        </article>


                        {/* 02 */}
                        <article className="about-value-card">

                            <div className="about-value-card__top">
                                <span className="about-value-card__number">
                                    02
                                </span>

                                <span className="about-value-card__line" />
                            </div>

                            <div className="about-value-card__icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12.5L9.2 16.5L19 6.5"
                                        stroke="currentColor"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 5H20"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        opacity=".35"
                                    />
                                </svg>
                            </div>

                            <h3>Simple Experience</h3>

                            <p>
                                Clear navigation, useful information, and a
                                straightforward browsing experience without unnecessary
                                complexity.
                            </p>

                            <span className="about-value-card__corner" />

                        </article>


                        {/* 03 */}
                        <article className="about-value-card">

                            <div className="about-value-card__top">
                                <span className="about-value-card__number">
                                    03
                                </span>

                                <span className="about-value-card__line" />
                            </div>

                            <div className="about-value-card__icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="12"
                                        cy="8"
                                        r="3.2"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                    <path
                                        d="M5.5 20C5.9 16.5 8.1 14.5 12 14.5C15.9 14.5 18.1 16.5 18.5 20"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <h3>User First</h3>

                            <p>
                                Our marketplace experience is designed around helping
                                visitors find what they need with less friction.
                            </p>

                            <span className="about-value-card__corner" />

                        </article>


                        {/* 04 */}
                        <article className="about-value-card">

                            <div className="about-value-card__top">
                                <span className="about-value-card__number">
                                    04
                                </span>

                                <span className="about-value-card__line" />
                            </div>

                            <div className="about-value-card__icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 17L19 7"
                                        stroke="currentColor"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M12 7H19V14"
                                        stroke="currentColor"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <h3>Always Evolving</h3>

                            <p>
                                We continuously improve our marketplace, categories,
                                content, and overall discovery experience.
                            </p>

                            <span className="about-value-card__corner" />

                        </article>

                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section className="about-process">
                <div className="about-process__bg-glow about-process__bg-glow--one"></div>
                <div className="about-process__bg-glow about-process__bg-glow--two"></div>

                <div className="about-container">

                    <div className="about-heading about-heading--center">
                        <span className="about-eyebrow">HOW IT WORKS</span>

                        <h2>
                            Your journey to better
                            <span> choices.</span>
                        </h2>

                        <p>
                            Finding the right health and wellness offer should feel
                            simple, clear, and effortless.
                        </p>
                    </div>


                    <div className="about-process__grid">

                        {/* STEP 01 */}
                        <article className="about-process-card">
                            <div className="about-process-card__number">01</div>

                            <div className="about-process-card__icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                                    <path
                                        d="m16.5 16.5 4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <span className="about-process-card__label">
                                DISCOVER
                            </span>

                            <h3>Browse</h3>

                            <p>
                                Explore carefully selected products and offers
                                across different health and wellness categories.
                            </p>

                            <div className="about-process-card__bottom">
                                <span>01 / 03</span>
                                <span>Explore marketplace</span>
                            </div>
                        </article>


                        {/* CONNECTOR */}
                        <div className="about-process__connector">
                            <span></span>
                            <i>→</i>
                            <span></span>
                        </div>


                        {/* STEP 02 */}
                        <article className="about-process-card about-process-card--active">
                            <div className="about-process-card__number">02</div>

                            <div className="about-process-card__icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="8"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                    <path
                                        d="M12 7v5l3.2 2"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <span className="about-process-card__label">
                                EXPLORE
                            </span>

                            <h3>Compare & Explore</h3>

                            <p>
                                Learn more about available offers, product details,
                                and options before making your decision.
                            </p>

                            <div className="about-process-card__bottom">
                                <span>02 / 03</span>
                                <span>View details</span>
                            </div>
                        </article>


                        {/* CONNECTOR */}
                        <div className="about-process__connector">
                            <span></span>
                            <i>→</i>
                            <span></span>
                        </div>


                        {/* STEP 03 */}
                        <article className="about-process-card">
                            <div className="about-process-card__number">03</div>

                            <div className="about-process-card__icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M5 12h13"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="m13 6 6 6-6 6"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <span className="about-process-card__label">
                                CONTINUE
                            </span>

                            <h3>Learn More</h3>

                            <p>
                                Continue to the provider or offer page to learn
                                more and take the next step.
                            </p>

                            <div className="about-process-card__bottom">
                                <span>03 / 03</span>
                                <span>Take next step</span>
                            </div>
                        </article>

                    </div>

                </div>
            </section>

            {/* ================= MISSION ================= */}
            <section className="about-mission">
                <div className="about-container">

                    <div className="about-mission__box">

                        <div className="about-mission__content">
                            <span className="about-eyebrow">
                                OUR MISSION
                            </span>

                            <h2>
                                Better discovery starts
                                <span> with simplicity.</span>
                            </h2>

                            <p>
                                We believe discovering health and wellness
                                products should not be complicated. MyHealthMaker
                                aims to provide a clean destination where
                                visitors can browse relevant offers and
                                resources in one convenient place.
                            </p>

                            <a
                                href="/#offers"
                                className="about-btn about-btn--light"
                            >
                                Explore Marketplace
                                <span>→</span>
                            </a>
                        </div>

                        <div className="about-mission__graphic">
                            <div className="mission-circle mission-circle--outer" />
                            <div className="mission-circle mission-circle--middle" />
                            <div className="mission-circle mission-circle--inner">
                                <span>+</span>
                            </div>

                            <div className="mission-floating mission-floating--one">
                                Wellness
                            </div>

                            <div className="mission-floating mission-floating--two">
                                Discovery
                            </div>

                            <div className="mission-floating mission-floating--three">
                                Choice
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= DISCLAIMER NOTE ================= */}
            <section className="about-note">
                <div className="about-container">
                    <div className="about-note__inner">

                        <div className="about-note__icon">
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="9"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                />
                                <path
                                    d="M12 10.5V16"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="12"
                                    cy="7.5"
                                    r="1"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div className="about-note__content">
                            <div className="about-note__top">
                                <span className="about-note__label">
                                    IMPORTANT INFORMATION
                                </span>

                                <span className="about-note__verified">
                                    <span></span>
                                    Transparency matters
                                </span>
                            </div>

                            <p>
                                MyHealthMaker provides product discovery and informational
                                resources. We do not provide medical advice, diagnosis, or
                                treatment. Product information and claims are provided by
                                respective merchants or third-party providers.
                            </p>
                        </div>

                        <a
                            href="/health-disclaimer"
                            className="about-note__link"
                        >
                            <span>Health Disclaimer</span>

                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5 12h13"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="m13 6 6 6-6 6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                    </div>
                </div>
            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="about-cta">
                <div className="about-container">
                    <div className="about-cta__box">
                        {/* Decorative Glow Elements */}
                        <div className="about-cta__glow" aria-hidden="true" />
                        <div className="about-cta__grid-overlay" aria-hidden="true" />

                        <div className="about-cta__content">
                            <span className="about-eyebrow">
                                <span className="about-eyebrow__dot" />
                                START EXPLORING
                            </span>

                            <h2>
                                Find something that <br className="desktop-only" />
                                <span className="gradient-text">interests you.</span>
                            </h2>

                            <p>
                                Browse our marketplace and discover curated health, wellness,
                                beauty, and lifestyle offers designed for you.
                            </p>

                            <a href="/#offers" className="about-btn about-btn--primary">
                                <span>Explore Products</span>
                                <svg
                                    className="about-btn__icon"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default About;