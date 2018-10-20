import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Masonry from 'react-masonry-component';

import IdeaBox from './IdeaBox';
import IdeasAPI from './API/Ideas';

// <IdeaBox title="IDEA 1" description="DESCRIPTION 1" tags={["A", "B", "C"]} isClaimed={true} />
// <IdeaBox title="IDEA 2" description="DESCRIPTION 2" tags={["1", "2", "3"]} isClaimed={false} />
// <IdeaBox title="IDEA 3" description="DESCRIPTION 3" tags={["1", "2", "3"]} isClaimed={true} />
// <IdeaBox title="IDEA 4" description="DESCRIPTION 4" tags={["1", "2", "3"]} isClaimed={false} />
// <IdeaBox title="IDEA 5" description="DESCRIPTION 5" tags={["1", "2", "3"]} isClaimed={false} />
// <IdeaBox title="IDEA 6" description="DESCRIPTION 6" tags={["1", "2", "3"]} isClaimed={true} />
// <IdeaBox title="IDEA 7" description="DESCRIPTION 7" tags={["1", "2", "3"]} isClaimed={true} />

class App extends Component {
  state = {
    ideas: [],
    title: "",
    description: "",
    h1: "",
    h2: "",
    h3: "",
  }

  componentDidMount() {
    IdeasAPI.getIdeas(this.loadIdeas);
  }

  loadIdeas = (data) => {
    this.setState({
      ideas: data,
    })
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

  render() {
    return (
      <div className="App">
        <br/>
        <label>Title: </label><input type="text" value={this.state.title} name="title" onChange={evt => this.updateState(evt)} /><br/>
        <label>Description: </label><input type="text" value={this.state.description} name="description" onChange={evt => this.updateState(evt)} /><br/>
        <label>Hashtag #1: </label><input type="text" value={this.state.h1} name="h1" onChange={evt => this.updateState(evt)} /><br/>
        <label>Hashtag #2: </label><input type="text" value={this.state.h2} name="h2" onChange={evt => this.updateState(evt)} /><br/>
        <label>Hashtag #3: </label><input type="text" value={this.state.h3} name="h3" onChange={evt => this.updateState(evt)} /><br/>
        <button onClick={() => IdeasAPI.addIdea(this.getData())}>Submit info here</button>

        <br/>

        <Masonry>
          {this.state.ideas.map((item, i) => {
            return (<IdeaBox title={item.fields.idea} description={item.fields.description} tags={item.fields.tags} isClaimed={ item.fields.isClaimed == "0" ? false : true} />)
          })}
        </Masonry>

        <div>

        </div>
      </div>
    );
  }
}

export default App;
