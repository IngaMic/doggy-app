import React from "react";
import axios from "./axios";

export default class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "",
            last: "",
            email: "",
            password: "",
            userId: null,
            error: false,
        };
    }
    handleChange(e) {
        console.log("HandleChange is reacting, e.target.value", e.target);
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
        const { first, last, email, password } = this.state;
        const user = {
            first: first,
            last: last,
            email: email,
            password: password,
        };
        axios.post("/registration", user).then((resp) => {
            console.log(" resp : ", resp);
            if (resp.data.error) {
                this.setState({ error: true });
            } else {
                console.log(
                    "userId from response in Registration.js",
                    resp.data.userId
                );
                location.replace("/");
            }
        });
    }
    // this.setState ({error: true}) //we need to figure out where to pur it
    render() {
        return (
            <div className="registration">
                <h2>Register here:</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                    <div>
                        {/* <label>First Name: </label> */}
                        <input
                            onChange={(e) => this.handleChange(e)}
                            name="first"
                            value={this.state.first}
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        {/* <label className="move1">Last Name: </label> */}
                        <input
                            onChange={(e) => this.handleChange(e)}
                            name="last"
                            value={this.state.last}
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        {/* <label className="move2">Email: </label> */}
                        <input
                            onChange={(e) => this.handleChange(e)}
                            name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        {/* <label className="move3">Password: </label> */}
                        <input
                            onChange={(e) => this.handleChange(e)}
                            name="password"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
