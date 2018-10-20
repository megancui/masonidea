import React from 'react';
import './Form.css';
import IdeasAPI from './API/Ideas';

class Form extends React.Component {
  state = {
    title: "",
    description: "",
    h1: "",
    h2: "",
    h3: "",
    only3: "",
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getData() {
    var data = {
      "idea": this.state.title,
      "description": this.state.description,
      "h1": this.state.h1,
      "h2": this.state.h2,
      "h3": this.state.h3,
      "isClaimed": 0
    }
    return data;
  }

  getNumTags() {
    var i = 3;
    if (this.state.h1 !== "") {
      i--;
    }

    if (this.state.h2 !== "") {
      i--;
    }

    if (this.state.h3 !== "") {
      i--;
    }
    return i;
  }

  handleClick = (tag) => {
    //console.log(tag);


    if (this.state.h1 === tag ) {
      this.setState({
        h1: ""
      })
    }
    else if (this.state.h2 === tag ) {
      this.setState({
        h2: ""
      })
    }
    else if (this.state.h3 === tag ) {
      this.setState({
        h3: ""
      })
    }
    else if (this.state.h1 === "" ) {
      this.setState({
        h1: tag
      })
    }
    else if (this.state.h2 === "" ) {
      this.setState({
        h2: tag
      })
    }
    else if (this.state.h3 === "" ) {
      this.setState({
        h3: tag
      })
    }
    else {
    }
  }

  getSelected = (tag) => {
    //console.log("checking selected " + tag);

    if (this.state.h1 === tag ) {
      return "Form__tag--selected";
    }
    else if (this.state.h2 === tag ) {
      return "Form__tag--selected";
    }
    else if (this.state.h3 === tag ) {
      return "Form__tag--selected";
    }
  }


  render() {
    //console.log(this.state.h1 + " " + this.state.h2 + " " + this.state.h3);

    return (
      <div className="Form__container">
        <div className="Form__title">ADD YOUR IDEA</div>
        <div className="Form__section Form__section--flex">
          <label>Name it: </label>
          <input type="text" value={this.state.title} name="title" onChange={evt => this.updateState(evt)} />
        </div>
        <div className="Form__section">
          <label>Describe it: </label>
          <textarea value={this.state.description} name="description" onChange={evt => this.updateState(evt)}></textarea>
        </div>
        <div className="Form__section">
          <label>Tag it:</label>
          <p>Choose up to {this.getNumTags()} more hashtag(s).</p>
          <div className={"Form__tag " + this.getSelected("cafeteria")} onClick={() => this.handleClick("cafeteria")}>
            #cafeteria
          </div>
          <div className={"Form__tag " + this.getSelected("health")} onClick={() => this.handleClick("health")}>
            #health
          </div>
          <div className={"Form__tag " + this.getSelected("learning")} onClick={() => this.handleClick("learning")}>
            #learning
          </div>
          <div className={"Form__tag " + this.getSelected("food")} onClick={() => this.handleClick("food")}>
            #food
          </div>
          <div className={"Form__tag " + this.getSelected("experience")} onClick={() => this.handleClick("experience")}>
            #experience
          </div>
          <div className={"Form__tag " + this.getSelected("other")} onClick={() => this.handleClick("other")}>
            #other
          </div>
        </div>

        <div className="Form__section">
          <button onClick={() => IdeasAPI.addIdea(this.getData())}>Submit info here</button>
        </div>

      </div>
    )
  }
}

export default Form;
