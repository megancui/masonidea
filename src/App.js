import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    ideas: []
  }

  componentDidMount() {
    IdeasAPI.getIdeas(this.loadIdeas);
  }

  loadIdeas = (data) => {
    this.setState({
      ideas: data,
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.ideas.map((item, i) => {
            return (<IdeaBox title={item.fields.idea} description={item.fields.description} tags={["A", "B", "C"]} isClaimed={ item.fields.isClaimed == "0" ? false : true} />)
          })}
        </div>

      </div>
    );
  }
}

export default App;
