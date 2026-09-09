import "./campaign-card.css";

const CampaignCard = ({ campaign }) => {
    if (!campaign) return null;

    const conversionValue =
        parseFloat(campaign.conversionRate) || 0;

    return (
        <article className="campaign-card">

            {/* =====================================================
                PRODUCT IMAGE
            ===================================================== */}

            <div className="campaign-card__image-wrap">

                <img
                    src={campaign.image}
                    alt={campaign.name}
                    className="campaign-card__image"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";

                        e.currentTarget.parentElement.classList.add(
                            "campaign-card__image-fallback"
                        );
                    }}
                />

                {campaign.badge && (
                    <span className="campaign-card__badge">
                        {campaign.badge}
                    </span>
                )}

            </div>


            {/* =====================================================
                MAIN INFORMATION
            ===================================================== */}

            <div className="campaign-card__content">

                {/* CATEGORY + STATUS */}

                <div className="campaign-card__top">

                    <span className="campaign-card__category">
                        {campaign.category}
                    </span>

                    <span className="campaign-card__status">
                        <span className="campaign-card__status-dot" />
                        Active
                    </span>

                </div>


                {/* PRODUCT NAME */}

                <h3 className="campaign-card__title">
                    {campaign.name}
                </h3>


                {/* DESCRIPTION */}

                <p className="campaign-card__description">
                    {campaign.description}
                </p>


                {/* =================================================
                    CONVERSION RATE
                ================================================= */}

                <div className="campaign-card__conversion">

                    <div className="campaign-card__conversion-top">

                        <span>
                            Conversion Rate
                        </span>

                        <strong>
                            {campaign.conversionRate}
                        </strong>

                    </div>

                    <div className="campaign-card__progress">

                        <span
                            style={{
                                width: `${Math.min(
                                    conversionValue * 20,
                                    100
                                )}%`,
                            }}
                        />

                    </div>

                </div>


                {/* =================================================
                    DETAILS
                ================================================= */}

                <div className="campaign-card__details">

                    <div className="campaign-card__detail">

                        <span className="campaign-card__detail-label">
                            Allowed GEOs
                        </span>

                        <span className="campaign-card__detail-value">
                            {campaign.allowedGeos}
                        </span>

                    </div>


                    <div className="campaign-card__detail">

                        <span className="campaign-card__detail-label">
                            Restrictions
                        </span>

                        <span className="campaign-card__detail-value">
                            {campaign.restrictions}
                        </span>

                    </div>

                </div>

            </div>


            {/* =====================================================
                ACTION BUTTONS
            ===================================================== */}

            <div className="campaign-card__actions">

                {/* APPLY NOW */}

                <a
                    href={campaign.applyLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="campaign-card__apply-btn"
                >
                    <span>Apply Now</span>

                    <span className="campaign-card__btn-arrow">
                        →
                    </span>
                </a>


                {/* CALL NOW */}

                <a
                    href={
                        campaign.phone
                            ? `tel:${campaign.phone}`
                            : "8666184718"
                    }
                    className="campaign-card__call-btn"
                >
                    <span>Call Now</span>

                    <span className="campaign-card__phone-icon">
                        ☎
                    </span>
                </a>

            </div>

        </article>
    );
};

export default CampaignCard;