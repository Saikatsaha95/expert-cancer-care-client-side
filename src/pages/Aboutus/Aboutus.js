import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/building-img.jpg";
import img1 from "../../images/aboutus-img-2.jpg";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="container mt-5 about-page">
      <div className="top-section mb-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={5} sm={12} xs={12} className="me-5 left-column">
              <h1>About MindSpace</h1>
              <p className="mt-4">
                Expert Cancer Care® (ECC) was founded in 1988 by Richard J
                Stephenson, following the death of his mother, Mary Brown
                Stephenson, from cancer. After his mother’s diagnosis, Mr.
                Stephenson and his family searched for the most effective cancer
                treatments and supportive care options designed to enhance
                quality of life. They were disappointed to discover this type of
                integrated model, which his mother needed and deserved, did not
                exist. Sadly, Mrs. Stephenson passed away before she could watch
                her grandchildren grow and mature. To keep his mother’s spirit
                alive, Mr. Stephenson vowed to change the face of cancer care.
                He created a new model of care that changed the way oncologists,
                surgeons and other clinical professionals treat patients with
                cancer. This whole-person cancer treatment approach combined
                with a compassionate, nurturing environment is now known as the
                Mother Standard® of care and provides a patient-centered
                approach to cancer treatment. Now a nationally accredited
                oncology network of hospitals and outpatient care centers and
                industry leader in patient satisfaction, ECC is proud to be the
                pioneers of the integrative approach to cancer care and
                continues to grow and evolve with the same mission that started
                over 30 years ago, to be a home of healing and hope for cancer
                patients and caregivers.
              </p>
            </Col>
            <Col md={6} sm={12} xs={12} className="about-top-img ms-auto">
              <img className="img-fluid " src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="my-5 bottom-section">
        <Container>
          <Row className="align-items-center g-3">
            <Col md={6} sm={12} className="me-auto">
              <img className="img-fluid" src={img1} alt="" />
            </Col>
            <Col md={5} sm={12} className="right-column">
              <h1 className="tryapp-text">Try Mindspace for free</h1>
              <p className="mt-4">
                Download the Headspace app or sign up online to start meditating
                today.
              </p>

              <button className="btn btn-style btn-danger ms-5 mt-5 p-3 border-rounded fw-bold w-75">
                Start Your Free Trial
              </button>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default Aboutus;
