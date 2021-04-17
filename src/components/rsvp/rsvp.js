import React from 'react'

export default function RSVP() {
  return (
    <section className="hero">
      <div className="reservation">
        <h3 className="h3Form">Please kindly respond by the 7th of June</h3>
        <a
          className="button is-primary is-light is-large is-outlined"
          href="mailto:vincenzoandvera2020@gmail.com?subject=Confirmation&amp;body=Hi%20Vincenzo%20and%20Vera%2C%20%0A%0A%0AName%3A%20%0A%0A%0AWill%20you%20be%20attending%20%3F%0A%0A%0ANumber%20of%20guests%20attending%20%3F%0A%0A%0AVegetarian%2FVegan%20%3F%0A%0A%0AAny%20food%20allergies%20%3F%0A"
        >
          RSVP
        </a>
        <div className="hero-body">
          <h1 className="h3Form">Thank you! </h1>
          <h1 className="h3Form">Obrigado! </h1>
          <h1 className="h3Form">Grazie! </h1>
        </div>
        <div>
          <p className="covid_title">COVID precautions:</p>

          <p className="covid_paragraph">You will be asked to present a negative test as you enter the venue.</p>

          <p className="covid_paragraph">
            The rapid test will suffice, this kit can be bought in most pharmacies at the price of 5€ and you will get the result back in 15minutes.{' '}
          </p>

          <p className="covid_paragraph">This can be done either the day before the wedding or on the actual day. </p>

          <p className="covid_paragraph">
            Note, if you are travelling to Portugal <u>within 3 days</u> of the wedding day, then you can show the same test that you did to fly.{' '}
          </p>

          <p className="covid_paragraph">If you have any questions please feel free to contact us. </p>
        </div>
      </div>
    </section>
  )
}
