import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import ContactForm from '../components/ContactForm/ContactForm';

function Home() {
    const images = Object.values(
        import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,gif}', { eager: true })
    ).map((module) => module.default);

    return (
        <main className="container">
            <h1>Bienvenido a Deltuvi</h1>
            <p>
                Somos líderes en formación sanitaria avanzada en control de hemorragias,
                atención inicial al trauma grave y manejo de la vía aérea.
            </p>
            <Carousel images={images} interval={3000} />
            <ContactForm simple={false}/>
        </main>
    );
}

export default Home;
