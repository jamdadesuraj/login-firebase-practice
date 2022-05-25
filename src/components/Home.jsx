import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div class="container">
        <div class="card-outer">
          <div class="card">
            <span class="circle"></span>
            <div class="top-div">
              <div class="chip-image">
                <img src="https://i.imgur.com/lRG4VIS.png" />
              </div>

              <div class="plus-sign">
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="card-details">
              <div class="card-number">
                <span>4800</span>
                <span>4800</span>
                <span>4800</span>
                <span>4800</span>
              </div>
              <div class="date">
                <span>11/25</span>
              </div>
            </div>
            <div class="ownername">
              <span>Suraj Jamdade</span>
              <img src="https://imgur.com/KpIC2Cs.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
