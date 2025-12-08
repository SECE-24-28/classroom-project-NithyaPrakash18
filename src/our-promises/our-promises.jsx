import React from "react";
import { OurPromisesStyle } from "./our-promises-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OurpromisesData } from "./data";

const OurPromisesComponent = () => {
  return (
    <OurPromisesStyle gapLength="20px">
      <div className="paras">
        <h1>Our Promise</h1>
        <p>
          As part of our high quality service, we'd like to offer something
          extra too.
        </p>
      </div>
      <div className="parent">
        {OurpromisesData.map((item, index) => {
          return (
            <div
              className="child"
              key={index}
              style={{ borderTop: `4px solid ${item.color}` }}
            >
              <div className="title__parent">
                <FontAwesomeIcon
                  icon={item.icon}
                  color={item.color}
                  fontSize="30px"
                />
                <h1 className="title">{item.title}</h1>
              </div>
              <div>
                <p className="para">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </OurPromisesStyle>
  );
};
export default OurPromisesComponent;
