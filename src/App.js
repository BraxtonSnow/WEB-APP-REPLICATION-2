import React, { Component } from "react";
import Modals from "./Components/Modals";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.arrayObj = [
      { name: "Braxton", info: " this is Braxton", image: "photo of Braxton" },
      { name: "Sue", info: " this is Sue", image: "photo of Sue" },
      { name: "Ian", info: " this is Ian", image: "photo of Ian" },
      // ={ name: "ben", info: " this is ben", image: "photo of ben" },
      // { name: "ben", info: " this is ben", image: "photo of ben" },
      // { name: "ben", info: " this is ben", image: "photo of ben" },
      // { name: "ben", info: " this is ben", image: "photo of ben" },
      // { name: "ben", info: " this is ben", image: "photo of ben" },
    ];
  }
  render() {
    return (
      <div className="app">
        <div className="header-container">
          <h1>Info Page</h1>
        </div>
        <div className="app-body-container">
          <Modals arrayObj={this.arrayObj} />
          {/* <Modals
              name={this.arrayObj[0].name}
              info={this.arrayObj[0].info}
              image={this.arrayObj[0].image}
            />; */}
          {/* <Modals
            name={this.arrayObj[1].name}
            info={this.arrayObj[1].info}
            image={this.arrayObj[1].image}
          />
          <Modals
            name={this.arrayObj[2].name}
            info={this.arrayObj[2].info}
            image={this.arrayObj[2].image}
          /> */}
        </div>
        <div className="footer-container"></div>
      </div>
    );
  }
}
