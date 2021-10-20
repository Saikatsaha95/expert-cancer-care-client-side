import React from "react";
import "./ExpertCard.css";

const ExpertCard = (props) => {
  const {
    name,
    age,
    designation,
    image,
    gender,
    salary,

    website,
    experience,
  } = props.expert;
  return (
    <div className="col-md-6 col-lg-4 col-12 ">
      <div className="card mb-3 set-width card-design">
        <div className="d-flex ">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start  developer-img"
              alt="..."
            />
          </div>
          {/* Displaying the each developer data */}
          <div className="col-md-8 card-body">
            <table>
              <tbody>
                <tr>
                  <th className="card-title">Name: </th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th className="card-title">Age: </th>
                  <td>{age}</td>
                </tr>

                <tr>
                  <th className="card-title">Designation: </th>
                  <td>{designation}</td>
                </tr>
                <tr>
                  <th className="card-title">Experience: </th>
                  <td>{experience}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
