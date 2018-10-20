import React from 'react';
import './IdeaBox.css';

//props: title as a string, description as a string,
//tags as an array of string

class IdeaBox extends React.Component {
  state = {
    boxColor: "pink"
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
          {this.props.title}
        </div>
        <div className="IdeaBox__description">
          {this.props.description}
        </div>
        <div className="IdeaBox__tags">
          { this.props.tags.map((item, i) => {
            return (<div className="IdeaBox__tag" key={i} style={{color: this.state.boxColor}}>#{item}</div>)
          })}
        </div>
      </div>
    );
  }
}

export default IdeaBox;
