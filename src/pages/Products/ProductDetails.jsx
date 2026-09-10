import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    ArrowRight,
    Check,
    ChevronDown,
    Clock3,
    Phone,
    ShieldCheck,
} from "lucide-react";

import campaigns from "../../data/campaigns";
import "./ProductDetails.css";

const PHONE_NUMBER = "+1 (866) 618-4718";
const PHONE_LINK = "tel:+18666184718";

const benefits = [
    {
        title: "Quality Focused",
        text: "Presented with clear product information to make everyday product discovery easier.",
    },
    {
        title: "Easy To Explore",
        text: "A simple way to learn more about a product before visiting the provider or offer.",
    },
    {
        title: "Wellness Focused",
        text: "Organized around health, wellness, beauty, and lifestyle categories.",
    },
    {
        title: "Simple Experience",
        text: "Designed to make product information easier to understand and compare.",
    },
];

const faqs = [
    {
        question: "What is this product?",
        answer:
            "This product is listed on MyHealthMaker as part of our health and wellness discovery marketplace. Product information is provided for general informational purposes and may come from the respective provider or merchant.",
    },
    {
        question: "How can I learn more or get started?",
        answer:
            "You can use the call option on this page to contact the available support or offer line. You can also continue exploring related products through the marketplace.",
    },
    {
        question: "Is this product right for everyone?",
        answer:
            "Product suitability can vary from person to person. Review the provider's information carefully and consult a qualified healthcare professional when appropriate.",
    },
    {
        question: "Where can I find product restrictions?",
        answer:
            "Known campaign restrictions and regional availability are displayed in the Product Details section on this page.",
    },
];

const reviews = [
    {
        name: "Sarah M.",
        text: "The information was easy to understand and helped me learn more about the product.",
    },
    {
        name: "Jessica R.",
        text: "I liked having the important product details in one place before deciding whether to explore the offer.",
    },
    {
        name: "Emily K.",
        text: "The page was simple to navigate and made product discovery much easier.",
    },
];



