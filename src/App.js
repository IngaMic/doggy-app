import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Diary from "./Diary";
import Trick from "./Trick";
import Uploader from "./Uploader";
/////////////////////////////////////////////////////////////

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "",
            last: "",
            imageUrl: "",
            file: "",
            logUserId: null,
            name: "",
            size: "",
            gender: "",
            dogimg: "",
            bio: "",
            firstuserid: null,
            seconduserid: null,
            uploaderIsVisible: false,
            error: false,
        };
    }
    componentDidMount() {
        axios.get("/user").then((resp) => {
            this.setState({
                logUserId: resp.data.userId,
                first: resp.data.first,
                last: resp.data.last,
                imageUrl: resp.data.imageUrl,
                cd: resp.data.cd,
                pos: resp.data.pos,
            });
        });
        axios.get("/doginfo").then((resp) => {
            this.setState({
                name: resp.data.name,
                gender: resp.data.gender,
                dogimg: resp.data.dogimg,
                size: resp.data.size,
                bio: resp.data.bio,
                firstuserid: resp.data.firstuserid,
                seconduserid: resp.data.seconduserid,
            });
        });
    }
    showUploader(e) {
        e.preventDefault();
        this.setState({ uploaderIsVisible: true });
    }
    setInfo() {
        axios.get("/doginfo").then((resp) => {
            this.setState({
                name: resp.data.name,
                gender: resp.data.gender,
                dogimg: resp.data.dogimg,
                size: resp.data.size,
                bio: resp.data.bio,
                firstuserid: resp.data.firstuserid,
                seconduserid: resp.data.seconduserid,
            });
        });
    }
    closeUploader(e) {
        e.preventDefault();
        this.setState({ uploaderIsVisible: false });
    }
    setImage(imageUrl) {
        this.setState({ imageUrl: imageUrl });
    }
    render() {
        if (!this.state.logUserId) {
            return null;
        }
        return (
            <div>
                <div>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                </div>

                <BrowserRouter>
                    <div>
                        <Link to="/">
                            <img id="logodog" src="/dog3.png"></img>
                        </Link>
                    </div>
                    <div className="trees-container">
                        <img src="trees.png" className="trees"></img>
                    </div>
                    <div className="flex">
                        <div className="links">
                            <div className="profile-link">
                                <Link to="/profile">Profile</Link>
                                <Link to="/diary">Diary</Link>
                                <a href="/logout">Logout</a>
                            </div>
                        </div>

                        <div>
                            <Route
                                exact
                                path="/"
                                render={() => (
                                    <Dashboard
                                        logUserId={this.state.logUserId}
                                        first={this.state.first}
                                        last={this.state.last}
                                        imageUrl={this.state.imageUrl}
                                    />
                                )}
                            />
                        </div>
                        <Route
                            path="/trick/:id"
                            render={(props) => (
                                <Trick
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                    logUserId={this.state.logUserId}
                                />
                            )}
                        />
                        <div>
                            <Route
                                exact
                                path="/profile"
                                render={() => (
                                    <Profile
                                        logUserId={this.state.logUserId}
                                        first={this.state.first}
                                        last={this.state.last}
                                        imageUrl={this.state.imageUrl}
                                        name={this.state.name}
                                        size={this.state.size}
                                        gender={this.state.gender}
                                        bio={this.state.bio}
                                        dogimg={this.state.dogimg}
                                        firstuserid={this.state.firstuserid}
                                        seconduserid={this.state.seconduserid}
                                        clickHandler={() =>
                                            this.setState({
                                                uploaderIsVisible: true,
                                            })
                                        }
                                        setInfo={() => {
                                            axios
                                                .get("/doginfo")
                                                .then((resp) => {
                                                    this.setState({
                                                        name: resp.data.name,
                                                        gender:
                                                            resp.data.gender,
                                                        dogimg:
                                                            resp.data.dogimg,
                                                        size: resp.data.size,
                                                        bio: resp.data.bio,
                                                        firstuserid:
                                                            resp.data
                                                                .firstuserid,
                                                        seconduserid:
                                                            resp.data
                                                                .seconduserid,
                                                    });
                                                });
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <Route
                                exact
                                path="/diary"
                                render={() => (
                                    <Diary
                                        logUserId={this.state.logUserId}
                                        first={this.state.first}
                                        last={this.state.last}
                                        imageUrl={this.state.imageUrl}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </BrowserRouter>
                <div>
                    {this.state.uploaderIsVisible && (
                        <Uploader
                            imageUrl={this.state.imageUrl}
                            setImage={(imageUrl) => {
                                this.setImage(imageUrl);
                            }}
                            userId={this.state.logUserId}
                            closeUploader={() => {
                                this.setState({ uploaderIsVisible: false });
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }
}
