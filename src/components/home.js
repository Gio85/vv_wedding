import React from 'react'
import { CountdownTimer } from './countdown'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="countdown">
          <h1>
            <CountdownTimer timeTillDate="2021-07-02 17:00:00" timeFormat="YYYY-MM-DD HH:mm" />
          </h1>
        </div>
        <p className="paragraphQuote">Amor não se conjuga no passado, ou se ama para sempre, ou nunca se amou verdadeiramente</p>
        <span className="smallParagraph">- Fernando Pessoa -</span>
      </div>
    </section>
  )
}
