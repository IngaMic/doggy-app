import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

export default function Welcome() {
    return (
        <div className="welcome">
            <div>
                <p className="welcome-logo-name">Doggy App</p>
            </div>
            <div className="grid-one">
                <div>
                    <img id="firstdog" src="/dog3.png"></img>
                </div>

                <div>
                    <p className="description">
                        Would you like to spend more time with your dog,
                        <br />
                        not only playing but learning something new and fun?
                        <br />
                        Dogs are loving and highly social animals - and good
                        training doesn't only
                        <br />
                        make your life easier, it promotes mental stimulation
                        and physical wellbeing
                        <br />
                        for your dog.
                    </p>
                </div>

                <HashRouter>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route path="/registration" component={Registration} />
                    </div>
                </HashRouter>
            </div>
            <img id="background" src="/background.png"></img>
        </div>
    );
}
