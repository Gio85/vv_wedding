import React from 'react'

export default function WeddingItinerary() {
  return (
    <div className="column">
      <div className="hero">
        <div className="hero-body">
          <h1 className="hWeddingItinerary"> Ceremony, Cocktail, Reception and Party </h1>
          <p className="paragraphWeddingItinerary"> Quinta Casa Portuguesa – Colares, Sintra Estrada Nacional N247, 2705-655 </p>
          <p className="paragraphWeddingItinerary"> Please join us at 16:00 to begin the celebration! </p>
          <p className="paragraphWeddingItinerary">
            Dress code: Formal attire The ceremony will be held outdoors, so we advise ladies not to wear any stiletto high heels. Temperatures may
            also drop in the evening, so please bring a little something to keep you warm!
          </p>
        </div>
      </div>
      <div className="mapWeddingItinerary">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49756.983224713986!2d-9.498577322855613!3d38.79095656081532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ece7534ec342f%3A0xc141684ae435b078!2sQuinta%20Casa%20Portuguesa!5e0!3m2!1sen!2suk!4v1580672092761!5m2!1sen!2suk"
          width="600"
          height="450"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  )
}
