import { useMemo, useState, } from "react";

import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";
import CampaignGrid from "../../components/CampaignGrid/CampaignGrid";
import Pagination from "../../components/Pagination/Pagination";

import campaigns from "../../data/campaigns";

import "./home.css";

const PRODUCTS_PER_PAGE = 10;

const Home = ({
    searchValue = "",
    onSearchChange,
}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    /* =====================================================
       FILTER PRODUCTS
    ===================================================== */

    const filteredCampaigns = useMemo(() => {
        let result = campaigns;

        /* ---------------------------------------------
           CATEGORY FILTER
        --------------------------------------------- */

        if (selectedCategory !== "all") {
            result = result.filter(
                (campaign) =>
                    campaign.categorySlug === selectedCategory
            );
        }

        /* ---------------------------------------------
           SEARCH FILTER
        --------------------------------------------- */

        if (searchValue.trim()) {
            const search = searchValue
                .toLowerCase()
                .trim();

            result = result.filter((campaign) => {
                const searchableText = `
                    ${campaign.name || ""}
                    ${campaign.category || ""}
                    ${campaign.description || ""}
                    ${campaign.allowedGeos || ""}
                    ${campaign.restrictions || ""}
                `.toLowerCase();

                return searchableText.includes(search);
            });
        }

        return result;
    }, [selectedCategory, searchValue]);


    /* =====================================================
       PAGINATION
    ===================================================== */

    const totalPages = Math.ceil(
        filteredCampaigns.length / PRODUCTS_PER_PAGE
    );

    const paginatedCampaigns = useMemo(() => {
        const startIndex =
            (currentPage - 1) * PRODUCTS_PER_PAGE;

        return filteredCampaigns.slice(
            startIndex,
            startIndex + PRODUCTS_PER_PAGE
        );
    }, [filteredCampaigns, currentPage]);

    /* =====================================================
       CATEGORY CHANGE
    ===================================================== */

    const handleCategoryChange = (category) => {
        setSelectedCategory(category.slug);
        setCurrentPage(1);

        setTimeout(() => {
            document
                .getElementById("campaigns")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 50);
    };

    /* =====================================================
       SEARCH CHANGE
    ===================================================== */

    const handleSearchChange = (value) => {
        if (onSearchChange) {
            onSearchChange(value);
        }

        setCurrentPage(1);
    };

    /* =====================================================
       PAGE CHANGE
    ===================================================== */

    const handlePageChange = (page) => {
        setCurrentPage(page);

        setTimeout(() => {
            document
                .getElementById("campaigns")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 50);
    };

    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <main className="home-page">

            {/* =================================================
               HERO
            ================================================= */}

            <HeroCarousel />


            {/* =================================================
               MARKETPLACE
            ================================================= */}

            <section
                id="categories"
                className="home-marketplace"
            >

                {/* =============================================
                   SIDEBAR
                ============================================= */}

                <div className="home-marketplace__sidebar">

                    <CategorySidebar
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />

                </div>


                {/* =============================================
                   PRODUCTS
                ============================================= */}

                <div
                    id="campaigns"
                    className="home-marketplace__products"
                >

                    <CampaignGrid
                        campaigns={paginatedCampaigns}
                        searchValue={searchValue}
                        onSearchChange={handleSearchChange}
                    />


                    {/* =========================================
                       NO RESULTS
                    ========================================= */}

                    {searchValue.trim() &&
                        filteredCampaigns.length === 0 && (
                            <div className="home-no-results">

                                <div className="home-no-results__icon">
                                    🔎
                                </div>

                                <h3>
                                    No offers found
                                </h3>

                                <p>
                                    No products match "
                                    {searchValue}"
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        onSearchChange?.("")
                                    }
                                >
                                    Clear Search
                                </button>

                            </div>
                        )}


                    {/* =========================================
                       PAGINATION
                    ========================================= */}

                    {filteredCampaigns.length > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}

                </div>

            </section>

        </main>
    );
};

export default Home;