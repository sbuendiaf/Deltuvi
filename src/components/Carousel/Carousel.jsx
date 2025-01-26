import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambia la imagen automáticamente cada [interval] milisegundos
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext(); // Mueve a la siguiente imagen
        }, interval);

        return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
    }, [currentIndex]);

    // Función para ir a la siguiente imagen
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Función para ir a la imagen anterior
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            {/* Contenedor de las imágenes */}
            <div
                className="carousel-images"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        className="carousel-image"
                    />
                ))}
            </div>

            {/* Flecha izquierda */}
            <button className="carousel-button prev" onClick={handlePrev}>
                &#8249; {/* HTML Entity para la flecha izquierda */}
            </button>

            {/* Flecha derecha */}
            <button className="carousel-button next" onClick={handleNext}>
                &#8250; {/* HTML Entity para la flecha derecha */}
            </button>
        </div>
    );
};

export default Carousel;
