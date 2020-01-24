import React from 'react';

export default function WeddingItinerary() {
    return (
        <section className="hero">
            <div className="hero-body">
                <h1 className="hWeddingItinerary">
                    Ceremony, Cocktail, Reception and Party
                </h1>
                <p className="paragraphWeddingItinerary">
                    Quinta Casa Portuguesa – Colares, Sintra
                </p>
                <p className="paragraphWeddingItinerary">
                    Please join us at 16:30 to begin the celebration
                </p>
                <div className="mapWeddingItinerary">
                    <iframe
                        title="ti"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403662.2975946813!2d-8.52216388930153!3d37.77570202614716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1a5be016857d61%3A0x76f90bcac7ccf011!2sConcei%C3%A7%C3%A3o%2C%207670-011%20Ourique%2C%20Portugal!5e0!3m2!1sen!2suk!4v1575209202901!5m2!1sen!2suk"
                        width="600"
                        height="450"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
