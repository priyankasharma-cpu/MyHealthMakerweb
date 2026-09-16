import { useEffect, useRef, useState } from "react";
import "./hero-carousel.css";

/* =========================================================
   HERO BANNERS
========================================================= */

const heroBanners = [
    {
        id: 1,
        image: "/hero-banners/herobnner1.png",
        product: "GLP-1 Medication",
        link: "https://example.com/glp1",
    },

    {
        id: 2,
        image: "/hero-banners/herobnner7.png",
        product: "Weight Loss",
        link: "https://example.com/weight-loss",
    },

    {
        id: 3,
        image: "/hero-banners/herobannernew.webp",
        product: "Beauty",
        link: "https://example.com/weight-loss",
    },

    {
        id: 4,
        image: "/hero-banners/newherobanner.webp",
        product: "Beauty",
        link: "https://example.com/weight-loss",
    },

    {
        id: 7,
        image: "/hero-banners/herobnner6.png",
        product: "Body Health",
        link: "https://example.com/weight-loss",
    },

    {
        id: 8,
        image: "/hero-banners/herobnner8.png",
        product: "Male Enhancement",
        link: "https://example.com/weight-loss",
    },
];


/* =========================================================
   HERO CAROUSEL
========================================================= */

const HeroCarousel = () => {
    const totalSlides = heroBanners.length;

    /*
        Infinite carousel structure:

        [LAST CLONE]
        [SLIDE 1]
        [SLIDE 2]
        [SLIDE 3]
        ...
        [LAST SLIDE]
        [FIRST CLONE]
    */

    const infiniteSlides =
        totalSlides > 1
            ? [
                heroBanners[totalSlides - 1],
                ...heroBanners,
                heroBanners[0],
            ]
            : heroBanners;


    /* =====================================================
       STATES
    ===================================================== */

    // Start from first REAL slide
    // because index 0 is cloned last slide
    const [currentSlide, setCurrentSlide] = useState(
        totalSlides > 1 ? 1 : 0
    );

    const [enableTransition, setEnableTransition] =
        useState(true);

    const resetTimeoutRef = useRef(null);


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    const nextSlide = () => {
        if (totalSlides <= 1) return;

        setEnableTransition(true);

        setCurrentSlide((prev) => prev + 1);
    };


    /* =====================================================
       PREVIOUS SLIDE
    ===================================================== */

    const prevSlide = () => {
        if (totalSlides <= 1) return;

        setEnableTransition(true);

        setCurrentSlide((prev) => prev - 1);
    };


    /* =====================================================
       DOT NAVIGATION
    ===================================================== */

    const goToSlide = (index) => {
        if (totalSlides <= 1) return;

        setEnableTransition(true);

        /*
            +1 because first position
            is cloned last slide
        */

        setCurrentSlide(index + 1);
    };


    /* =====================================================
       AUTO PLAY
       Automatically move every 3 seconds
       Does NOT pause on hover
    ===================================================== */

    useEffect(() => {
        if (totalSlides <= 1) return;

        const autoPlayInterval = setInterval(() => {
            setEnableTransition(true);

            setCurrentSlide((prev) => prev + 1);
        }, 3000);

        return () => {
            clearInterval(autoPlayInterval);
        };
    }, [totalSlides]);


    /* =====================================================
       TRUE INFINITE LOOP
    ===================================================== */

    const handleTransitionEnd = () => {
        if (totalSlides <= 1) return;

        /*
            Reached cloned FIRST slide.

            Example:

            Last real slide
                ↓
            First clone
                ↓
            Instantly jump to first REAL slide
        */

        if (currentSlide === totalSlides + 1) {
            setEnableTransition(false);

            setCurrentSlide(1);

            if (resetTimeoutRef.current) {
                clearTimeout(resetTimeoutRef.current);
            }

            resetTimeoutRef.current = setTimeout(() => {
                setEnableTransition(true);
            }, 50);

            return;
        }


        /*
            Reached cloned LAST slide
            while pressing previous arrow.
        */

        if (currentSlide === 0) {
            setEnableTransition(false);

            setCurrentSlide(totalSlides);

            if (resetTimeoutRef.current) {
                clearTimeout(resetTimeoutRef.current);
            }

            resetTimeoutRef.current = setTimeout(() => {
                setEnableTransition(true);
            }, 50);
        }
    };


    /* =====================================================
       CLEANUP TIMEOUT
    ===================================================== */

    useEffect(() => {
        return () => {
            if (resetTimeoutRef.current) {
                clearTimeout(resetTimeoutRef.current);
            }
        };
    }, []);


    /* =====================================================
       ACTIVE DOT
    ===================================================== */

    let activeDot = currentSlide - 1;

    // Last clone
    if (currentSlide === 0) {
        activeDot = totalSlides - 1;
    }

    // First clone
    if (currentSlide === totalSlides + 1) {
        activeDot = 0;
    }


    /* =====================================================
       NO BANNERS
    ===================================================== */

    if (!heroBanners.length) {
        return null;
    }


    /* =====================================================
       COMPONENT
    ===================================================== */

    return (
        <section
            className="hero-carousel"
            aria-label="Featured health products"
        >
            <div className="hero-carousel__container">

                {/* =========================================
                    SLIDE TRACK
                ========================================= */}

                <div
                    className={`hero-carousel__track ${!enableTransition
                            ? "hero-carousel__track--no-transition"
                            : ""
                        }`}
                    style={{
                        transform: `translateX(-${currentSlide * 100
                            }%)`,
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >

                    {infiniteSlides.map((banner, index) => (
                        <div
                            className="hero-carousel__slide"
                            key={`${banner.id}-${index}`}
                        >

                            {/* IMAGE */}

                            <img
                                src={banner.image}
                                alt={banner.product}
                                className="hero-carousel__image"
                                draggable="false"
                            />


                            {/* EXPLORE BUTTON */}

                            <a
                                href={banner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-carousel__explore"
                            >
                                <span>Explore More</span>

                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12H19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M13 6L19 12L13 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>

                        </div>
                    ))}
                </div>


                {/* =========================================
                    LEFT ARROW
                ========================================= */}

                {totalSlides > 1 && (
                    <button
                        type="button"
                        className="
                            hero-carousel__arrow
                            hero-carousel__arrow--left
                        "
                        onClick={prevSlide}
                        aria-label="Previous banner"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                )}


                {/* =========================================
                    RIGHT ARROW
                ========================================= */}

                {totalSlides > 1 && (
                    <button
                        type="button"
                        className="
                            hero-carousel__arrow
                            hero-carousel__arrow--right
                        "
                        onClick={nextSlide}
                        aria-label="Next banner"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                )}


                {/* =========================================
                    DOT NAVIGATION
                ========================================= */}

                {totalSlides > 1 && (
                    <div
                        className="hero-carousel__dots"
                        aria-label="Carousel navigation"
                    >
                        {heroBanners.map(
                            (banner, index) => (
                                <button
                                    key={banner.id}
                                    type="button"
                                    className={`hero-carousel__dot ${activeDot === index
                                            ? "is-active"
                                            : ""
                                        }`}
                                    onClick={() =>
                                        goToSlide(index)
                                    }
                                    aria-label={`Go to ${banner.product
                                        } banner`}
                                />
                            )
                        )}
                    </div>
                )}

            </div>
        </section>
    );
};

export default HeroCarousel;