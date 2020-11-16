import React from "react";
import axios from "./axios";

export default class Bioeditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogId: this.props.dogId,
            text: this.props.bio,
            name: "",
            size: "",
            gender: "",
            cd: "",
            userId: null,
            error: false,
            bioEditIsVisible: false,
        };
        this.openBioEditor = this.openBioEditor.bind(this);
        this.closeBioEditor = this.closeBioEditor.bind(this);
    }
    openBioEditor(e) {
        e.preventDefault();
        this.setState({ bioEditIsVisible: true });
    }
    closeBioEditor(e) {
        e.preventDefault();
        this.setState({ bioEditIsVisible: false });
    }
    handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData();
        //console.log("this.state before forming FormData :", this.state);
        formData.append("file", this.state.file);
        //console.log("this.file ", this.file);
        formData.append("name", this.state.name);
        formData.append("gender", this.state.gender);
        formData.append("size", this.state.size);
        formData.append("bio", this.state.text);
        formData.append("cd", this.props.cd);
        var that = this;
        //console.log("formData before sending it", formData);
        if (!this.props.dogId) {
            axios
                .post("/uploaddogbio", formData)
                .then(function (resp) {
                    // console.log(
                    //     "response in DogBio.js after axios is done",
                    //     resp
                    // );
                    console.log("resp.data.dog.name", resp.data.dog.name);
                    // console.log("resp.data.dog.gender", resp.data.dog.gender);
                    //  console.log("resp.data.dog.size", resp.data.dog.size);
                    // e.target.children.value = "";
                    that.props.setInfo;
                    that.clearInput();
                    that.setState({ bioEditIsVisible: false });
                })
                .catch(function (err) {
                    console.log("error in axios post", err);
                });
        } else {
            formData.append("dogId", this.props.dogId);
            // console.log("formData before sending it", formData);
            axios
                .post("/updatedogbio", formData)
                .then(function (resp) {
                    console.log(
                        "response in update DogBio.js after axios is done",
                        resp
                    );
                    // console.log("resp.data.dog.name", resp.data.dog.name);
                    // console.log("resp.data.dog.gender", resp.data.dog.gender);
                    // console.log("resp.data.dog.size", resp.data.dog.size);
                    that.props.setInfo;
                    that.clearInput();
                    that.setState({ bioEditIsVisible: false });
                })
                .catch(function (err) {
                    console.log("error in axios post", err);
                });
        }
    }
    clearInput() {
        var inputs = document.querySelectorAll("input");
        // console.log("inputs[0]  : ", inputs[0]);
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }
    handleChange(e) {
        //console.log("HandleChange is reacting, e.target.value", e.target);
        const target = e.target;
        if (!e.target.files) {
            const { name, value } = target;
            this.setState(
                {
                    [name]: value,
                },
                () => {
                    console.log("this.state", this.state);
                }
            );
        } else {
            this.setState({ file: e.target.files[0] });
        }
    }
    render() {
        return (
            <div id="bio-editor">
                <div>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                </div>

                <div>
                    {!this.state.bioEditIsVisible && this.props.bio && (
                        <button
                            onClick={this.openBioEditor}
                            type="button"
                            className="add-btn"
                            aria-label="Left Align"
                        >
                            <svg
                                width="1em"
                                height="1em"
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
                        </button>
                    )}
                    {!this.state.bioEditIsVisible && !this.props.bio && (
                        <button id="add-button" onClick={this.openBioEditor}>
                            <svg
                                width="1em"
                                height="1em"
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
                        </button>
                    )}
                </div>
                {this.state.bioEditIsVisible && (
                    <div className="dogbioform">
                        <button
                            id="close-bio-editor"
                            onClick={this.closeBioEditor}
                        >
                            x
                        </button>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <div>
                                <label>Doggys Name: </label>
                                <input
                                    className="dogname-input"
                                    onChange={(e) => this.handleChange(e)}
                                    name="name"
                                    value={this.state.name}
                                    placeholder="Doggys Name"
                                />
                            </div>
                            <input
                                onChange={(e) => this.handleChange(e)}
                                type="file"
                                name="file"
                                accept="image/*"
                            />
                            <div>
                                <textarea
                                    className="doginfo-input"
                                    onChange={(e) => this.handleChange(e)}
                                    //value={this.props.bio}
                                    name="text"
                                    rows="5"
                                    cols="60"
                                ></textarea>
                            </div>
                            <label htmlFor="gender">Gender:</label>
                            <select
                                name="gender"
                                id="gender"
                                onChange={(e) => this.handleChange(e)}
                            >
                                <option value="null">---</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>

                            <label htmlFor="size">Size:</label>
                            <select
                                name="size"
                                id="size"
                                onChange={(e) => this.handleChange(e)}
                            >
                                <option value="null">---</option>
                                <option value="big">Big</option>
                                <option value="mid">Middle</option>
                                <option value="small">Small</option>
                            </select>
                            <button>Submit</button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}
