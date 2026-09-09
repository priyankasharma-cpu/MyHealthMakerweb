import CampaignCard from "../CampaignCard/CampaignCard";
import SearchBar from "../SearchBar/SearchBar";

import "./campaign-grid.css"; const CampaignGrid = ({
    campaigns = [],
    searchValue = "",
    onSearchChange,
}) => {
    if (!campaigns.length) {
        return (
            <div className="campaign-grid__empty">
                <div className="campaign-grid__empty-icon">⌕</div>
                <h3>No products found</h3>
                <p>
                    There are no campaigns available in this category yet.
                </p>
            </div>
        );
    }

    return (
        <section className="campaign-grid">
            <div className="campaign-grid__header">
                <div>
                    <span className="campaign-grid__eyebrow">
                        HEALTH MARKETPLACE
                    </span>

                    <h2 className="campaign-grid__title">
                        Featured Products
                    </h2>
                </div>

                <div className="campaign-grid__tools">
                    <SearchBar
                        value={searchValue}
                        onChange={onSearchChange}
                    />

                    <span className="campaign-grid__count">
                        {campaigns.length} Products
                    </span>
                </div>
            </div>

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