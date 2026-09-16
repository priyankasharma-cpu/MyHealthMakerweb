import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BookOpen,
    Brain,
    HeartPulse,
    Leaf,
    Search,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    Users,
    X,
} from "lucide-react";

import "./health-guides.css";


const categories = [
    { id: "all", label: "All Guides", icon: BookOpen },
    { id: "general", label: "General Wellness", icon: HeartPulse },
    { id: "nutrition", label: "Nutrition", icon: Leaf },
    { id: "healthy-aging", label: "Healthy Aging", icon: Users },
    { id: "mind", label: "Mind & Memory", icon: Brain },
];


const guides = [
    {
        id: 1,
        slug: "building-a-simple-daily-wellness-routine",
        category: "general",
        categoryLabel: "General Wellness",
        title: "Building a Simple Daily Wellness Routine",
        description:
            "Explore practical ways to create a balanced everyday routine around movement, rest, hydration, and healthy habits.",
        readTime: "6 min read",
        featured: true,
    },
    {
        id: 2,
        slug: "understanding-everyday-nutrition",
        category: "nutrition",
        categoryLabel: "Nutrition",
        title: "Understanding Everyday Nutrition",
        description:
            "Learn the basics of balanced nutrition and discover simple ideas for making more informed everyday food choices.",
        readTime: "7 min read",
    },
    {
        id: 3,
        slug: "healthy-habits-for-better-aging",
        category: "healthy-aging",
        categoryLabel: "Healthy Aging",
        title: "Healthy Habits for Better Aging",
        description:
            "A practical overview of everyday habits that can support an active and balanced lifestyle as you get older.",
        readTime: "5 min read",
    },
    {
        id: 4,
        slug: "supporting-memory-and-mental-wellness",
        category: "mind",
        categoryLabel: "Mind & Memory",
        title: "Supporting Memory & Mental Wellness",
        description:
            "Discover everyday lifestyle habits associated with keeping your mind engaged and supporting overall mental wellness.",
        readTime: "6 min read",
    },
    {
        id: 5,
        slug: "how-to-compare-wellness-products",
        category: "general",
        categoryLabel: "Wellness Products",
        title: "How to Compare Wellness Products",
        description:
            "Learn what to look for when reviewing wellness products, including ingredients, labels, directions, and provider information.",
        readTime: "8 min read",
    },
    {
        id: 6,
        slug: "creating-healthier-everyday-habits",
        category: "general",
        categoryLabel: "Healthy Living",
        title: "Creating Healthier Everyday Habits",
        description:
            "Simple strategies for turning small wellness choices into routines that are easier to maintain over time.",
        readTime: "5 min read",
    },
];


