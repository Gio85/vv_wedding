import React from 'react'

export default function Recommendations() {
  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="title">Locations</h1>
        <p className="paragraphLocations">If you are wondering where to stay, here are some suggestions: </p>
      </div>
      <h3 className="heading-tertiary">
        Lisbon City - <span className="heading-lowercase">city break </span>
      </h3>
      <iframe
        className="is-bordered"
        title="locations"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119158.43955819997!2d-9.245720854539815!3d38.77249702420197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2suk!4v1580672225747!5m2!1sen!2suk"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
      />
      <p className="paragraphLocations">We recommend the following areas: </p>
      <ul className="paragraph description">
        <li>Campo de Ourique</li>
        <li>Lapa</li>
        <li>Santos</li>
        <li>Baixa / Chiado</li>
      </ul>

      <h3 className="heading-tertiary">
        Cascais / Estoril - <span className="heading-lowercase"> seaside break</span>
      </h3>
      <iframe
        className="is-bordered"
        title="locations"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99577.09330348072!2d-9.370086679608269!3d38.74571481633865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec47379b79a97%3A0x870d3b7e1807bbc2!2sCascais%2C%20Portugal!5e0!3m2!1sen!2suk!4v1580672635285!5m2!1sen!2suk"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
      />
      <br />
      <br />
      <h3 className="heading-tertiary">
        Sintra - <span className="heading-lowercase">near the wedding venue </span>
      </h3>
      <iframe
        className="is-bordered"
        title="locations"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99523.63420679854!2d-9.380496266069747!3d38.78403075718309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edac1a7510ee9%3A0x13585cc0b00f573c!2sSintra%2C%20Portugal!5e0!3m2!1sen!2suk!4v1580672554615!5m2!1sen!2suk"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
      />
      <br />
      <p className="paragraphLocations airport">Please note: the closest airport to the ceremony is the Lisbon Airport.</p>
    </section>
  )
}
