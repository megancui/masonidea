import React from "react";
import ReactDOM from "react-dom";
import logo from "./pics/Idealogo.jpg";
import logo2 from "./pics/k12.jpg";
import "./home.css";
/*import { Mission } from "./Mission";*/
import { NavBar } from "./NavBar";
import App from "./App";

export class Home extends React.Component {
  goToAdd() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  render() {
    return (

      <div id="bg">
        <NavBar />

          <div className="containor">
            <div className="frist">

                  <a
                    href="https://helloignite.io/static/app/index.html#/event/masonCounty2018/static/Overview"
                    target="_blank">
                    <img src={logo2} width="300" height="auto" />
                  </a>
                  <h3>
                    InnovateK12:  Officially Submit Your Team’s Ideas
                  </h3>
                  <p>
                    Entering your idea here officially submits it to the Ignite Your Vision challenge. You will be asked to fill out a form with several questions. By putting the idea in this section, you’re committing to go through the whole process and - if chosen - eventually lead your idea implementation (with lots of help, of course!)
                  </p>
          </div>
            <div className="second">
              <img src={logo} width="auto" height="400" onClick={this.goToAdd}/>
                <h3>
                  Idea Grab: Share Extra Ideas or Look for Inspiration
                </h3>
                <p>
                  Do you have lots of ideas? More ideas than you can reasonably execute? Are not sure where to start? This Idea Drop is where you can submit extra ideas for others to pick up. You can also claim ideas others submit and build on them to make them your own.
                </p>
            </div>
          </div>


          {/* start of gen text */}

          <div id="how">
            <div className="f">
              <div style={{maxWidth: "700px", marginLeft: "auto", marginRight: "auto"}}>

              <h1> How It Works? </h1>
              <p>
                You submit ideas, people vote on the ideas in pairs. Idea Champions get training in implementing their ideas and the ideas get funded! It’s that simple.
              </p>
            </div>

            </div>

            <div className="s">
              <div style={{maxWidth: "700px", marginLeft: "auto", marginRight: "auto"}}>
                <h1> What Kind of Ideas Are Acceptable? </h1>
                <p>
                  Really just about anything you can think of could be submitted! It’s up to you! All ideas that are deemed viable and feasible by an expert panel and fit within the funding restraints could be chosen. Yes, crazy ideas are acceptable! If you’re not sure, go ahead and submit your idea.{" "}
                </p>
                <p>
                  Just like the good citizen that you are, avoid bullying and putting down others. Your ideas should be school-appropriate. They should create positive change! Ideas deemed inappropriate for the school environment may be removed.
                </p>
              </div>
            </div>

            <div className="f">

              <h1> What Is the Process? </h1>

              <div id="what">
                  <p>- Ideas are submitted throughout November</p>
                  <p>- Ideas are voted on in December</p>
                  <p>- The top idea teams will go through Human-Centered Design training in order to better implement and refine their ideas
                  </p>
                  <p>- We go through the second round of voting</p>
                  <p>- Top ideas are funded!</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
