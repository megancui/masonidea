import React, { Component } from 'react';
import './App.css';
import Masonry from 'react-masonry-component';

import IdeaBox from './IdeaBox';
import IdeasAPI from './API/Ideas';
import Form from './Form';

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
  }

  componentDidMount() {
    IdeasAPI.getIdeas(this.loadIdeas);
  }

  // componentDidUpdate() {
  //   IdeasAPI.getIdeas(this.loadIdeas);
  // }

  loadIdeas = (data) => {
    console.log(data);
    this.setState({
      ideas: data,
    })
  }

  rerender = () => {
    //console.log("rerender");
    IdeasAPI.getIdeas(this.loadIdeas);
  }

  render() {
    return (
      <div className="App">
        <div className="App__title">
          <h1>Mason’s Big Idea Hunt</h1>
        </div>

        <Masonry className="App__masonry">
            <Form callback={this.rerender}/>
            {this.state.ideas.map((item, i) => {
              return (<IdeaBox key={item.id} title={item.fields.idea} description={item.fields.description} tags={item.fields.tags} isClaimed={ item.fields.isClaimed === 0 ? false : true} />)
            })}
        </Masonry>

      </div>
    );
  }
}

export default App;
