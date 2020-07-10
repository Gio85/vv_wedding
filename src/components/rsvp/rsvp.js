import React from 'react'

export default function RSVP() {
  return (
    <section className="hero">
      <div className="reservation">
        <h3 className="h3Form">Please kindly respond by the 1st of May</h3>
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
      </div>
    </section>
  )
}
