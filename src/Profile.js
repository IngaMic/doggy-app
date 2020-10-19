import React from "react";
//import axios from "./axios";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            imageUrl: "",
            file: "",
            cd: "",
            userId: null,
            error: false,
        };
        // this.closeEditor = this.closeEditor.bind(this);
    }
    componentDidMount() {
        this.setState({
            userId: this.props.userId,
        });
    }
    render() {
        return (
            <div className="profiles">
                {this.props.logUserId && (
                    <div id="users-profile">
                        <img
                            onClick={this.props.clickHandler}
                            id="big-profile-img"
                            src={
                                this.props.imageUrl ||
                                "https://thumbs.dreamstime.com/b/thin-line-black-camera-logo-like-upload-your-photo-thin-line-black-camera-logo-like-upload-your-photo-graphic-art-design-element-106033006.jpg"
                            }
                            alt=""
                            width="200"
                            height="250"
                        ></img>
                        <h4 id="name-surname">{this.props.first}</h4>
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
