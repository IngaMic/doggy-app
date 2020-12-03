import React from "react";
//import axios from "./axios";
import Bioeditor from "./DogBio";
import OtherUsers from "./OtherUsers";
import axios from "./axios";

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
            heroImg: "/dog1.png",
            training: "",
            characters: "",
            hero: "",
            questionaireIsVisible: true,
        };
        // this.closeEditor = this.closeEditor.bind(this);
    }
    componentDidMount() {
        if (this.props.answers) {
                this.setState({
             questionaireIsVisible: false,
        });
        }
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
    }
    clickTraining(e) {
         this.setState({ training: e.currentTarget.value });
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
         this.setState({ characters: e.currentTarget.value });
        var choice = e.currentTarget.value;
        if (choice == "docile") {
            this.setState({ characterImg: "/anim2.gif" });
        } else if (choice == "active") {
            this.setState({ characterImg: "/anim1.gif" });
        } else if (choice == "independent") {
            this.setState({ characterImg: "/skate1.gif" });
        } else if (choice == "affectionate") {
            this.setState({ characterImg: "/anim3.gif" });
        }
    }
    clickHero(e) {
         this.setState({ hero: e.currentTarget.value });
        var choice = e.currentTarget.value;
        if (choice == "lassie") {
            this.setState({ heroImg: "/anim2.gif" });
        } else if (choice == "mailo") {
            this.setState({ heroImg: "/skate1.gif" });
        } else if (choice == "laika") {
            this.setState({ heroImg: "/laika.png" });
        } else if (choice == "snoopie") {
            this.setState({ heroImg: "/anim3.gif" });
        }
    }
     clickSubmit() {
         let that = this;
           const answers = {
              cd: this.props.cd,   
            training: this.state.training,
            characters: this.state.characters,
            hero: this.state.hero,
        };
        console.log("answers", answers)
          axios.post("/updatequestionaire", answers)
                .then(function (resp) {
                    console.log(
                        "response after /updatequestionaire",
                        resp
                    );
                    that.setState({ questionaireIsVisible: false });
                })
                .catch(function (err) {
                    console.log("error in axios post /updatequestionaire", err);
                });
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
                        <h4 id="name-surname">{this.props.first}</h4>
                        <OtherUsers otherUsers={this.props.otherUsers} />
                        <div className="add-users">
                            <img
                                onClick={this.props.openInvitation}
                                className="user2-profile-img"
                                src={"/plus.png"}
                            ></img>
                            <p>Invite your team member!</p>
                        </div>
                        <Bioeditor
                            dogId={this.props.dogId}
                            bio={this.props.bio}
                            cd={this.props.cd}
                            setInfo={this.props.setInfo}
                        />
                    </div>
                )}
                {!this.props.name && (
                    <div id="dog-info-container">
                        <h4 id="dog-name">Welcome to your profile page!</h4>
                        <div id="instruction">
                            <svg
                                height="50px"
                                width="50px"
                                viewBox="0 0 16 16"
                                className="bi bi-camera"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                                />
                                <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                            <h4>
                                Click on the bubble in the top left corner to
                                upload your picture
                            </h4>
                        </div>
                        <div id="instruction">
                            <svg
                                height="50px"
                                width="50px"
                                viewBox="0 0 16 16"
                                className="bi bi-pencil-square"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                    fillRule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                            </svg>
                            <h4>
                                Click on a pen icon to fill your doggies profile
                                information and upload picture.
                            </h4>
                        </div>
                        <div id="instruction">
                            <svg
                                height="150px"
                                width="150px"
                                viewBox="0 0 16 16"
                                className="bi bi-plus-circle"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                            <h4>
                                Click on a plus and invite your friends to join
                                your account! You will get a code that can be
                                user while filling a registration form, that way
                                you can collaborate while training and filling
                                the diary.
                            </h4>
                        </div>
                    </div>
                )}
                {this.props.name && (
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
                {this.state.questionaireIsVisible && (
                    <div>
                     <a className="next-page" href="#character-level">
                            To The Questionaire!
                        </a>
                        <div id="questionaire">
                        
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
                        <div className="character-level" id="character-level">
                            <h2>What is your dogs temperament?</h2>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="docile"
                            >
                                Docile
                            </button>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="active"
                            >
                                Active
                            </button>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="independent"
                            >
                                Independent
                            </button>
                            <button
                                onClick={(e) => this.clickCharacter(e)}
                                value="affectionate"
                            >
                                Affectionate
                            </button>
                            <img src={this.state.characterImg}></img>
                        </div>
                        <div className="hero-level" id="hero-level">
                            <h2>Which famous dog is you favourite?</h2>
                            <button
                                onClick={(e) => this.clickHero(e)}
                                value="lassie"
                            >
                                Lassie
                            </button>
                            <button
                                onClick={(e) => this.clickHero(e)}
                                value="mailo"
                            >
                                Mailo from the MASK
                            </button>
                            <button
                                onClick={(e) => this.clickHero(e)}
                                value="laika"
                            >
                                Laika
                            </button>
                            <button
                                onClick={(e) => this.clickHero(e)}
                                value="snoopy"
                            >
                                Snoopy
                            </button>
                            <img src={this.state.heroImg}></img>
                        </div>
                        <button className="submit-questionaire-button"   onClick={() => this.clickSubmit()}>Submit</button>
                    </div>
                    </div>
                )}
            </div>
        );
    }
}
