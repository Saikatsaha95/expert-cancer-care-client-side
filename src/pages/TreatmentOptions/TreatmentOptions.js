import React from "react";
import chemoimg from "../../images/chemo-img.jpg";
import radioimg from "../../images/radio-img.jpg";
import medimg from "../../images/medication.jpg";

const TreatmentOptions = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3"> Treatment Options</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <img className="img-fluid me-3" src={chemoimg} alt="" />
        <img className="img-fluid" src={radioimg} alt="" />
        <img className="img-fluid" src={medimg} alt="" />
      </div>
    </div>
  );
};

export default TreatmentOptions;
