import React from 'react';
import { BridesMaids } from './bridesmaids';
import { Groomsman } from './groomsman';

export default function BridalParty() {
    return (
        <section className="container">
            <BridesMaids />
            <Groomsman />
        </section>
    );
}
