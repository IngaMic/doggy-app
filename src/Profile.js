import React from "react";
//import axios from "./axios";
import Bioeditor from "./DogBio";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            imageUrl: "",
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
        console.log("this.state in profile", this.state);
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
                        <div>
                            <img
                                className="user2-profile-img"
                                src={this.props.seconduserimg || "/plus.png"}
                            ></img>
                        </div>
                        <Bioeditor
                            dogId={this.props.dogId}
                            bio={this.props.bio}
                            setInfo={this.props.setInfo}
                        />
                    </div>
                )}
                {this.props.firstuserid && (
                    <div id="dogs-profile">
                        {/* <img
                            id="dog-profile-img"
                            src={this.props.dogimg || "/dog1.png"}
                            alt=""
                            width="200"
                            height="250"
                        ></img> */}
                        <div id="dog-info">
                            <h2 id="dog-name">{this.props.name}</h2>
                            <h4 id="dog-bio">
                                About this little rascal: {this.props.bio}
                            </h4>
                            <h4 id="dog-gender">Gender: {this.props.gender}</h4>
                            <h4 id="dog-size">Size: {this.props.size}</h4>
                        </div>
                    </div>
                )}
                <div>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                </div>
            </div>
        );
    }
}
