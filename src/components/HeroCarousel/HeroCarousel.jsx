import { useEffect, useState } from "react";
import "./hero-carousel.css";

const heroBanners = [
    {
        id: 1,
        image: "/public/hero-banners/herobnner1.png",
        product: "GLP-1 Medication",
        link: "https://example.com/glp1",
    },

    // Future banners yahan add karna
    {
        id: 2,
        image: "/public/hero-banners/herobnner7.png",
        product: "Weight Loss",
        link: "https://example.com/weight-loss",
    },


    {
        id: 3,
        image: "/public/hero-banners/herobanner2.png",
        product: "Beauty",
        link: "https://example.com/weight-loss",
    },


    {
        id: 4,
        image: "/public/hero-banners/herobanner3.png",
        product: "Beauty",
        link: "https://example.com/weight-loss",
    },

    {
        id: 5,
        image: "/public/hero-banners/herobanner4.png",
        product: "Brain Health",
        link: "https://example.com/weight-loss",
    },

    {
        id: 6,
        image: "/public/hero-banners/herobanner5.png",
        product: "Beauty",
        link: "https://example.com/weight-loss",
    },

    {
        id: 7,
        image: "/public/hero-banners/herobnner6.png",
        product: "Body Health",
        link: "https://example.com/weight-loss",
    },

    {
        id: 8,
        image: "/public/hero-banners/herobnner8.png",
        product: "Male Enhancement",
        link: "https://example.com/weight-loss",
    },



];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalSlides = heroBanners.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + totalSlides) % totalSlides
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (isPaused || totalSlides <= 1) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, totalSlides]);

    if (!heroBanners.length) {
        return null;
    }

    return (
        <section className="hero-carousel">
            <div
                className="hero-carousel__container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* ==============================
                    SLIDES
                ============================== */}

                <div
                    className="hero-carousel__track"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {heroBanners.map((banner) => (
                        <div
                            className="hero-carousel__slide"
                            key={banner.id}
                        >
                            <img
                                src={banner.image}
                                alt={banner.product}
                                className="hero-carousel__image"
                            />

                            {/* ==============================
                                EXPLORE MORE
                            ============================== */}

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

                {/* ==============================
                    LEFT ARROW
                ============================== */}

                {totalSlides > 1 && (
                    <button
                        type="button"
                        className="hero-carousel__arrow hero-carousel__arrow--left"
                        onClick={prevSlide}
                        aria-label="Previous banner"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
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

                {/* ==============================
                    RIGHT ARROW
                ============================== */}

                {totalSlides > 1 && (
                    <button
                        type="button"
                        className="hero-carousel__arrow hero-carousel__arrow--right"
                        onClick={nextSlide}
                        aria-label="Next banner"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
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

                {/* ==============================
                    DOTS
                ============================== */}

                {totalSlides > 1 && (
                    <div className="hero-carousel__dots">
                        {heroBanners.map((banner, index) => (
                            <button
                                key={banner.id}
                                type="button"
                                className={`hero-carousel__dot ${currentSlide === index
                                    ? "is-active"
                                    : ""
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to banner ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroCarousel;