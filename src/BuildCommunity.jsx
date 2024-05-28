import React from "react";
import screen from "./Huddle_Images/screen-mockups.svg";

const BuildCommunity = ({ style, head, type }) => {
  return (
    <div className="build-component" style={style}>
      <h1>{head}</h1>
      {type === "top" && (
        <p>
          Huddle re-images the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussions.
        </p>
      )}
      <button>Get Started For Free</button>
      {type === "top" && <img src={screen} alt="screen" />}
    </div>
  );
};

export default BuildCommunity;
