import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";
/*import { Home } from "./Home";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Add } from "./Add";*/

export class NavBar extends React.Component {
  /*goToAdd() {
    ReactDOM.render(<Add />, document.getElementById("root"));
  }
  goToTeam() {
    ReactDOM.render(<Team />, document.getElementById("root"));
  }
  goToMission() {
    ReactDOM.render(<Mission />, document.getElementById("root"));
  }
  goToHome() {
    ReactDOM.render(<Home />, document.getElementById("root"));
  }*/
  render() {
    return (
      <div className="NavBar-overall">
        <div class="NavBar-blocks">Home</div>
        <div class="NavBar-blocks">Mission</div>
        <div class="NavBar-blocks">Team</div>
        <div class="NavBar-blocks NavBar-add-an-idea">Add an Idea</div>
      </div>
    );
  }
}
