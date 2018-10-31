import React, { Component } from 'react';
import './App.css';
import Masonry from 'react-masonry-component';

import IdeaBox from './IdeaBox';
import IdeasAPI from './API/Ideas';
import Form from './Form';
import { NavBar } from './NavBar';

import logo from './logo.png';

import ReactLoading from 'react-loading';

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
    loaded: false,
  }

  componentDidMount() {
    IdeasAPI.getIdeas(this.loadIdeas);
  }

  // componentDidUpdate() {
  //   IdeasAPI.getIdeas(this.loadIdeas);
  // }

  loadIdeas = (data) => {
    this.setState({
      ideas: data,
      loaded: true,
    })
  }

  rerender = () => {
    console.log("rerender");
    IdeasAPI.getIdeas(this.loadIdeas);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App__title">
          <img className="App__logo" src={logo} />
          <h1>Ignite Your Vision</h1>
          <p>Mason High School's Big Idea Hunt</p>
          <p id="App-added-text">This page is for brainstorming. You can add extra ideas and claim ideas to tackle. 
            <br/>To officially submit to the Ignite Your Vision challenge, <a href="https://helloignite.io/static/app/index.html#/event/masonCounty2018/static/Overview" target="_blank">please visit the official entry page.</a></p>
        </div>

        <Masonry className="App__masonry" options={{transitionDuration: 50}}>
          <Form callback={this.rerender}/>
        { this.state.loaded ?
            this.state.ideas.map((item, i) => {
              return (<IdeaBox rerender={this.rerender} key={Math.random()} id={item.id} title={item.fields.idea} description={item.fields.description} tags={item.fields.tags} isClaimed={ item.fields.isClaimed === 0 ? false : true} />)
            })

        :
        <div className="App__loading">
          <ReactLoading type={"spinningBubbles"} color={"#e25b52"} height={'100px'} width={'100px'} />
        </div>
        }
        </Masonry>


      </div>
    );
  }
}

export default App;