export default function ProductDetails() {
    const { slug } = useParams();

    const product = campaigns.find(
        (item) => item.slug === slug
    );

    useEffect(() => {
        if (!product) {
            document.title =
                "Product Not Found | MyHealthMaker";
            return;
        }

        document.title = `${product.name} | ${product.category} | MyHealthMaker`;

        const description = `${product.name} in ${product.category}. Explore product information, benefits, details, FAQs, and related wellness offers on MyHealthMaker.`;

        let metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute(
                "name",
                "description"
            );
            document.head.appendChild(metaDescription);
        }

        metaDescription.setAttribute(
            "content",
            description
        );

        return () => {
            document.title = "MyHealthMaker";
        };
    }, [product]);

    if (!product) {
        return (
            <main className="product-details-page">
                <section className="product-not-found">
                    <div className="product-not-found__content">
                        <span>404</span>

                        <h1>Product Not Found</h1>

                        <p>
                            We couldn't find the product you're
                            looking for. Explore the marketplace
                            to discover more wellness products.
                        </p>

                        <Link
                            to="/"
                            className="product-back-btn"
                        >
                            Back to Marketplace
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    const relatedProducts = campaigns
        .filter(
            (item) =>
                item.id !== product.id &&
                item.status === "active"
        )
        .slice(0, 4);

    const galleryImages = product.images?.length
        ? product.images
        : [product.image];

    return (
        <main className="product-details-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="product-detail-hero">

                <div className="product-container">

                    {/* BREADCRUMB */}

                    <nav
                        className="product-breadcrumb"
                        aria-label="Breadcrumb"
                    >
                        <Link to="/">
                            Home
                        </Link>

                        <span>/</span>

                        <Link to="/">
                            {product.category}
                        </Link>

                        <span>/</span>

                        <span>
                            {product.name}
                        </span>
                    </nav>


                    <div className="product-detail-hero__grid">

                        {/* =================================================
                            LEFT
                        ================================================= */}

                        <div className="product-detail-hero__left">

                            <div className="product-image-card">

                                <div className="product-image-card__glow" />

                                {product.badge && (
                                    <span className="product-image-badge">
                                        {product.badge}
                                    </span>
                                )}

                                <img
                                    src={galleryImages[0]}
                                    alt={`${product.name} ${product.category
                                        }`}
                                    className="product-main-image"
                                />

                            </div>


                            {/* PRODUCT INTRO */}

                            <div className="product-intro">

                                <span className="product-eyebrow">
                                    {product.category}
                                </span>

                                <h1>
                                    {product.name}
                                </h1>

                                <p className="product-intro__lead">
                                    {product.description}
                                </p>

                                <p>
                                    Explore the key information,
                                    product details, available
                                    regions, and helpful resources
                                    for {product.name}. MyHealthMaker
                                    is designed to make product
                                    discovery easier by bringing
                                    relevant health and wellness
                                    offers together in one place.
                                </p>


                                <div className="product-highlight-grid">

                                    <div className="product-highlight">
                                        <Check size={17} />
                                        <span>
                                            Easy to explore
                                        </span>
                                    </div>

                                    <div className="product-highlight">
                                        <Check size={17} />
                                        <span>
                                            Clear product information
                                        </span>
                                    </div>

                                    <div className="product-highlight">
                                        <Check size={17} />
                                        <span>
                                            Wellness focused
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT CALL CARD
                        ================================================= */}

                        <aside className="product-call-card">

                            <div className="product-call-card__top">

                                <span className="availability-pill">
                                    <span className="availability-dot" />
                                    Support available
                                </span>

                            </div>


                            <h2>
                                Learn more about{" "}
                                <span>
                                    {product.name}
                                </span>
                            </h2>

                            <p>
                                Have questions about this offer?
                                Use the call option to speak with
                                the available team and learn more.
                            </p>


                            {/* CALL BUTTON */}

                            <a
                                href={PHONE_LINK}
                                className="product-call-button"
                            >
                                <span className="product-call-button__shine" />
                                <span className="product-call-button__icon">
                                    <Phone size={22} />
                                </span>

                                <span className="product-call-button__content">

                                    <small>
                                        Tap to call
                                    </small>

                                    <strong>
                                        {PHONE_NUMBER}
                                    </strong>

                                    <span>
                                        Available during support hours
                                    </span>

                                    <span className="product-call-button__arrow">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>

                                </span>

                            </a>


                            {/* INFO BOX */}

                            <div className="product-call-info">

                                <h3>
                                    Before you call
                                </h3>

                                <div>
                                    <Check size={17} />
                                    <span>
                                        Product or offer name
                                    </span>
                                </div>

                                <div>
                                    <Check size={17} />
                                    <span>
                                        Your questions about the offer
                                    </span>
                                </div>

                                <div>
                                    <Check size={17} />
                                    <span>
                                        Your preferred time to connect
                                    </span>
                                </div>

                            </div>


                            {/* TRUST */}

                            <div className="product-call-trust">

                                <div>
                                    <ShieldCheck size={16} />
                                    Clear product information
                                </div>

                                <div>
                                    <Clock3 size={16} />
                                    Support availability may vary
                                </div>

                            </div>

                        </aside>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRODUCT BENEFITS
            ===================================================== */}

            <section className="product-section product-section--soft">

                <div className="product-container">

                    <div className="product-section__header">

                        <span className="product-section__eyebrow">
                            PRODUCT BENEFITS
                        </span>

                        <h2>
                            Why people choose{" "}
                            <span>
                                {product.name}
                            </span>
                        </h2>

                        <p>
                            Explore the qualities that make this
                            product easy to discover and understand
                            within our wellness marketplace.
                        </p>

                    </div>


                    <div className="product-benefits-grid">

                        {benefits.map((benefit) => (

                            <article
                                className="product-benefit-card"
                                key={benefit.title}
                            >

                                <div className="product-benefit-card__icon">
                                    <Check size={19} />
                                </div>

                                <h3>
                                    {benefit.title}
                                </h3>

                                <p>
                                    {benefit.text}
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRODUCT DETAILS
            ===================================================== */}

            <section className="product-section">

                <div className="product-container">

                    <div className="product-section__header product-section__header--left">

                        <span className="product-section__eyebrow">
                            PRODUCT DETAILS
                        </span>

                        <h2>
                            Everything you need to know
                        </h2>

                        <p>
                            Review the available information for{" "}
                            {product.name} before exploring the
                            associated offer.
                        </p>

                    </div>


                    <div className="product-details-layout">

                        <div className="product-details-main">

                            <div className="details-list">

                                <div className="details-row">

                                    <div className="details-row__number">
                                        01
                                    </div>

                                    <div>
                                        <h3>
                                            Category
                                        </h3>

                                        <p>
                                            {product.category}
                                        </p>
                                    </div>

                                </div>


                                <div className="details-row">

                                    <div className="details-row__number">
                                        02
                                    </div>

                                    <div>
                                        <h3>
                                            Available Regions
                                        </h3>

                                        <p>
                                            {product.allowedGeos ||
                                                "Please check the provider's current availability."}
                                        </p>
                                    </div>

                                </div>


                                <div className="details-row">

                                    <div className="details-row__number">
                                        03
                                    </div>

                                    <div>
                                        <h3>
                                            Campaign Restrictions
                                        </h3>

                                        <p>
                                            {product.restrictions ||
                                                "Please review the provider's current terms and restrictions."}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <aside className="campaign-overview-card">

                            <div className="campaign-overview-card__header">

                                <span>
                                    OFFER OVERVIEW
                                </span>

                                <span className="campaign-status-dot" />

                            </div>


                            <div className="overview-row">
                                <span>Product</span>
                                <strong>
                                    {product.name}
                                </strong>
                            </div>

                            <div className="overview-row">
                                <span>Category</span>
                                <strong>
                                    {product.category}
                                </strong>
                            </div>

                            <div className="overview-row">
                                <span>Conversion</span>
                                <strong>
                                    {product.conversionRate ||
                                        "Available from provider"}
                                </strong>
                            </div>

                            <div className="overview-row">
                                <span>Regions</span>
                                <strong>
                                    {product.allowedGeos ||
                                        "Check availability"}
                                </strong>
                            </div>


                            <div className="overview-note">

                                <ShieldCheck size={18} />

                                <span>
                                    Product information and offer
                                    details may be provided by
                                    the respective merchant or
                                    third-party provider.
                                </span>

                            </div>

                        </aside>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY THIS PRODUCT
            ===================================================== */}

            <section className="product-section product-section--dark">

                <div className="product-container">

                    <div className="why-product-layout">

                        <div className="why-product-copy">

                            <span className="product-dark-eyebrow">
                                WHY THIS PRODUCT
                            </span>

                            <h2>
                                A clearer way to explore{" "}
                                <span>
                                    {product.name}
                                </span>
                            </h2>

                            <p>
                                MyHealthMaker helps people discover
                                health and wellness offers in a
                                simpler, more organized experience.
                            </p>

                            <a
                                href={PHONE_LINK}
                                className="product-dark-btn"
                            >
                                <Phone size={17} />
                                Call to Learn More
                            </a>

                        </div>


                        <div className="why-product-grid">

                            <article className="why-product-card">

                                <span>01</span>

                                <h3>
                                    Easy Discovery
                                </h3>

                                <p>
                                    Find product information in
                                    one organized experience.
                                </p>

                            </article>


                            <article className="why-product-card">

                                <span>02</span>

                                <h3>
                                    Clear Information
                                </h3>

                                <p>
                                    Important details are presented
                                    in a straightforward format.
                                </p>

                            </article>


                            <article className="why-product-card">

                                <span>03</span>

                                <h3>
                                    Simple Navigation
                                </h3>

                                <p>
                                    Move from product details to
                                    related offers without friction.
                                </p>

                            </article>


                            <article className="why-product-card">

                                <span>04</span>

                                <h3>
                                    Marketplace Experience
                                </h3>

                                <p>
                                    Discover more health and wellness
                                    categories in one place.
                                </p>

                            </article>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="product-section">

                <div className="product-container product-faq-container">

                    <div className="product-section__header">

                        <span className="product-section__eyebrow">
                            FAQ
                        </span>

                        <h2>
                            Frequently asked questions
                        </h2>

                        <p>
                            Helpful answers about this product
                            and the information shown on this page.
                        </p>

                    </div>


                    <div className="faq-list">

                        {faqs.map((faq) => (

                            <details
                                className="faq-item"
                                key={faq.question}
                            >

                                <summary>

                                    <span>
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={19}
                                    />

                                </summary>

                                <div className="faq-answer">
                                    <p>
                                        {faq.answer}
                                    </p>
                                </div>

                            </details>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                CUSTOMER REVIEWS
            ===================================================== */}

            <section className="product-section product-section--soft">

                <div className="product-container">

                    <div className="product-section__header">

                        <span className="product-section__eyebrow">
                            CUSTOMER REVIEWS
                        </span>

                        <h2>
                            What customers are saying
                        </h2>

                        <p>
                            Helpful customer feedback about the
                            product discovery experience.
                        </p>

                    </div>


                    <div className="product-reviews-grid">

                        {reviews.map((review) => (

                            <article
                                className="product-review-card"
                                key={review.name}
                            >

                                <div className="product-review-card__person">

                                    <div className="product-review-card__avatar">
                                        {review.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h3>
                                            {review.name}
                                        </h3>

                                        <span>
                                            Customer feedback
                                        </span>
                                    </div>

                                </div>


                                <p>
                                    “{review.text}”
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                YOU MAY ALSO LIKE
            ===================================================== */}

            <section className="product-section">

                <div className="product-container">

                    <div className="related-section-header">

                        <div>
                            <span className="product-section__eyebrow">
                                YOU MAY ALSO LIKE
                            </span>

                            <h2>
                                Explore related products
                            </h2>
                        </div>

                        <Link
                            to="/"
                            className="related-view-all"
                        >
                            View all
                            <ArrowRight size={16} />
                        </Link>

                    </div>


                    <div className="related-products-grid">

                        {relatedProducts.map((related) => (

                            <article
                                key={related.id}
                                className="related-product-card"
                            >

                                {/* IMAGE */}

                                <Link
                                    to={`/product/${related.slug}`}
                                    className="related-product-card__image"
                                >

                                    <img
                                        src={related.image}
                                        alt={`${related.name} ${related.category}`}
                                    />

                                    {related.badge && (
                                        <span>
                                            {related.badge}
                                        </span>
                                    )}

                                </Link>


                                {/* CONTENT */}

                                <div className="related-product-card__content">

                                    <span className="related-category">
                                        {related.category}
                                    </span>

                                    <h3>
                                        {related.name}
                                    </h3>

                                    <p>
                                        {related.description}
                                    </p>


                                    {/* ACTUAL PRODUCT LINK */}

                                    <Link
                                        to={`/product/${related.slug}`}
                                        className="related-card-link"
                                    >
                                        <span>
                                            Explore product
                                        </span>

                                        <ArrowRight size={16} />
                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="product-final-cta">

                <div className="product-container">

                    <div className="product-final-cta__box">

                        <div className="product-final-cta__glow product-final-cta__glow--one" />
                        <div className="product-final-cta__glow product-final-cta__glow--two" />

                        <div className="product-final-cta__content">

                            <span>
                                READY TO LEARN MORE?
                            </span>

                            <h2>
                                Have questions about{" "}
                                <strong>
                                    {product.name}?
                                </strong>
                            </h2>

                            <p>
                                Use the call option to learn more
                                about the available offer and
                                continue your product discovery
                                journey.
                            </p>

                            <a
                                href={PHONE_LINK}
                                className="product-final-call-btn"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}