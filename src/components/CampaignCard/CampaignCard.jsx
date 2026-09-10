import { useState } from "react";
import CallPopup from "../CallPopup/CallPopup";
import "./campaign-card.css";

// const PHONE_NUMBER = "+1 866 618 4718";
const PHONE_LINK = "tel:+18666184718";

const CampaignCard = ({ campaign }) => {

    const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);

    if (!campaign) return null;

    const conversionValue =
        parseFloat(campaign.conversionRate) || 0;


    return (
        <>
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


                    {/* CONVERSION RATE */}

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


                    {/* DETAILS */}

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

                    {/* VIEW DETAILS */}

                    <a
                        href={`/product/${campaign.slug}`}
                        className="campaign-card__details-btn"
                    >
                        <span>
                            View Details
                        </span>

                        <span className="campaign-card__btn-arrow">
                            →
                        </span>
                    </a>


                    {/* APPLY NOW */}

                    <a
                        href={campaign.applyLink || PHONE_LINK}
                        className="campaign-card__apply-btn"
                        onClick={(event) => {
                            event.preventDefault();
                            setIsCallPopupOpen(true);
                        }}
                    >
                        <span>
                            Apply Now
                        </span>

                        <span className="campaign-card__btn-arrow">
                            ↗
                        </span>
                    </a>


                    {/* CALL NOW */}

                    <a
                        href={
                            campaign.phone
                                ? `tel:${campaign.phone}`
                                : PHONE_LINK
                        }
                        className="campaign-card__call-btn"
                    >
                        <span>
                            Call Now
                        </span>

                        <span className="campaign-card__phone-icon">
                            ☎
                        </span>
                    </a>

                </div>

            </article>


            {/* =========================================================
                CALL POPUP
            ========================================================= */}

            <CallPopup
                isOpen={isCallPopupOpen}
                onClose={() => setIsCallPopupOpen(false)}
            />

        </>
    );
};

export default CampaignCard;