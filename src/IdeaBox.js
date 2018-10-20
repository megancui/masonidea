import React from 'react';
import './IdeaBox.css';

//props: title as a string, description as a string,
//tags as an array of string

class IdeaBox extends React.Component {
  state = {
    boxColor: "pink",
    tags: this.props.tags,
    title: this.props.title,
    description: this.props.description,
    isClaimed: this.props.isClaimed,
  }

  getRandomColor() {
    var random = Math.floor(Math.random() * 3);
    console.log(this.state.boxColor);

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

  componentDidMount() {
    this.getRandomColor();
  }

  render() {
    return (
      <div className="IdeaBox__container" style={{backgroundColor: this.state.boxColor}}>
        <div className="IdeaBox__title">
          {this.state.title}
        </div>
        <div className="IdeaBox__description">
          {this.state.description}
        </div>
        <div className="IdeaBox__tags">
          { this.state.tags.map((item, i) => {
            console.log(item);
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
    );
  }
}

export default IdeaBox;
