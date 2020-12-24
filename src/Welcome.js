import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

export default function Welcome() {
    return (
        <div className="welcome">
            <div>
                <p className="welcome-logo-name"></p>
            </div>
            <div className="grid-one">
                <div>
                    <img id="firstdog" src="/logo.svg"></img>
                </div>

                <div>
                    <p className="description">
                        Would you like to spend more time with your dog, not
                        only playing but learning something new and fun? Dogs
                        are loving and highly social animals - and good training
                        doesn`t only make your life easier, it promotes mental
                        stimulation and physical wellbeing for your dog.
                    </p>
                </div>

                <HashRouter>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route path="/registration" component={Registration} />
                    </div>
                </HashRouter>
            </div>
            <img id="background" src="/1.svg"></img>
            <img id="background" src="/2.svg"></img>
            <img id="background" src="/3.svg"></img>
            <img id="background" src="/4.svg"></img>
            <img id="background" src="/5.svg"></img>
        </div>
    );
}
