import React from "react";
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
        <div className="NavBar-blocks">Home</div>
        <div className="NavBar-blocks">Mission</div>
        <div className="NavBar-blocks">Team</div>
        <div className="NavBar-blocks NavBar-add-an-idea">Add an Idea</div>
      </div>
    );
  }
}
