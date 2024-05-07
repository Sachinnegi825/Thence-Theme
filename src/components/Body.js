import React from "react";
import GirlImg from "../assets/images/girl.svg";
import Spark from "../assets/images/spark.svg";
import Rocket from "../assets/images/rocket.svg";
import Carasoul from "../assets/images/carasoul.svg";
import QuestionBox from "./QuestionBox";

const Body = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_top">
          <p>Success stories</p>
          <h3>
            Every success journey <br /> we’ve encountered.
          </h3>
        </div>

        <div className="banner_bottom">
          <div className="img_section">
            <img src={GirlImg} alt="img" />
            <div className="first_box">
              <img src={Spark} alt="img" />
              <h3 style={{ fontSize: "64px" }}>40%</h3>
              <p>
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>

            <div className="second_box">
              <img src={Rocket} alt="rocket" />
              <div>
                <h4>10 DAYS</h4>
                <p>Staff Deployment</p>
              </div>
            </div>

            <div className="third_box">
              <h4 style={{ color: "#A6A3A0" }}>
                <span style={{ fontSize: "63px", color: "white" }}>$0.5</span>{" "}
                MILLION
              </h4>
              <p>
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
          </div>

          <div className="carasoul_section">
            <h4>
              Enhance fortune 50 company’s insights teams research capabilities
            </h4>
            <img src={Carasoul} alt="carasoul" className="carasoul" />
            <button className="btn">Explore more ➡</button>
          </div>
        </div>
      </div>

      <QuestionBox />
    </>
  );
};

export default Body;
