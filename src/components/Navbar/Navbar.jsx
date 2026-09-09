import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    // =====================================================
    // SEARCH OFFERS
    // =====================================================
    const handleSearch = (e) => {
        e.preventDefault();

        const query = search.trim();

        if (!query) {
            navigate("/#offers");
            return;
        }

        // Search query URL me jayegi
        navigate(`/?search=${encodeURIComponent(query)}#offers`);

        setMobileOpen(false);
    };

    // =====================================================
    // SHOP
    // =====================================================
    const handleShop = () => {
        navigate("/#offers");
        setMobileOpen(false);
    };

    return (
        <header className="site-header">

            <div className="header-container">

                {/* =====================================================
                    LOGO
                ===================================================== */}

                <a
                    href="/"
                    className="brand-logo"
                    aria-label="MyHealthMaker Home"
                >
                    <img
                        src="/images/logo/image (7).png"
                        alt="MyHealthMaker"
                        className="brand-logo__image"
                    />
                </a>


                {/* =====================================================
                    DESKTOP NAVIGATION
                ===================================================== */}

                <nav className="desktop-navigation">

                    {/* Marketplace */}
                    <a
                        href="/"
                        className="nav-link active"
                    >
                        Marketplace
                    </a>


                    {/* Find Offers Search */}
                    <form
                        className="nav-search-form"
                        onSubmit={handleSearch}
                    >

                        <svg
                            className="nav-search-icon"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="6.8"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            />

                            <path
                                d="M16.2 16.2L21 21"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                            />
                        </svg>


                        <input
                            type="search"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Find offers..."
                            aria-label="Find offers"
                        />

                    </form>


                    {/* Contact */}
                    <a
                        href="/Contact"
                        className="nav-link"
                    >
                        Contact
                    </a>

                </nav>


                {/* =====================================================
                    RIGHT SIDE ACTIONS
                ===================================================== */}

                <div className="header-actions">


                    {/* =================================================
                        CALL NOW
                    ================================================= */}

                    <a
                        href="tel:+8666184718"
                        className="header-phone"
                        aria-label="Call MyHealthMaker"
                    >

                        <span className="header-phone__icon">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22 16.92V20a2 2 0 0 1-2.18 2
                                    19.79 19.79 0 0 1-8.63-3.07
                                    19.5 19.5 0 0 1-6-6
                                    A19.79 19.79 0 0 1 2.12 4.18
                                    2 2 0 0 1 4.11 2H7
                                    a2 2 0 0 1 2 1.72
                                    c.12.9.33 1.78.62 2.64
                                    a2 2 0 0 1-.45 2.11L8 15
                                    a16 16 0 0 0 6 6l1.53-1.53
                                    a2 2 0 0 1 2.11-.45
                                    c.86.29 1.74.5 2.64.62
                                    A2 2 0 0 1 22 16.92Z"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <span className="header-phone__number">
                            +1 8666184718
                        </span>

                    </a>


                    {/* =================================================
                        EXPLORE OFFERS
                    ================================================= */}

                    <a
                        href="#offers"
                        className="header-cta"
                    >

                        <span>
                            Explore Offers
                        </span>

                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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


                {/* =====================================================
                    MOBILE MENU BUTTON
                ===================================================== */}

                <button
                    type="button"
                    className="mobile-menu-button"
                    onClick={() =>
                        setMobileOpen(!mobileOpen)
                    }
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                >

                    {mobileOpen ? (

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M6 6L18 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            <path
                                d="M18 6L6 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                    ) : (

                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M4 7H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            <path
                                d="M4 12H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            <path
                                d="M4 17H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                    )}

                </button>

            </div>


            {/* =====================================================
                MOBILE NAVIGATION
            ===================================================== */}

            {mobileOpen && (

                <div className="mobile-navigation">

                    {/* Marketplace */}
                    <a
                        href="/"
                        className="mobile-nav-link"
                        onClick={() =>
                            setMobileOpen(false)
                        }
                    >
                        Marketplace
                    </a>


                    {/* Shop */}
                    <button
                        type="button"
                        className="mobile-nav-link mobile-nav-button"
                        onClick={handleShop}
                    >
                        Shop
                    </button>


                    {/* Mobile Search */}
                    <form
                        className="mobile-search-form"
                        onSubmit={handleSearch}
                    >

                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="6.8"
                                stroke="currentColor"
                                strokeWidth="1.7"
                            />

                            <path
                                d="M16.2 16.2L21 21"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                            />
                        </svg>


                        <input
                            type="search"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Find offers..."
                        />

                        <button type="submit">
                            Search
                        </button>

                    </form>


                    {/* Contact */}
                    <a
                        href="/Contact"
                        className="mobile-nav-link"
                        onClick={() =>
                            setMobileOpen(false)
                        }
                    >
                        Contact
                    </a>


                    {/* Call */}
                    <a
                        href="tel:+18005550199"
                        className="mobile-phone"
                        onClick={() =>
                            setMobileOpen(false)
                        }
                    >
                        <span>☎</span>
                        <span>+1 8666184718</span>
                    </a>


                    {/* Explore Offers */}
                    <a
                        href="#offers"
                        className="mobile-header-cta"
                        onClick={() =>
                            setMobileOpen(false)
                        }
                    >
                        Explore Offers

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

            )}

        </header>
    );
}

export default Navbar;