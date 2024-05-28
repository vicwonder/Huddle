import React from "react";
import topsection from "./Huddle_Images/bg-section-top-desktop-1.svg";
import topsection2 from "./Huddle_Images/bg-section-top-desktop-2.svg";
import bottomsection from "./Huddle_Images/bg-section-bottom-desktop-1.svg";
import bottomsection2 from "./Huddle_Images/bg-section-bottom-desktop-2.svg";

const ImageText = ({ head, text, image, type }) => {
  return (
    <div>
      {type === "first" && (
        <div>
          <img className="top" src={topsection} alt="top" />
        </div>
      )}
      {type === "third" && (
        <div>
          <img className="top" src={topsection2} alt="top" />
        </div>
      )}
      <div
        className={`imgText-con ${type === "middle" ? "imgText-con-rev" : ""}`}
      >
        <div className="text">
          <h1>{head}</h1>
          <p>{text}</p>
        </div>
        <div>
          <img className="pic" src={image} alt="grow-together" />
        </div>
      </div>
      {type === "first" && (
        <div>
          <img src={bottomsection} alt="bottom" className="bottom" />
        </div>
      )}
      {type === "third" && (
        <div>
          <img src={bottomsection2} alt="bottom" className="bottom" />
        </div>
      )}
    </div>
  );
};

export default ImageText;
