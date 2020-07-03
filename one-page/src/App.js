import React, { Component } from 'react';
import './App.css'

export class App extends Component {
  render() {
    return (
      <div>
        <div className="main">


          <div className="first-part">
            <h2>TOURNAMENT ID</h2>
            <h1>EASY ACCESS TO SPORTS TOURNAMENTS ACROSS THE WORLD</h1>
            <p>Join a tournament ay any time of the year, at any destination.</p>
            <p>Ideal for athletes at any age and level, parents, brands, agencies, sponsors and agents.</p>
            <button>JOIN TOURNAMENTID NOW!</button>
          </div>


          <div className="second-part">
            <div className="second-part-title">
              <h1>ARRANGE A TOURNAMENT</h1>
              <p>TIME FOR A CHALLENGE? FIND A TOURNAMENT!</p>
            </div>
            <div className="second-part-content">
              <div className="second-part-content-image">image</div>
              <div className="second-part-content-description">
                <h2>Instant access from your computer or smartphone</h2>
                <ul>
                  <li>Find, apply, and review sports tournaments</li>
                  <li>Year-round access to thousands of tournaments</li>
                  <li>World-wide reach to competitions</li>
                  <li>Raise your team's profile on our comprehensive platform</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="third-part">
            <h1>WHY TOURNAMENT ID?</h1>
            <p>Competitive tournaments bring out the best in athletes. It's where we identify the strengths and weaknesses in our game to help us build a better version of ourselves while enjoying the thrill of competition. </p>
            <p>TOURNAMENTID gives you access to a vast database of tournaments, whether they're local or abroad - apply for a tournament at any time of the year using your computer or smartphone.</p>
            <div className="third-part-image">image</div>
          </div>
          

          <div className="fourth-part">
            <div className="fourth-part-title">
              <h1>TEST YOURSELF AGAINST THE COMPETITION</h1>
              <p>Find a tournament</p>
            </div>
            <div className="fourth-part-content-1">
              <div className="american-football">
                <h3>American football</h3>
                <div className="fourth-part-image">image</div>
              </div>
              <div className="basketball">
                <h3>Basketball</h3>
                <div className="fourth-part-image">image</div>
              </div>
              <div className="soccer">
                <h3>Soccer</h3>
                <div className="fourth-part-image">image</div>
              </div>
              <div className="swimming">
                <h3>Swimming</h3>
                <div className="fourth-part-image">image</div>
              </div>
            </div>
            <div className="fourth-part-content-2">
              <p><i>Get year-round access to top competition</i></p>
              <button>JOIN TOURNAMENT ID NOW!</button>
            </div>
            <div className="fourth-part-footer">
              <h1>Powered by SportsID</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
