import React from "react";

const CommunityFormed = ({ icon, lgText, smText }) => {
  return (
    <div className="commformed">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <h1 className="large">{lgText}</h1>
      <p className="small">{smText}</p>
    </div>
  );
};

export default CommunityFormed;