const HealthGuides = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");


    const filteredGuides = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return guides.filter((guide) => {
            const categoryMatch =
                activeCategory === "all" ||
                guide.category === activeCategory;

            const searchMatch =
                !query ||
                guide.title.toLowerCase().includes(query) ||
                guide.description.toLowerCase().includes(query) ||
                guide.categoryLabel.toLowerCase().includes(query);

            return categoryMatch && searchMatch;
        });
    }, [activeCategory, searchQuery]);


    return (
        <main className="health-guides-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="health-guides-hero">

                <div className="health-guides-hero__orb health-guides-hero__orb--one" />
                <div className="health-guides-hero__orb health-guides-hero__orb--two" />

                <div className="health-guides-container">

                    <div className="health-guides-hero__content">

                        <div className="health-guides-hero__eyebrow">
                            <BookOpen size={16} />
                            <span>MyHealthMaker Health Guides</span>
                        </div>

                        <h1>
                            Helpful Health &amp;
                            <span> Wellness Guides.</span>
                        </h1>

                        <p>
                            Explore easy-to-understand guides created to help
                            you learn about everyday wellness, healthy habits,
                            nutrition, wellness products, and more.
                        </p>


                        {/* SEARCH */}

                        <div className="health-guides-search">

                            <Search size={21} />

                            <input
                                type="text"
                                placeholder="Search health & wellness guides..."
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
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


                        <div className="health-guides-hero__trust">

                            <span>
                                <ShieldCheck size={16} />
                                Informational Content
                            </span>

                            <span>
                                <BookOpen size={16} />
                                Easy to Understand
                            </span>

                            <span>
                                <HeartPulse size={16} />
                                Wellness Focused
                            </span>

                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <section className="health-guides-content">

                <div className="health-guides-container">

                    {/* HEADER */}

                    <div className="health-guides-header">

                        <div>
                            <span className="health-guides-header__eyebrow">
                                LEARN &amp; DISCOVER
                            </span>

                            <h2>
                                Explore Our Latest
                                <span> Health Guides</span>
                            </h2>
                        </div>

                        <p>
                            Browse educational resources designed to make
                            everyday health and wellness topics easier to
                            understand.
                        </p>

                    </div>


                    {/* CATEGORY FILTER */}

                    <div className="health-guides-categories">

                        {categories.map((category) => {
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
                                        setActiveCategory(category.id)
                                    }
                                >
                                    <Icon size={17} />
                                    {category.label}
                                </button>
                            );
                        })}

                    </div>


                    {/* =========================================
                        FEATURED GUIDE
                    ========================================== */}

                    {activeCategory === "all" && !searchQuery && (
                        <article className="health-featured">

                            <div className="health-featured__visual">

                                <div className="health-featured__pattern" />

                                <div className="health-featured__visual-content">

                                    <div className="health-featured__icon">
                                        <HeartPulse size={42} />
                                    </div>

                                    <span>MYHEALTHMAKER</span>

                                    <strong>
                                        Everyday Wellness
                                    </strong>

                                </div>

                            </div>


                            <div className="health-featured__content">

                                <div className="health-featured__top">
                                    <span>
                                        <Sparkles size={14} />
                                        FEATURED GUIDE
                                    </span>

                                    <small>6 min read</small>
                                </div>

                                <h2>
                                    Building a Simple Daily
                                    Wellness Routine
                                </h2>

                                <p>
                                    Wellness doesn't always require major
                                    lifestyle changes. Learn how simple,
                                    consistent habits around movement,
                                    hydration, rest, and everyday choices can
                                    help you build a more balanced routine.
                                </p>

                                <Link
                                    to="/health-guides/building-a-simple-daily-wellness-routine"
                                    className="health-featured__link"
                                >
                                    Read Full Guide
                                    <ArrowRight size={18} />
                                </Link>

                            </div>

                        </article>
                    )}


                    {/* =========================================
                        GUIDE CARDS
                    ========================================== */}

                    <div className="health-guides-grid">

                        {filteredGuides.map((guide) => (

                            <article
                                className="health-guide-card"
                                key={guide.id}
                            >

                                <div className="health-guide-card__top">

                                    <div className="health-guide-card__icon">
                                        {guide.category === "nutrition" ? (
                                            <Leaf size={25} />
                                        ) : guide.category === "mind" ? (
                                            <Brain size={25} />
                                        ) : guide.category === "healthy-aging" ? (
                                            <Users size={25} />
                                        ) : (
                                            <HeartPulse size={25} />
                                        )}
                                    </div>

                                    <span className="health-guide-card__category">
                                        {guide.categoryLabel}
                                    </span>

                                </div>


                                <div className="health-guide-card__content">

                                    <span className="health-guide-card__time">
                                        {guide.readTime}
                                    </span>

                                    <h3>
                                        {guide.title}
                                    </h3>

                                    <p>
                                        {guide.description}
                                    </p>


                                    <Link
                                        to={`/health-guides/${guide.slug}`}
                                        className="health-guide-card__link"
                                    >
                                        Read Guide

                                        <span>
                                            <ArrowRight size={17} />
                                        </span>
                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>


                    {/* EMPTY */}

                    {filteredGuides.length === 0 && (
                        <div className="health-guides-empty">

                            <Search size={30} />

                            <h3>
                                No guides found
                            </h3>

                            <p>
                                Try another search or explore all of our
                                health and wellness guides.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("all");
                                }}
                            >
                                View All Guides
                            </button>

                        </div>
                    )}

                </div>
            </section>


            {/* =================================================
                INFORMATION / TRUST SECTION
            ================================================= */}

            <section className="health-guides-info">

                <div className="health-guides-container">

                    <div className="health-guides-info__inner">

                        <div className="health-guides-info__icon">
                            <Stethoscope size={28} />
                        </div>

                        <div>
                            <span>IMPORTANT TO KNOW</span>

                            <h2>
                                Wellness information should help you
                                ask better questions.
                            </h2>

                            <p>
                                Our guides are intended for general
                                informational and educational purposes.
                                They are not a substitute for professional
                                medical advice, diagnosis, or treatment.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="health-guides-cta">

                <div className="health-guides-container">

                    <div className="health-guides-cta__inner">

                        <div>
                            <span>
                                <Sparkles size={15} />
                                DISCOVER MORE
                            </span>

                            <h2>
                                Ready to Explore Wellness Products?
                            </h2>

                            <p>
                                Browse health and wellness products and
                                discover available options across our
                                growing marketplace.
                            </p>
                        </div>

                        <Link
                            to="/offers"
                            className="health-guides-cta__button"
                        >
                            Explore Products
                            <ArrowRight size={19} />
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default HealthGuides;