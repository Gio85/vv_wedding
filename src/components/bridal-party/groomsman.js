import React from 'react';

export const Groomsman = () => {
    return (
        <section className="section">
            <section className="hero u-margin-bottom-medium">
                <div className="hero-body">
                    <h1 className="heading-secondary ">Groomsman</h1>
                </div>
            </section>
            <div className="columns">
                <div className="column">
                    <h3 className="heading-tertiary">Michele & Gianfranco</h3>
                    <div className="bridal_image">
                        <img
                            src="/images/grooms_man/theBrothers.JPG"
                            alt="bride"
                        />
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column ">
                    <h3 className="heading-tertiary">Davide</h3>
                    <div className="bridal_image">
                        <img src="/images/grooms_man/davide.JPG" alt="bride" />
                    </div>
                </div>
                <div className="column">
                    <h3 className="heading-tertiary">Giovanni</h3>
                    <div className="bridal_image">
                        <img src="/images/grooms_man/giovanni.JPG" alt="bride" />
                    </div>
                </div>
                <div className="column">
                    <h3 className="heading-tertiary">Francesco</h3>
                    <div className="bridal_image">
                        <img
                            src="/images/grooms_man/francesco.JPG"
                            alt="bride"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
