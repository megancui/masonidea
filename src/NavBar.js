import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";
import { Home } from "./home";
/*import { Mission } from "./Mission";*/
import { Team } from "./Team";
import App from "./App";

export class NavBar extends React.Component {
  goToAdd() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  goToTeam() {
    ReactDOM.render(<Team />, document.getElementById("root"));
  }
  /*goToMission() {
    ReactDOM.render(<Mission />, document.getElementById("root"));
  }*/
  goToHome() {
    ReactDOM.render(<Home />, document.getElementById("root"));
  }
  render() {
    return (
      <div className="NavBar-overall">
        <div className="NavBar-blocks" onClick={this.goToHome}>Home</div>
        <div className="NavBar-blocks" onClick={this.goToTeam}>Team</div>
        <div className="NavBar-blocks NavBar-add-an-idea" onClick={this.goToAdd}>Add an Idea</div>
      </div>
    );
  }
}
