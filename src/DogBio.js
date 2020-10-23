import React from "react";
import axios from "./axios";

export default class Bioeditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.bio,
            name: "",
            size: "",
            gender: "",
            userId: null,
            error: false,
            bioEditIsVisible: false,
        };
        this.openBioEditor = this.openBioEditor.bind(this);
    }
    openBioEditor(e) {
        e.preventDefault();
        this.setState({ bioEditIsVisible: true });
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
        var that = this;
        console.log("formData before sending it", formData);
        axios
            .post("/uploaddogbio", formData)
            .then(function (resp) {
                console.log("response in DogBio.js after axios is done", resp);
                console.log("resp.data.dog.name", resp.data.dog.name);
                console.log("resp.data.dog.gender", resp.data.dog.gender);
                console.log("resp.data.dog.size", resp.data.dog.size);
                // e.target.children.value = "";
                that.props.setInfo;
                that.clearInput();
                that.setState({ bioEditIsVisible: false });
            })
            .catch(function (err) {
                console.log("error in axios post", err);
            });
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
                        <button id="add-button" onClick={this.openBioEditor}>
                            Edit
                        </button>
                    )}
                    {!this.state.bioEditIsVisible && !this.props.bio && (
                        <button id="add-button" onClick={this.openBioEditor}>
                            Add
                        </button>
                    )}
                </div>
                {this.state.bioEditIsVisible && (
                    <div className="dogbioform">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <div>
                                <label>Doggys Name: </label>
                                <input
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
