import React from 'react'

export default function Registry() {
  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="hRegistry">
          <i>Dulcis in fundo</i>
        </h1>
      </div>
      <p className="paragraphRegistry">
        Your presence on our special day is the greatest present of all! However, if you do wish to celebrate with a gift, a contribution to our
        honeymoon would be warmly appreciated.
      </p>
      <h3 className="heading-tertiary">Bank Details</h3>
      <div className="paragraph description">
        Euro Account{' '}
        <span role="img" aria-label="euro flag">
          🇪🇺
        </span>
        <p>
          <span className="bold">Beneficiary: </span>
          Vera Castro Freire
        </p>
        <p>
          <span className="bold">IBAN: </span>
          GB59 SRLG 6083 7190 2680 29
        </p>
        <p>
          <span className="bold">BIC/SWIFT: </span> SRLGGB3L
        </p>
      </div>

      <div className="paragraph description">
        British Pound Account{' '}
        <span role="img" aria-label="british flag">
          🇬🇧
        </span>
        <p>
          <span className="bold">Beneficiary: </span> Vincenzo Vessichelli
        </p>
        <p>
          <span className="bold">Account: </span> 46997228
        </p>
        <p>
          {' '}
          <span className="bold">Sort Code: </span> 60-83-71{' '}
        </p>
      </div>
    </section>
  )
}
