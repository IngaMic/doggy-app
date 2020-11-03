import React from "react";
//import axios from "./axios";
import Bioeditor from "./DogBio";
import OtherUsers from "./OtherUsers";
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            imageUrl: "",
            cd: "",
            file: "",
            name: "",
            gender: "",
            size: "",
            dogimg: "",
            dogId: null,
            bio: "",
            firstuserid: null,
            seconduserid: "",
            userId: null,
            error: false,
            trainingImg: "/dog1.png",
            characterImg: "/dog1.png",
        };
        // this.closeEditor = this.closeEditor.bind(this);
    }
    componentDidMount() {
        this.setState({
            dogId: this.props.dogId,
            userId: this.props.userId,
            name: this.props.name,
            size: this.props.size,
            gender: this.props.gender,
            dogimg: this.props.dogimg,
            bio: this.props.bio,
            firstuserid: this.props.firstuserid,
            seconduserid: this.props.seconduserid,
        });
        console.log("this.props in profile", this.props);
        // console.log("this.state in profile", this.state);
        // console.log(
        //     "this.props.otherUsers in profile ...",
        //     this.props.otherUsers
        // );
    }
    clickTraining(e) {
        var choice = e.currentTarget.value;
        if (choice == "not") {
            this.setState({ trainingImg: "/sit.png" });
        } else if (choice == "some") {
            this.setState({ trainingImg: "/lay.png" });
        } else if (choice == "mid") {
            this.setState({ trainingImg: "/come.png" });
        } else if (choice == "well") {
            this.setState({ trainingImg: "/huskygradient.png" });
        }
    }
    clickCharacter(e) {
        var choice = e.currentTarget.value;
        if (choice == "not") {
            this.setState({ characterImg: "/sit.png" });
        } else if (choice == "some") {
            this.setState({ characterImg: "/lay.png" });
        } else if (choice == "mid") {
            this.setState({ characterImg: "/come.png" });
        } else if (choice == "well") {
            this.setState({ characterImg: "/huskygradient.png" });
        }
    }
    render() {
        // if (!this.props.dogId) {
        //     return null;
        // }
        return (
            <div className="profiles">
                {this.props.logUserId && (
                    <div id="users-profile">
                        <div className="profiles-left"></div>
                        <div className="profiles-right"></div>
                        <button className="next-page">
                            Fill a questionaire
                        </button>
                        <img
                            id="dog-profile-img"
                            src={this.props.dogimg || "/dog1.png"}
                            alt=""
                            width="200"
                            height="250"
                        ></img>
                        <div className="layer"></div>
                        <img
                            onClick={this.props.clickHandler}
                            id="user1-profile-img"
                            src={
                                this.props.imageUrl ||
                                "https://thumbs.dreamstime.com/b/thin-line-black-camera-logo-like-upload-your-photo-thin-line-black-camera-logo-like-upload-your-photo-graphic-art-design-element-106033006.jpg"
                            }
                            alt=""
                        ></img>
                        <OtherUsers otherUsers={this.props.otherUsers} />
                        <h4 id="name-surname">{this.props.first}</h4>
                        <div>
                            <img
                                className="user2-profile-img"
                                src={this.props.seconduserimg || "/plus.png"}
                            ></img>
                        </div>
                        <Bioeditor
                            dogId={this.props.dogId}
                            bio={this.props.bio}
                            cd={this.props.cd}
                            setInfo={this.props.setInfo}
                        />
                    </div>
                )}
                {this.props.firstuserid && (
                    <div id="dogs-profile">
                        <div id="dog-info">
                            <h2 id="dog-name">{this.props.name}</h2>
                            {/* <br></br> */}
                            <h4 id="dog-bio">
                                <u> About this little rascal:</u>
                                <br></br>
                                <br></br>
                                {this.props.bio}
                                <br></br>
                            </h4>
                            <h4 id="dog-gender">
                                <u>Gender:</u> {this.props.gender}
                            </h4>
                            <br></br>
                            <h4 id="dog-size">
                                <u>Size:</u> {this.props.size}
                            </h4>
                            <br></br>
                        </div>
                    </div>
                )}
                <div>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                </div>
                {this.props.firstuserid && (
                    <div>
                        <div className="training-level">
                            <h2>How well is your dog trained?</h2>
                            <button
                                onClick={(e) => this.clickTraining(e)}
                                value="not"
                            >
                                No Training At All
                            </button>
                            <button
                                onClick={(e) => this.clickTraining(e)}
                                value="some"
                            >
                                Some Basic Training
                            </button>
                            <button
                                onClick={(e) => this.clickTraining(e)}
                                value="mid"
                            >
                                Mid Trained
                            </button>
                            <button
                                onClick={(e) => this.clickTraining(e)}
                                value="well"
                            >
                                Professionally Trained
                            </button>
                            <img src={this.state.trainingImg}></img>
                        </div>
                        <div className="character-level">
                            <h2>What is your dogs temperament?</h2>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="not"
                            >
                                Docile
                            </button>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="some"
                            >
                                Active
                            </button>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="mid"
                            >
                                Dominant / Independent
                            </button>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="well"
                            >
                                Communicable / Submissive
                            </button>
                            <img src={this.state.characterImg}></img>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
