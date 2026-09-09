import { useState } from "react";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Contact Form:", formData);

        alert("Thank you! Your message has been submitted.");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <main className="contact-page">

            {/* =================================================
               HERO
            ================================================= */}

            <section className="contact-hero">

                <div className="contact-hero__content">

                    <span className="contact-hero__eyebrow">
                        GET IN TOUCH
                    </span>

                    <h1>
                        We'd Love to
                        <span> Hear From You.</span>
                    </h1>

                    <p>
                        Have a question about a product, offer, or
                        something else? Our team is here to help.
                    </p>

                </div>

                <div className="contact-hero__visual">

                    <div className="contact-hero__orb contact-hero__orb--one" />
                    <div className="contact-hero__orb contact-hero__orb--two" />

                    <div className="contact-hero__card">

                        <div className="contact-hero__icon">
                            @
                        </div>

                        <strong>
                            Let's Connect
                        </strong>

                        <span>
                            We're here to help
                        </span>

                    </div>

                </div>

            </section>


            {/* =================================================
               CONTACT CONTENT
            ================================================= */}

            <section className="contact-section">

                {/* =================================================
                   LEFT INFO
                ================================================= */}

                <div className="contact-info">

                    <span className="contact-section__tag">
                        CONTACT US
                    </span>

                    <h2>
                        Let's start a
                        <span> conversation.</span>
                    </h2>

                    <p className="contact-info__intro">
                        Whether you have a question about our marketplace,
                        a product, or an offer, feel free to reach out.
                        We'll do our best to point you in the right direction.
                    </p>


                    {/* EMAIL */}

                    <div className="contact-info__item">

                        <div className="contact-info__icon">
                            @
                        </div>

                        <div>
                            <span>
                                Email
                            </span>

                            <a href="mailto:support@myhealthmaker.com">
                                support@myhealthmaker.com
                            </a>
                        </div>

                    </div>


                    {/* RESPONSE */}

                    <div className="contact-info__item">

                        <div className="contact-info__icon">
                            ✓
                        </div>

                        <div>
                            <span>
                                Support
                            </span>

                            <strong>
                                We're here to help
                            </strong>
                        </div>

                    </div>


                    {/* DISCOVERY */}

                    <div className="contact-info__item">

                        <div className="contact-info__icon">
                            ↗
                        </div>

                        <div>
                            <span>
                                Marketplace
                            </span>

                            <strong>
                                Explore Health & Wellness
                            </strong>
                        </div>

                    </div>

                </div>


                {/* =================================================
                   FORM
                ================================================= */}

                <div className="contact-form-card">

                    <div className="contact-form-card__header">

                        <span>
                            SEND A MESSAGE
                        </span>

                        <h3>
                            How can we help?
                        </h3>

                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="contact-form__row">

                            <div className="contact-form__field">

                                <label htmlFor="name">
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="contact-form__field">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        <div className="contact-form__field">

                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="What can we help you with?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="contact-form__field">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Tell us how we can help..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <button
                            type="submit"
                            className="contact-form__button"
                        >
                            Send Message
                            <span>→</span>
                        </button>

                        <p className="contact-form__privacy">
                            Your information is used only to respond
                            to your message.
                        </p>

                    </form>

                </div>

            </section>


            {/* =================================================
               HELP SECTION
            ================================================= */}

            <section className="contact-help">

                <div className="contact-help__heading">

                    <span className="contact-section__tag">
                        NEED HELP?
                    </span>

                    <h2>
                        Before you reach out,
                        <span> check this.</span>
                    </h2>

                </div>


                <div className="contact-help__grid">

                    <article className="contact-help__card">

                        <span>01</span>

                        <h3>
                            Product Questions
                        </h3>

                        <p>
                            Looking for more information about a product?
                            Visit the product offer to learn more.
                        </p>

                    </article>


                    <article className="contact-help__card">

                        <span>02</span>

                        <h3>
                            Marketplace Questions
                        </h3>

                        <p>
                            Questions about categories, offers, or finding
                            products? We're happy to help.
                        </p>

                    </article>


                    <article className="contact-help__card">

                        <span>03</span>

                        <h3>
                            General Support
                        </h3>

                        <p>
                            For anything else, send us a message and
                            we'll get back to you.
                        </p>

                    </article>

                </div>

            </section>


            {/* =================================================
               CTA
            ================================================= */}

            <section className="contact-cta">

                <div>

                    <span>
                        EXPLORE MYHEALTHMAKER
                    </span>

                    <h2>
                        Discover your next
                        <strong> wellness favorite.</strong>
                    </h2>

                    <p>
                        Explore our growing collection of health,
                        wellness, beauty, and lifestyle products.
                    </p>

                    <a
                        href="/"
                        className="contact-cta__button"
                    >
                        Explore Products
                        <span>→</span>
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Contact;