import React from 'react'

export const BridesMaids = () => {
  return (
    <section className="section">
      <section className="hero">
        <div className="hero-body">
          <h1 className="heading-secondary ">Bridesmaids</h1>
        </div>
      </section>

      <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd u-margin-bottom-small">
        <div className="column">
          <h3 className="heading-tertiary">Violeta</h3>
          <figure className="image bridal_image">
            <img class="is-rounded" src="/images/brides_maids/IMG_0010.JPG" alt="bride" />
          </figure>
        </div>
        <div className="column">
          <h3 className="heading-tertiary">Sara</h3>
          <figure className="image bridal_image">
            <img class="is-rounded" src="/images/brides_maids/IMG_0016.JPG" alt="bride" />
          </figure>
        </div>
      </div>

      <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div className="column">
          <h3 className="heading-tertiary">Camille</h3>
          <figure className="image bridal_image">
            <img class="is-rounded" src="/images/brides_maids/camille.JPG" alt="bride" />
          </figure>
        </div>
        <div className="column">
          <h3 className="heading-tertiary">Stella</h3>
          <figure className="image bridal_image">
            <img class="is-rounded" src="/images/brides_maids/IMG_5334.JPG" alt="bride" />
          </figure>
        </div>
        <div className="column">
          <h3 className="heading-tertiary">Danielle</h3>
          <figure className="image bridal_image">
            <img class="is-rounded" src="/images/brides_maids/IMG_4171.JPG" alt="bride" />
          </figure>
        </div>
      </div>
    </section>
  )
}
