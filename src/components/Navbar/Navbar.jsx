import { useState } from "react";
import "./navbar.css";

function Navbar({ searchValue = "", onSearchChange }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();

        const query = searchValue.trim();

        if (!query) {
            window.location.href = "/#offers";
            return;
        }

        window.location.href =
            `/?search=${encodeURIComponent(query)}#offers`;

        setMobileOpen(false);
    };

    const closeMobile = () => {
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

                    <a
                        href="/"
                        className="nav-link nav-link--active"
                    >
                        Home
                    </a>

                    <a
                        href="/offers"
                        className="nav-link"
                    >
                        Products
                    </a>

                    <a
                        href="/about"
                        className="nav-link"
                    >
                        About Us
                    </a>

                    <a
                        href="/contact"
                        className="nav-link"
                    >
                        Contact
                    </a>


                    {/* SEARCH */}

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
                            value={searchValue}
                            onChange={(e) =>
                                onSearchChange?.(e.target.value)
                            }
                            placeholder="Find offers..."
                            aria-label="Find offers"
                        />

                        {searchValue && (
                            <button
                                type="button"
                                className="nav-search-clear"
                                onClick={() =>
                                    onSearchChange?.("")
                                }
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}

                    </form>

                </nav>


                {/* =====================================================
                    RIGHT ACTIONS
                ===================================================== */}

                <div className="header-actions">

                    {/* PHONE */}

                    <a
                        href="tel:+18666184718"
                        className="header-phone"
                        aria-label="Call MyHealthMaker"
                    >

                        <span className="header-phone__icon">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
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
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <span className="header-phone__number">
                            +1 866 618 4718
                        </span>

                    </a>


                    {/* EXPLORE */}

                    <a
                        href="/#offers"
                        className="header-cta"
                    >
                        <span>Explore Offers</span>

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


                {/* MOBILE MENU */}

                <button
                    type="button"
                    className="mobile-menu-button"
                    onClick={() =>
                        setMobileOpen(!mobileOpen)
                    }
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                >

                    {mobileOpen ? "×" : "☰"}

                </button>

            </div>


            {/* =====================================================
                MOBILE NAVIGATION
            ===================================================== */}

            {mobileOpen && (
                <div className="mobile-navigation">

                    <a
                        href="/"
                        className="mobile-nav-link"
                        onClick={closeMobile}
                    >
                        Home
                    </a>

                    <a
                        href="/offers"
                        className="mobile-nav-link"
                        onClick={closeMobile}
                    >
                        Products
                    </a>

                    <a
                        href="/about"
                        className="mobile-nav-link"
                        onClick={closeMobile}
                    >
                        About Us
                    </a>

                    <a
                        href="/contact"
                        className="mobile-nav-link"
                        onClick={closeMobile}
                    >
                        Contact
                    </a>


                    {/* MOBILE SEARCH */}

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
                            value={searchValue}
                            onChange={(e) =>
                                onSearchChange?.(e.target.value)
                            }
                            placeholder="Find offers..."
                        />

                        <button type="submit">
                            Search
                        </button>

                    </form>


                    {/* MOBILE PHONE */}

                    <a
                        href="tel:+18666184718"
                        className="mobile-phone"
                        onClick={closeMobile}
                    >
                        <span>☎</span>
                        <span>+1 866 618 4718</span>
                    </a>


                    <a
                        href="/#offers"
                        className="mobile-header-cta"
                        onClick={closeMobile}
                    >
                        Explore Offers
                        <span>→</span>
                    </a>

                </div>
            )}

        </header>
    );
}

export default Navbar;