import { useMemo, useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    CircleHelp,
    Headphones,
    HeartPulse,
    PackageSearch,
    Phone,
    Search,
    ShieldCheck,
    Sparkles,
    X,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./faq.css";


const faqCategories = [
    {
        id: "general",
        label: "General",
        icon: CircleHelp,
    },
    {
        id: "products",
        label: "Products",
        icon: PackageSearch,
    },
    {
        id: "wellness",
        label: "Wellness",
        icon: HeartPulse,
    },
    {
        id: "privacy",
        label: "Privacy",
        icon: ShieldCheck,
    },
];


const faqs = [
    {
        id: 1,
        category: "general",
        question: "What is MyHealthMaker?",
        answer:
            "MyHealthMaker is a health and wellness discovery platform designed to make it easier to explore products, resources, and available offers across a variety of wellness categories.",
    },
    {
        id: 2,
        category: "general",
        question: "How does MyHealthMaker work?",
        answer:
            "Browse our available categories and product pages to learn more about different wellness options. You can explore product information online or contact our team when additional product guidance is available.",
    },
    {
        id: 3,
        category: "general",
        question: "Do I need an account to browse products?",
        answer:
            "No. You can browse the products, categories, and available offers featured on MyHealthMaker without creating an account.",
    },

    {
        id: 4,
        category: "products",
        question: "What types of products can I discover?",
        answer:
            "MyHealthMaker features products and offers across multiple health and wellness categories, including everyday wellness, body health, beauty, men's health, women's health, joint support, heart health, gut health, and other lifestyle-focused categories.",
    },
    {
        id: 5,
        category: "products",
        question: "How can I learn more about a product?",
        answer:
            "Select a product to visit its details page, where you can review available information, features, and related options. Where provided, you can also use the contact option to learn more.",
    },
    {
        id: 6,
        category: "products",
        question: "Are all products available directly from MyHealthMaker?",
        answer:
            "Some products or offers may be provided by third-party brands, partners, or providers. When applicable, MyHealthMaker may direct you to the relevant provider to continue your product journey.",
    },
    {
        id: 7,
        category: "products",
        question: "Can product availability or offers change?",
        answer:
            "Yes. Product availability, promotions, eligibility requirements, pricing, and other offer details may change. Review the current information provided for the specific product or provider before making a decision.",
    },

    {
        id: 8,
        category: "wellness",
        question: "Does MyHealthMaker provide medical advice?",
        answer:
            "No. Information on MyHealthMaker is provided for general informational and product-discovery purposes and is not a substitute for professional medical advice, diagnosis, or treatment.",
    },
    {
        id: 9,
        category: "wellness",
        question: "How do I know which wellness product is right for me?",
        answer:
            "Individual needs can vary. You can compare available product information and features on MyHealthMaker. For questions involving your health, medications, symptoms, or medical conditions, consult an appropriate qualified healthcare professional.",
    },
    {
        id: 10,
        category: "wellness",
        question: "Can I speak with someone about available products?",
        answer:
            "Where phone assistance is available, you can use the contact options displayed on MyHealthMaker to speak with a representative and learn more about available product information and next steps.",
    },

    {
        id: 11,
        category: "privacy",
        question: "How is my information handled?",
        answer:
            "We take privacy seriously. Information submitted through the website is handled according to our Privacy Policy. You can review the policy for more information about data collection, use, and applicable disclosures.",
    },
    {
        id: 12,
        category: "privacy",
        question: "Where can I read your website policies?",
        answer:
            "You can review our Privacy Policy and Terms & Conditions using the links available throughout the website and in the footer.",
    },
];


const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [openFAQ, setOpenFAQ] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");


    const filteredFAQs = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return faqs.filter((faq) => {
            const matchesCategory =
                activeCategory === "all" ||
                faq.category === activeCategory;

            const matchesSearch =
                !query ||
                faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);


    const handleCategory = (category) => {
        setActiveCategory(category);
        setOpenFAQ(null);
    };


    return (
        <main className="faq-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="faq-hero">
                <div className="faq-hero__glow faq-hero__glow--one" />
                <div className="faq-hero__glow faq-hero__glow--two" />

                <div className="faq-container">

                    <div className="faq-hero__content">

                        <div className="faq-hero__eyebrow">
                            <Sparkles size={15} />
                            <span>Help Center</span>
                        </div>

                        <h1>
                            Questions?
                            <span> We’re Here to Help.</span>
                        </h1>

                        <p>
                            Find helpful information about MyHealthMaker,
                            wellness products, available offers, privacy,
                            and how our platform works.
                        </p>


                        {/* SEARCH */}

                        <div className="faq-search">

                            <Search
                                size={21}
                                className="faq-search__icon"
                            />

                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
                                placeholder="Search your question..."
                                aria-label="Search frequently asked questions"
                            />

                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    aria-label="Clear search"
                                >
                                    <X size={18} />
                                </button>
                            )}

                        </div>


                        <div className="faq-hero__trust">

                            <span>
                                <ShieldCheck size={16} />
                                Clear Information
                            </span>

                            <span>
                                <HeartPulse size={16} />
                                Wellness Focused
                            </span>

                            <span>
                                <Headphones size={16} />
                                Helpful Support
                            </span>

                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
                FAQ CONTENT
            ================================================= */}

            <section className="faq-content">
                <div className="faq-container">

                    <div className="faq-section-header">

                        <div>
                            <span className="faq-section-eyebrow">
                                FREQUENTLY ASKED QUESTIONS
                            </span>

                            <h2>
                                Everything you need to
                                <span> know.</span>
                            </h2>
                        </div>

                        <p>
                            Browse common questions or select a category
                            to quickly find the information you need.
                        </p>

                    </div>


                    {/* CATEGORY FILTERS */}

                    <div className="faq-categories">

                        <button
                            type="button"
                            className={
                                activeCategory === "all"
                                    ? "active"
                                    : ""
                            }
                            onClick={() => handleCategory("all")}
                        >
                            <Sparkles size={17} />
                            All Questions
                        </button>


                        {faqCategories.map((category) => {
                            const Icon = category.icon;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    className={
                                        activeCategory === category.id
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleCategory(category.id)
                                    }
                                >
                                    <Icon size={17} />
                                    {category.label}
                                </button>
                            );
                        })}

                    </div>


                    {/* FAQ GRID */}

                    <div className="faq-layout">

                        <div className="faq-list">

                            {filteredFAQs.length > 0 ? (
                                filteredFAQs.map((faq, index) => {

                                    const isOpen =
                                        openFAQ === faq.id;

                                    return (
                                        <article
                                            key={faq.id}
                                            className={`faq-item ${isOpen ? "active" : ""
                                                }`}
                                        >

                                            <button
                                                type="button"
                                                className="faq-item__question"
                                                onClick={() =>
                                                    setOpenFAQ(
                                                        isOpen
                                                            ? null
                                                            : faq.id
                                                    )
                                                }
                                                aria-expanded={isOpen}
                                            >

                                                <span className="faq-item__number">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <span className="faq-item__title">
                                                    {faq.question}
                                                </span>

                                                <span className="faq-item__toggle">
                                                    <ChevronDown size={20} />
                                                </span>

                                            </button>


                                            <div className="faq-item__answer">
                                                <div>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>

                                        </article>
                                    );
                                })
                            ) : (
                                <div className="faq-empty">

                                    <div className="faq-empty__icon">
                                        <Search size={27} />
                                    </div>

                                    <h3>No matching questions found</h3>

                                    <p>
                                        Try another keyword or browse all
                                        frequently asked questions.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearchQuery("");
                                            setActiveCategory("all");
                                        }}
                                    >
                                        View All Questions
                                    </button>

                                </div>
                            )}

                        </div>


                        {/* =====================================
                            SUPPORT CARD
                        ====================================== */}

                        <aside className="faq-support-card">

                            <div className="faq-support-card__icon">
                                <Headphones size={28} />
                            </div>

                            <span className="faq-support-card__label">
                                NEED MORE HELP?
                            </span>

                            <h3>
                                Still Have a Question?
                            </h3>

                            <p>
                                Speak with our team to learn more about
                                products and available wellness options.
                            </p>

                            <a
                                href="tel:+18666184718"
                                className="faq-support-card__call"
                            >
                                <Phone size={19} />

                                <span>
                                    Speak With a Specialist
                                </span>
                            </a>

                            <div className="faq-support-card__divider">
                                <span>OR</span>
                            </div>

                            <Link
                                to="/contact"
                                className="faq-support-card__contact"
                            >
                                Contact Our Team
                                <ArrowRight size={17} />
                            </Link>

                            <div className="faq-support-card__note">
                                <ShieldCheck size={15} />
                                <span>
                                    Helpful product information and support
                                </span>
                            </div>

                        </aside>

                    </div>

                </div>
            </section>

        </main>
    );
};

export default FAQ;