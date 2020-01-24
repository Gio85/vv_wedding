import React from 'react';
import { CountdownTimer } from '../components/countdown';

export default function Home() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="countdown">
                    <h1 className="countdown">
                        <CountdownTimer
                            timeTillDate="2020-07-04 17:00:00"
                            timeFormat="YYYY-MM-DD HH:mm"
                        />
                    </h1>
                </div>
                <p className="paragraphQuote">
                    Amor não se conjuga no passado, ou se ama para sempre, ou
                    nunca se amou verdadeiramente
                </p>
                <span className="smallParagraph">- Fernando Pessoa -</span>
            </div>
        </section>
    );
}
