import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        contactConsent: false,
    });

    const [activeFaq, setActiveFaq] = useState(null);

    // US Office Direct Support Number
    const phoneNumber = "+18666184718";

    const faqs = [
        {
            question: "How long does it take to get a response?",
            answer:
                "Our US-based support team typically responds to all inquiries within 2 business hours during operating hours (Mon-Fri, 9 AM - 6 PM EST).",
        },
        {
            question: "Where can I find information about marketplace vendors?",
            answer:
                "All verified sellers and products have detailed profiles available directly on their respective offer pages in our marketplace.",
        },
        {
            question: "Can I make changes to my existing support request?",
            answer:
                "Yes, simply reply directly to the email confirmation you receive after submitting this form.",
        },
        {
            question: "Do you offer phone support for urgent issues?",
            answer:
                "Absolutely. You can call our toll-free line during business hours or use the 'Direct Call' button on this page.",
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Get existing submissions from LocalStorage or initialize an array
        const existingData = JSON.parse(localStorage.getItem("contact_submissions")) || [];

        // 2. Create entry with timestamp
        const newSubmission = {
            ...formData,
            id: Date.now(),
            submittedAt: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
        };

        // 3. Save updated array to LocalStorage
        localStorage.setItem(
            "contact_submissions",
            JSON.stringify([...existingData, newSubmission])
        );

        // 4. Trigger Professional SweetAlert2 Alert
        Swal.fire({
            title: "Message Sent Successfully!",
            text: "Thank you for reaching out. A representative from our US team will get back to you shortly.",
            icon: "success",
            confirmButtonText: "Great, thanks!",
            confirmButtonColor: "#07966c",
            customClass: {
                popup: "swal2-custom-popup",
                title: "swal2-custom-title",
            },
        });

        // 5. Reset form state
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <main className="contact-page">
            <div className="contact-bg-grid" aria-hidden="true" />

            {/* =================================================
          HERO SECTION
      ================================================= */}
            <header className="contact-hero">
                <div className="contact-hero__content">
                    <span className="contact-hero__eyebrow">
                        <span className="contact-hero__pulse" aria-hidden="true" />
                        24/7 CUSTOMER SUPPORT
                    </span>

                    <h1>
                        We'd Love to <span>Hear From You.</span>
                    </h1>

                    <p>
                        Have a question about a product, offer, or order? Our US-based
                        support team is standing by to help you.
                    </p>

                    <div className="contact-hero__actions">
                        <a href={`tel:${phoneNumber}`} className="contact-hero__call-btn">
                            <span className="call-icon">📞</span>
                            <span>Call Now: +1 (866) 618-4718</span>
                        </a>
                        <a href="#contact-form" className="contact-hero__secondary-btn">
                            Send Message ↓
                        </a>
                    </div>
                </div>

                <div className="contact-hero__visual" aria-hidden="true">
                    <div className="contact-hero__orb contact-hero__orb--one" />
                    <div className="contact-hero__orb contact-hero__orb--two" />

                    <div className="contact-hero__badge contact-hero__badge--top">
                        <span className="contact-hero__badge-icon">⚡</span>
                        <span>Avg. Response: &lt; 60 sec</span>
                    </div>

                    <div className="contact-hero__card">
                        <div className="contact-hero__icon">✉️</div>
                        <strong>Let's Connect</strong>
                        <span>US & Global Support</span>
                    </div>

                    <div className="contact-hero__badge contact-hero__badge--bottom">
                        <span className="contact-hero__badge-icon">#</span>
                        <span>US Support Desk</span>
                    </div>
                </div>
            </header>

            {/* =================================================
          MAIN CONTENT (INFO + FORM)
      ================================================= */}
            <section className="contact-section" id="contact-form">
                <div className="contact-info">
                    <span className="contact-section__tag">GET IN TOUCH</span>

                    <h2>
                        Let's start a <span>conversation.</span>
                    </h2>

                    <p className="contact-info__intro">
                        Whether you have questions about our wellness marketplace or need help
                        with an existing order, we're ready to assist.
                    </p>

                    <address className="contact-info__list">
                        {/* Phone Card with Direct Click-to-Call */}
                        <div className="contact-info__item">
                            <div className="contact-info__icon">📞</div>
                            <div>
                                <span>Call Us Direct</span>
                                <a href={`tel:${phoneNumber}`} className="contact-info__link">
                                    +1 (866) 618-4718
                                </a>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="contact-info__item">
                            <div className="contact-info__icon">✉️</div>
                            <div>
                                <span>Email Support</span>
                                <a href="mailto:support@myhealthmaker.com" className="contact-info__link">
                                    support@myhealthmaker.com
                                </a>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div className="contact-info__item">
                            <div className="contact-info__icon">🕒</div>
                            <div>
                                <span>Business Hours</span>
                                <strong>Mon - Fri: 9:00 AM - 6:00 PM EST</strong>
                            </div>
                        </div>
                    </address>
                </div>

                {/* Contact Form Card */}
                <div className="contact-form-card">
                    <div className="contact-form-card__header">
                        <span className="contact-form-card__tag">SEND A MESSAGE</span>
                        <h3>How can we help?</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="contact-form__row">
                            <div className="contact-form__field">
                                <label htmlFor="name">
                                    Full Name <span className="required-star">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="e.g. Sarah Johnson"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-form__field">
                                <label htmlFor="email">
                                    Email Address <span className="required-star">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="sarah@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-form__field">
                            <label htmlFor="subject">
                                Subject <span className="required-star">*</span>
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="How can our team help?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-form__field">
                            <label htmlFor="message">
                                Message <span className="required-star">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Provide as much detail as possible..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        {/* ================= CONTACT CONSENT ================= */}
                        <div className="contact-form__consent">
                            <label className="contact-form__consent-label">
                                <input
                                    type="checkbox"
                                    name="contactConsent"
                                    checked={formData.contactConsent || false}
                                    onChange={handleChange}
                                    required
                                />

                                <span className="contact-form__checkbox"></span>

                                <span className="contact-form__consent-text">
                                    By checking this box, I agree that MyHealthMaker and its
                                    representatives may contact me using the contact information
                                    I provide regarding my inquiry, questions, or support request.
                                    I understand that providing consent is not a condition of
                                    purchasing any product or service. I have read and agree to the
                                    <Link to="/privacy">Privacy Policy</Link>
                                    {" "}and{" "}
                                    <Link to="/terms">Terms &amp; Conditions</Link>.
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="contact-form__button">
                            <span>Send Message</span>
                            <span>→</span>
                        </button>

                        <p className="contact-form__privacy">
                            <span>🔒</span>
                            Your information is used to respond to your inquiry and is handled
                            in accordance with our Privacy Policy.
                        </p>
                    </form>
                </div>
            </section>

            {/* =================================================
          FAQ ACCORDION SECTION
      ================================================= */}
            <section className="contact-faq">
                <div className="contact-faq__header">
                    <span className="contact-section__tag">FREQUENTLY ASKED QUESTIONS</span>
                    <h2>Got Questions? <span>We Have Answers.</span></h2>
                </div>

                <div className="contact-faq__container">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`contact-faq__item ${activeFaq === index ? "is-open" : ""}`}
                        >
                            <button
                                className="contact-faq__question"
                                onClick={() => toggleFaq(index)}
                                type="button"
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">{activeFaq === index ? "−" : "+"}</span>
                            </button>

                            {activeFaq === index && (
                                <div className="contact-faq__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* =================================================
          CTA SECTION
      ================================================= */}
            <section className="contact-cta">
                <div className="contact-cta__inner">
                    <span className="contact-cta__eyebrow">EXPLORE MYHEALTHMAKER</span>
                    <h2>
                        Discover your next <strong>wellness favorite.</strong>
                    </h2>
                    <p>
                        Explore our curated selection of health, wellness, and beauty products.
                    </p>
                    <a href="/" className="contact-cta__button">
                        <span>Explore Marketplace</span>
                        <span>→</span>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Contact;