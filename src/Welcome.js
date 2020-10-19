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
            <div>
                <p className="description">
                    Doggo
                    <br />
                    <br />
                    Telling you about the doggy app. Doggy app doggy app doggy,
                    doggy app doggy app doggy app doggy app.
                </p>
            </div>

            <HashRouter>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/registration" component={Registration} />
                </div>
            </HashRouter>
        </div>
    );
}
