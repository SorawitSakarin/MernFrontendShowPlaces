import React, { useRef, useState } from "react";
import Card from "../components/UIElements/Card";
import Button from "../components/FormElements/Button";
import ReactToPrint from "react-to-print";
import { Policy } from "./Policy";
import QRCode from "react-qr-code";



class AboutUs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "", qrinput: "Hello world" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ qrinput: this.state.value });
    event.preventDefault();
  }
  render() {
   
    return (
      <div>
        <Card>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <Policy ref={(el) => (this.componentRef = el)} />

        <br></br>
          <form onSubmit={this.handleSubmit}>
            <label>
              Convert this to QrCode:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <br></br>
          <Card>
            <QRCode value={this.state.qrinput} />
          </Card>
        </Card>
      </div>
    );
  }
}

export default AboutUs;
