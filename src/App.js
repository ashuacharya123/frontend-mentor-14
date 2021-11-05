import React, { useState } from "react";

import "./App.css";
import data from "./data.json";
import dp from "./images/image-jeremy.png";
import options from "./images/icon-ellipsis.svg";

function App() {
  const [state, setState] = useState("weekly");
  return (
    <div className="container">
      <div className="content">
        <div className="content__upper">
          <div className="content__upper__top">
            <img src={dp} alt="dp" />

            <h3>
              Report for<span>Jeremy Robson</span>
            </h3>
          </div>
          <div className="content__upper__bottom">
            <span
              onClick={(e) => setState("daily")}
              id={state === "daily" ? "white" : ""}
            >
              Daily
            </span>
            <span
              onClick={(e) => setState("weekly")}
              id={state === "weekly" ? "white" : ""}
            >
              Weekly
            </span>
            <span
              onClick={(e) => setState("monthly")}
              id={state === "monthly" ? "white" : ""}
            >
              Monthly
            </span>
          </div>
        </div>
        <div className="content__lower">
          <div className="card__container">
            {data.map((d) => (
              <div className="card" key={d.title}>
                <h2>{d.title}</h2>

                <span>
                  {state === "weekly"
                    ? d.timeframes.weekly.current
                    : state === "monthly"
                    ? d.timeframes.monthly.current
                    : state === "daily"
                    ? d.timeframes.daily.current
                    : ""}
                  hrs
                </span>

                <img src={options} alt="options" />
                <span>
                  Last Week - {""}
                  {state === "weekly"
                    ? d.timeframes.weekly.previous
                    : state === "monthly"
                    ? d.timeframes.monthly.previous
                    : state === "daily"
                    ? d.timeframes.daily.previous
                    : ""}
                  hrs
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
