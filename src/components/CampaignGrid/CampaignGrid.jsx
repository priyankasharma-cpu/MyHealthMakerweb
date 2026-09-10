import CampaignCard from "../CampaignCard/CampaignCard";
import SearchBar from "../SearchBar/SearchBar";

import "./campaign-grid.css";

const CampaignGrid = ({
    campaigns = [],
    searchValue = "",
    onSearchChange,
}) => {
    if (!campaigns.length) {
        return (
            <section className="campaign-grid campaign-grid--empty">
                <div className="campaign-grid__empty">
                    <div className="campaign-grid__empty-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            />
                            <path
                                d="m21 21-4.35-4.35"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M8.5 11h5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <span className="campaign-grid__empty-label">
                        NO MATCHING OFFERS
                    </span>

                    <h3>No products found</h3>

                    <p>
                        We couldn't find any offers matching your current
                        search or category.
                    </p>

                    {onSearchChange && (
                        <button
                            type="button"
                            className="campaign-grid__reset"
                            onClick={() => onSearchChange("")}
                        >
                            <span>Clear search</span>

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 12h14"
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
                        </button>
                    )}
                </div>
            </section>
        );
    }

    return (
        <section className="campaign-grid">
            {/* =====================================================
                HEADER
            ===================================================== */}

            <div className="campaign-grid__header">
                <div className="campaign-grid__heading">
                    <div className="campaign-grid__eyebrow-wrap">
                        <span className="campaign-grid__eyebrow-dot"></span>

                        <span className="campaign-grid__eyebrow">
                            HEALTH MARKETPLACE
                        </span>
                    </div>

                    <h2 className="campaign-grid__title">
                        Featured Products
                    </h2>

                    <p className="campaign-grid__subtitle">
                        Discover health offers selected for you.
                    </p>
                </div>

                <div className="campaign-grid__tools">
                    <div className="campaign-grid__search">
                        <SearchBar
                            value={searchValue}
                            onChange={onSearchChange}
                        />
                    </div>

                    <div className="campaign-grid__count">
                        <span className="campaign-grid__count-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                />
                                <path
                                    d="M8 8h8M8 12h8M8 16h5"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>

                        <span>
                            <strong>{campaigns.length}</strong>
                            {campaigns.length === 1
                                ? " Product"
                                : " Products"}
                        </span>
                    </div>
                </div>
            </div>

            {/* =====================================================
                PRODUCT LIST
            ===================================================== */}

            <div className="campaign-grid__list">
                {campaigns.map((campaign) => (
                    <CampaignCard
                        key={campaign.id}
                        campaign={campaign}
                    />
                ))}
            </div>
        </section>
    );
};

export default CampaignGrid;