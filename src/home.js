import React from "react";
import ReactDOM from "react-dom";
import logo from "./pics/Idealogo.jpg";
import logo2 from "./pics/k12.jpg";
import "./home.css";
/*import { Mission } from "./Mission";*/
import { NavBar } from "./NavBar";
import App from "./App";

export class Home extends React.Component {
  render() {
    return (

      <div id="bg">
        <NavBar />
          <br />
          <br />
          <br />
          <br />

          <div className="containor">
            <div className="frist">
              <a href="https://masonignite.com" target="_blank">
                <img src={logo} width="300" height="auto" />
              </a>
            </div>
            <div className="second">
              <a
                href="https://helloignite.io/static/app/index.html#/event/masonCounty2018/static/Overview"
                target="_blank"
              >
                <img src={logo2} width="300" height="auto" />
              </a>
            </div>

            <div id="clear" />

            <br />
            <br />
            <br />

            <div className="containor">
              <div id="FT">
                <h3>
                  Idea Grab: <br />Share Extra Ideas or Look for Inspiration
                </h3>
                <p>
                  Do you have lots of ideas? More ideas than you can <br />reasonably
                  execute? Are not sure where to start? This Idea<br /> Drop is
                  where you can submit extra ideas for others to <br />pick up.
                  You can also claim ideas others submit and build <br />on them
                  to make them your own.
                </p>
              </div>
              <div id="ST">
                <h3>
                  InnovateK12: <br /> Officially Submit Your Team’s Ideas
                </h3>
                <p>
                  Entering your idea here officially submits it to the <br />Ignite
                  Your Vision challenge. You will be asked to fill <br />out a
                  form with several questions. By putting the idea<br /> in this
                  section, you’re committing to go through the whole<br />{" "}
                  process and - if chosen - eventually lead your idea
                  implementation<br /> (with lots of help, of course!)
                </p>
              </div>
              <div id="clear" />
            </div>
          </div>
          <br />

          {/* start of gen text */}

          <div id="how">
            <div className="f">
              <br />
              <h1> How It Works? </h1>
              <p>
                You submit ideas, people vote on the ideas in pairs. Idea
                Champions<br />get training in implementing their ideas and the
                ideas get funded!<br /> It’s that simple.
              </p>
              <br />
            </div>

            <div className="s">
              <h1> What Kind of Ideas Are Acceptable? </h1>
              <p>
                Really just about anything you can think of could be submitted!{" "}
                <br />It’s up to you! All ideas that are deemed viable and
                feasible by an <br />expert panel and fit within the funding
                restraints could be chosen.<br /> Yes, crazy ideas are
                acceptable! If you’re not sure, go ahead and submit your idea.{" "}
              </p>

              <br />

              <p>
                Just like the good citizen that you are, avoid bullying and
                putting<br /> down others. Your ideas should be
                school-appropriate. They should <br />create positive change!
                Ideas deemed inappropriate for the school <br />environment may
                be removed.
              </p>
              <br />
            </div>

            <div className="f">
              <br />
              <h1> What Is the Process? </h1>

              <div id="what">
                <ol>
                  <li> Ideas are submitted throughout November </li>
                  <li> Ideas are voted on in December </li>
                  <li>
                    The top idea teams will go through Human-Centered Design
                    training in order to better implement and refine their
                    ideas.{" "}
                  </li>
                  <li> We go through the second round of voting </li>
                  <li> Top ideas are funded! </li>
                </ol>
                <br />
              </div>
            </div>
          </div>
        </div>
    );
  }
}
