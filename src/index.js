import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuNavbar from './components/nav-bar/navbar';
import Header from './components/header/header';
import Home from './components/home';
import OurStory from './components/our-story/our_story';
import BridalParty from './components/bridal-party/bridal_party';
import WeddingItinerary from './components/wedding-itinerary/wedding_itinerary';
import Recommendations from './components/recommendations/recommendations';
import RSVP from './components/rsvp/rsvp';
import Registry from './components/registry/registry';
import Thanks from './components/thanks';
import { Footer } from './components/footer/footer';

import 'bulma';
import './scss/main.scss';
import './scss/style.scss';

function App() {
    return (
        <Router  basename="public">
            <div className="container">
                <MenuNavbar />
                {/* DONE */}
                <Header />
                {/* DONE */}
                <Switch>
                    <Route path="/our_story" component={OurStory} />
                    <Route path="/bridal_party" component={BridalParty} />
                    <Route
                        path="/wedding_itinerary"
                        component={WeddingItinerary}
                    />
                    <Route
                        path="/recommendations"
                        component={Recommendations}
                    />
                    <Route path="/registry" component={Registry} />
                    <Route path="/rsvp" component={RSVP} />
                    <Route path="/thanks" component={Thanks} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
