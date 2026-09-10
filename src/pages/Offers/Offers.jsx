import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Search,
    Sparkles,
    SlidersHorizontal,
    X,
} from "lucide-react";

import campaigns from "../../data/campaigns";
import "./Offers.css";


/* =========================================================
   CONSTANTS
========================================================= */

const PRODUCTS_PER_PAGE = 10;

const categories = [
    "All",
    "Beauty",
    "Body Health",
    "Brain Health",
    "Diabetes",
    "Gut Health",
    "Heart Health",
    "Joint Pain",
    "Lung Health",
    "Memory",
    "Men's Health",
    "Women's Health",
    "Weight Loss",
];


/* =========================================================
   OFFERS PAGE
========================================================= */

function Offers() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);


    /* =====================================================
       FILTER PRODUCTS
    ===================================================== */

    const filteredProducts = useMemo(() => {

        const query = searchQuery.trim().toLowerCase();

        return campaigns.filter((product) => {

            const matchesCategory =
                selectedCategory === "All" ||
                product.category?.toLowerCase() ===
                selectedCategory.toLowerCase();

            const matchesSearch =
                !query ||
                product.name?.toLowerCase().includes(query) ||
                product.category?.toLowerCase().includes(query) ||
                product.description?.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });

    }, [selectedCategory, searchQuery]);


    /* =====================================================
       PAGINATION
    ===================================================== */

    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredProducts.length /
            PRODUCTS_PER_PAGE
        )
    );


    const visibleProducts = useMemo(() => {

        const start =
            (currentPage - 1) *
            PRODUCTS_PER_PAGE;

        return filteredProducts.slice(
            start,
            start + PRODUCTS_PER_PAGE
        );

    }, [filteredProducts, currentPage]);




    /* =====================================================
       CATEGORY CHANGE
    ===================================================== */

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);

        setTimeout(() => {
            document
                .getElementById("offers-grid")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 50);
    };


    /* =====================================================
       CLEAR SEARCH
    ===================================================== */

    const clearSearch = () => {
        setSearchQuery("");
    };


    /* =====================================================
       PAGE CHANGE
    ===================================================== */

    const changePage = (page) => {

        if (
            page < 1 ||
            page > totalPages
        ) {
            return;
        }

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    /* =====================================================
       PAGE NUMBERS
    ===================================================== */

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );


    return (
        <main className="offers-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="offers-hero">

                <div className="offers-container">

                    <div className="offers-hero__content">

                        <div className="offers-eyebrow">
                            <Sparkles size={14} />

                            <span>
                                EXPLORE OUR OFFERS
                            </span>
                        </div>


                        <h1>
                            Discover Health &
                            <span>
                                Wellness Offers
                            </span>
                        </h1>


                        <p>
                            Explore carefully selected health and
                            wellness products designed to help you
                            discover options that fit your everyday
                            lifestyle.
                        </p>


                        <a
                            href="#offers-grid"
                            className="offers-hero__button"
                        >
                            Explore Offers

                            <ArrowRight size={17} />
                        </a>

                    </div>


                    {/* Decorative visual */}

                    <div className="offers-hero__visual">

                        <div className="offers-orbit offers-orbit--one" />
                        <div className="offers-orbit offers-orbit--two" />

                        <div className="offers-hero__floating-card">

                            <Sparkles size={20} />

                            <div>
                                <strong>
                                    Curated wellness
                                </strong>

                                <span>
                                    Products & offers
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                TRUST STRIP
            ================================================= */}

            <section className="offers-trust">

                <div className="offers-container">

                    <div className="offers-trust-grid">

                        <div className="offers-trust-item">

                            <span className="offers-trust-number">
                                {campaigns.length}+
                            </span>

                            <span>
                                Curated Offers
                            </span>

                        </div>


                        <div className="offers-trust-item">

                            <span className="offers-trust-number">
                                12
                            </span>

                            <span>
                                Wellness Categories
                            </span>

                        </div>


                        <div className="offers-trust-item">

                            <span className="offers-trust-number">
                                100%
                            </span>

                            <span>
                                Easy Product Discovery
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                OFFERS SECTION
            ================================================= */}

            <section
                className="offers-products-section"
                id="offers-grid"
            >

                <div className="offers-container">


                    {/* SECTION HEADER */}

                    <div className="offers-section-header">

                        <div>

                            <span className="offers-section-eyebrow">
                                OUR COLLECTION
                            </span>

                            <h2>
                                Explore available offers
                            </h2>

                            <p>
                                Find products across categories
                                made for everyday health and wellness.
                            </p>

                        </div>


                        <div className="offers-result-count">

                            <strong>
                                {filteredProducts.length}
                            </strong>

                            <span>
                                {filteredProducts.length === 1
                                    ? "offer"
                                    : "offers"}
                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        FILTER BAR
                    ================================================= */}

                    <div className="offers-filter-wrapper">


                        {/* CATEGORY */}

                        <div className="offers-category-scroll">

                            <div className="offers-category-icon">
                                <SlidersHorizontal size={15} />
                            </div>

                            {categories.map((category) => (

                                <button
                                    key={category}
                                    type="button"
                                    className={
                                        selectedCategory === category
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleCategoryChange(category)
                                    }
                                >
                                    {category}
                                </button>

                            ))}

                        </div>


                        {/* SEARCH */}

                        <div className="offers-search">

                            <Search size={17} />

                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(event) => {
                                    setSearchQuery(event.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search health & wellness offers..."
                                aria-label="Search offers"
                            />

                            {searchQuery && (

                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    aria-label="Clear search"
                                    className="offers-search-clear"
                                >
                                    <X size={15} />
                                </button>

                            )}

                        </div>

                    </div>


                    {/* =================================================
                        PRODUCT GRID
                    ================================================= */}

                    {visibleProducts.length > 0 ? (

                        <div className="offers-grid">

                            {visibleProducts.map((product) => (

                                <article
                                    key={product.id}
                                    className="offer-card"
                                >


                                    {/* IMAGE */}

                                    <Link
                                        to={`/product/${product.slug}`}
                                        className="offer-card__image"
                                    >

                                        <img
                                            src={product.image}
                                            alt={`${product.name} ${product.category}`}
                                            loading="lazy"
                                        />

                                        {product.badge && (

                                            <span className="offer-card__badge">
                                                {product.badge}
                                            </span>

                                        )}

                                    </Link>


                                    {/* CONTENT */}

                                    <div className="offer-card__content">

                                        <span className="offer-card__category">
                                            {product.category}
                                        </span>


                                        <h3>
                                            {product.name}
                                        </h3>


                                        <p>
                                            {product.description}
                                        </p>


                                        <Link
                                            to={`/product/${product.slug}`}
                                            className="offer-card__link"
                                        >

                                            <span>
                                                Explore Product
                                            </span>

                                            <ArrowRight size={16} />

                                        </Link>

                                    </div>

                                </article>

                            ))}

                        </div>

                    ) : (

                        /* =================================================
                           EMPTY STATE
                        ================================================= */

                        <div className="offers-empty">

                            <div className="offers-empty__icon">
                                <Search size={25} />
                            </div>

                            <h3>
                                No offers found
                            </h3>

                            <p>
                                Try another category or search
                                term to discover more products.
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setSearchQuery("");
                                }}
                            >
                                View All Offers
                            </button>

                        </div>

                    )}


                    {/* =================================================
                        PAGINATION
                    ================================================= */}

                    {filteredProducts.length > PRODUCTS_PER_PAGE && (

                        <div className="offers-pagination">

                            <button
                                type="button"
                                disabled={currentPage === 1}
                                onClick={() =>
                                    changePage(currentPage - 1)
                                }
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={17} />
                                Previous
                            </button>


                            <div className="offers-page-numbers">

                                {pageNumbers.map((page) => (

                                    <button
                                        key={page}
                                        type="button"
                                        className={
                                            currentPage === page
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            changePage(page)
                                        }
                                    >
                                        {page}
                                    </button>

                                ))}

                            </div>


                            <button
                                type="button"
                                disabled={
                                    currentPage === totalPages
                                }
                                onClick={() =>
                                    changePage(currentPage + 1)
                                }
                            >
                                Next
                                <ChevronRight size={17} />
                            </button>

                        </div>

                    )}

                </div>

            </section>


            {/* =================================================
                BOTTOM CTA
            ================================================= */}

            <section className="offers-bottom-cta">

                <div className="offers-container">

                    <div className="offers-bottom-cta__inner">

                        <div>

                            <span>
                                FIND YOUR NEXT WELLNESS OPTION
                            </span>

                            <h2>
                                Find an Offer That Fits You
                            </h2>

                            <p>
                                Explore health and wellness products
                                in one convenient place.
                            </p>

                        </div>


                        <button
                            type="button"
                            onClick={() =>
                                document
                                    .getElementById("offers-grid")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                            }
                        >
                            Browse All Offers

                            <ArrowRight size={17} />
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Offers;