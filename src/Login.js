import React from "react";
import axios from "./axios";
import { Link, HashRouter } from "react-router-dom";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            userId: null,
            error: false,
        };
    }
    handleChange(e) {
        //console.log("HandleChange is reacting, e.target.value", e.target);
        const target = e.target;
        const { name, value } = target;
        this.setState(
            {
                [name]: value,
            } //, () => {
            // console.log("this.state", this.state);}
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("this.state  :", this.state);
        const { email, password } = this.state;
        const user = {
            email: email,
            password: password,
        };
        axios.post("/welcome", user).then((resp) => {
            console.log(" resp : ", resp);
            if (resp.data.error) {
                this.setState({ error: true });
            } else {
                location.replace("/");
            }
        });
    }
    render() {
        return (
            <div className="login">
                <h3>Login into your account:</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                    <div>
                        <label className="move4">
                            <span className="glyphicon glyphicon-user"></span>
                        </label>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label>
                            {" "}
                            <span className="glyphicon glyphicon-lock"></span>
                        </label>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            name="password"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                        />
                    </div>
                    <button>Login</button>
                </form>
                <div className="reglink">
                    <HashRouter>
                        <Link to="/registration">
                            No account yet? Click here to Register!
                        </Link>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
