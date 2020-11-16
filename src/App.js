import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Diary from "./Diary";
import Trick from "./Trick";
import Uploader from "./Uploader";
import Invitation from "./Invitation";
/////////////////////////////////////////////////////////////

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "",
            last: "",
            imageUrl: "",
            cd: "",
            file: "",
            logUserId: null,
            name: "",
            size: "",
            gender: "",
            dogId: null,
            dogimg: null,
            bio: "",
            firstuserid: null,
            seconduserid: null,
            otherUsers: [],
            uploaderIsVisible: false,
            invitationIsVisible: false,
            error: false,
        };
    }
    componentDidMount() {
        axios.get("/doginfo").then(({ data }) => {
            // console.log("data after App component mounts and dogInfo", data);
            this.setState({
                dogId: data.id,
                name: data.name,
                gender: data.gender,
                dogimg: data.dogimg,
                size: data.size,
                bio: data.bio,
                firstuserid: data.firstuserid,
                seconduserid: data.seconduserid,
            });
            // console.log(
            //     "state after App component mounts and dogInfo",
            //     this.state
            // );
        });
        axios.get("/user").then((resp) => {
            // console.log("resp after App component mounts and userInfo", resp);
            this.setState({
                logUserId: resp.data.userId,
                first: resp.data.first,
                last: resp.data.last,
                imageUrl: resp.data.imageUrl,
                cd: resp.data.cd,
                pos: resp.data.pos,
            });
        });
        axios.get("/otherusers").then((resp) => {
            // console.log(
            //     "resp after App component mounts and otherusersInfo",
            //     resp
            // );
            this.setState({
                otherUsers: resp.data.list,
            });
            // console.log(
            //     "state.otherUsers after App component mounts and otherUsers",
            //     this.state.otherUsers
            // );
        });
    }
    showUploader(e) {
        e.preventDefault();
        this.setState({ uploaderIsVisible: true });
    }
    setInfo() {
        axios.get("/doginfo").then((resp) => {
            this.setState({
                dogId: resp.data.data.id,
                name: resp.data.data.name,
                gender: resp.data.data.gender,
                dogimg: resp.data.data.dogimg,
                size: resp.data.data.size,
                bio: resp.data.data.bio,
                firstuserid: resp.data.data.firstuserid,
                seconduserid: resp.data.data.seconduserid,
            });
        });
        console.log(
            "this.state after setInfo dogId has to be there",
            this.state
        );
    }
    closeUploader(e) {
        e.preventDefault();
        this.setState({ uploaderIsVisible: false });
    }
    openInvitation(e) {
        e.preventDefault();
        this.setState({ invitationIsVisible: true });
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
                    <div className="flex">
                        <div className="links">
                            <div className="profile-link">
                                <Link to="/">Training</Link>
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
                                        cd={this.state.cd}
                                        dogId={this.state.dogId}
                                        name={this.state.name}
                                        size={this.state.size}
                                        gender={this.state.gender}
                                        bio={this.state.bio}
                                        dogimg={this.state.dogimg}
                                        otherUsers={this.state.otherUsers}
                                        firstuserid={this.state.firstuserid}
                                        seconduserid={this.state.seconduserid}
                                        clickHandler={() =>
                                            this.setState({
                                                uploaderIsVisible: true,
                                            })
                                        }
                                        openInvitation={() =>
                                            this.setState({
                                                invitationIsVisible: true,
                                            })
                                        }
                                        setInfo={() => {
                                            axios
                                                .get("/doginfo")
                                                .then((resp) => {
                                                    this.setState({
                                                        dogId: resp.data.id,
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
                    {this.state.invitationIsVisible && (
                        <Invitation
                            cd={this.state.cd}
                            userId={this.state.logUserId}
                            closeInvitation={() => {
                                this.setState({ invitationIsVisible: false });
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }
}
