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
          Vincenzo Vessichelli
        </p>
        <p>
          <span className="bold">IBAN: </span>
          GB39 REVO 0099 7061 1818 33
        </p>
        <p>
          <span className="bold">BIC: </span> REVOGB21
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
          <span className="bold">Account: </span> 09685146
        </p>
        <p>
          {' '}
          <span className="bold">Sort Code: </span> 04-00-75{' '}
        </p>
      </div>
    </section>
  )
}
