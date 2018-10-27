import React from 'react';
import './IdeaBox.css';
import ReactModal from 'react-modal';
import IdeasAPI from './API/Ideas';

//props: title as a string, description as a string,
//tags as an array of string

class IdeaBox extends React.Component {
  state = {
    boxColor: "pink",
    tags: this.props.tags,
    title: this.props.title,
    description: this.props.description,
    isClaimed: this.props.isClaimed,
    id: this.props.id,
    showModal: false,
    name: "",
    email: "",
    rerender: this.props.rerender,
  }

  getRandomColor() {
    var random = Math.floor(Math.random() * 3);

    switch (random) {
      case 1:
        this.setState({
          boxColor: "#022439"
        })
        break;
      case 2:
        this.setState({
          boxColor: "#2a546f"
        })
        break;
      case 0:
        this.setState({
          boxColor: "#528fb5"
        })
        break;
    }
  }

  openModal = () => {
    this.setState({
      showModal: true,
    })
  }

  closeModal = () => {
    console.log("close");
    this.setState({
      showModal: false,
    }, () => {this.state.rerender()});
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitClaim = () => {
    console.log("clicked");

    var data = {
      rowID: this.state.id,
      name: this.state.name,
      email: this.state.email,
    }

    IdeasAPI.claimIdea(data, this.closeModal);
  }

  callback = () => {
    console.log("render");
    this.state.rerender();
  }

  componentDidMount() {
    this.getRandomColor();
  }

  render() {
    return (
      <div className="IdeaBox__container" style={{backgroundColor: this.state.boxColor}}>
        <div onClick={this.openModal}>
          <div className="IdeaBox__title">
            {this.state.title}
          </div>
          <div className="IdeaBox__description">
            {this.state.description}
          </div>
          <div className="IdeaBox__tags">
            { this.state.tags.map((item, i) => {
              if (item !== undefined) {
                return (<div className="IdeaBox__tag" key={i} style={{color: this.state.boxColor}}>#{item}</div>)
              }
              else {
                return "";
              }
            })}
          </div>
          <div className="IdeaBox__claimed">
            { this.state.isClaimed ? "Claimed" : "Open" }
          </div>
        </div>
        {!this.state.isClaimed ?

        <ReactModal className="IdeaBox__modal" isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <h1>Claim This Idea</h1>
          <div className="Modal__close" onClick={this.closeModal}>x</div>
          <br/>
          <h3>Idea Overview</h3>
          <div className="Modal__idea">
            <p><b>{this.state.title}</b></p>
            <p>{this.state.description}</p>
          </div>
          <div className="Modal__inputs">
            <div className="Modal__section" style={{marginBottom: "5px"}}>
              <label>Your name: </label>
              <input type="text" value={this.state.name} name="name" onChange={evt => this.updateState(evt)} />
            </div>
            <div className="Modal__section" style={{marginBottom: "5px"}}>
              <label>Your email: </label>
              <input type="text" value={this.state.email} name="email" onChange={evt => this.updateState(evt)} />
            </div>
          </div>
          <button className="Modal__submit" onClick={this.submitClaim}>Submit it</button>
        </ReactModal>

        :

        <ReactModal className="IdeaBox__modal" isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <h1>This idea has already been claimed.</h1>
          <div className="Modal__close" onClick={this.closeModal}>x</div>
        </ReactModal>
      }

      </div>
    );
  }
}

export default IdeaBox;
