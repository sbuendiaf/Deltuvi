import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({simple = true}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setIsSubmitted(true);
    };

    return (
        <div className="form-container">
            {!simple ? <h1 className="form-title">Contáctenos</h1> : null}
            {isSubmitted ? (
                <div className="form-message">
                    <h2>Thank you!</h2>
                    <p>Your message has been sent successfully.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="form-button">
                        Contactar
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
