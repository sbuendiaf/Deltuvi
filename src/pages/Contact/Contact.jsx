import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import "./Contact.css";

function Contact() {
    return (

        <main >
            <div className='contact-section'>
                <div className='contact-content'>

                    <h1 className='contactTitle'>Contacto</h1>
                    <p>¿Tienes dudas? Contáctenos a través del formulario o envíanos un correo a info@deltuvi.com.</p>
                </div>
            </div>
            <ContactForm />
        </main>
    );
}

export default Contact;
