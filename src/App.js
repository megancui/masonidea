import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IdeaBox from './IdeaBox';
import IdeasAPI from './API/Ideas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => {IdeasAPI.updateIdea200()}}>Click me to access the airtable</button>
        <IdeaBox title="IDEA 1" description="DESCRIPTION 1" tags={["A", "B", "C"]} color="red" />
        <IdeaBox title="IDEA 2" description="DESCRIPTION 2" tags={["1", "2", "3"]} color="red" />
        <IdeaBox title="IDEA 3" description="DESCRIPTION 3" tags={["1", "2", "3"]} color="red" />
        <IdeaBox title="IDEA 4" description="DESCRIPTION 4" tags={["1", "2", "3"]} color="red" />
        <IdeaBox title="IDEA 5" description="DESCRIPTION 5" tags={["1", "2", "3"]} color="red" />
        <IdeaBox title="IDEA 6" description="DESCRIPTION 6" tags={["1", "2", "3"]} color="red" />
        <IdeaBox title="IDEA 7" description="DESCRIPTION 7" tags={["1", "2", "3"]} color="red" />
      </div>
    );
  }
}

export default App;
