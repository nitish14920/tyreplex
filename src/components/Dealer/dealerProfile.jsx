import {
  faStar,
  faMapMarkerAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DealerProfile = () => {
  const stars = Array(5).fill(
    <FontAwesomeIcon icon={faStar} className="text-warning" />
  );
  return (
    <div className="card p-4 overflow-hidden">
      <div className="row gap-2">
        <div className="col-5 text-start">
          <div className="d-flex ">
            <h4>SHREE HEMKUNT TYRES AND SERVICES</h4>
            <span className="text-success ms-2 d-flex gap-1">
              <div>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success"
                />
              </div>
              Verified
            </span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="badge bg-success text-white me-2">5</div>
            {stars}
            <a className="text-muted mx-1"> 215 Review</a>
          </div>
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            Plot Number-09 Ground Floor CISF Campus Road, Ahinsa Khand-02
            Indirapuram, Ghaziabad, Uttar Pradesh, 201014
          </p>
          <p className="mb-0">Open - Monday to Sunday - 10:00 AM to 8:00 PM</p>
          <a href="#" className="btn btn-primary mt-3">
            Get Directions
          </a>
        </div>
        <div className="col-3">
          <img
            src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
            alt="image"
            width="110%"
          />
        </div>
        <div className="col-3">
          <img
            src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
            alt="image"
            width="110%"
          />
        </div>
      </div>
      <div className="row text-start p-2 gap-4">
        <div className="card col-3 py-2">
          <div className="d-flex gap-2 mb-2">
            <div
              className="bg-success"
              style={{
                width: "25px",
                borderRadius: "25px",
                paddingLeft: "6px",
              }}
            >
              N
            </div>
            <h6>Md Nasir</h6>
          </div>
          <p>
            Excellent service from start to finish. 100% satisfaction with the
            job, professionalism and overall service.We were delighted with your
          </p>
        </div>
        <div className="card col-3 py-2">
          <div className="d-flex gap-2 mb-2">
            <div
              className="bg-success"
              style={{
                width: "25px",
                borderRadius: "25px",
                paddingLeft: "6px",
              }}
            >
              N
            </div>
            <h6>Md Nasir</h6>
          </div>
          <p>
            Excellent service from start to finish. 100% satisfaction with the
            job, professionalism and overall service.We were delighted with your
          </p>
        </div>
        <div className="card col-3 py-2">
          <div className="d-flex gap-2 mb-2">
            <div
              className="bg-success"
              style={{
                width: "25px",
                borderRadius: "25px",
                paddingLeft: "6px",
              }}
            >
              N
            </div>
            <h6>Md Nasir</h6>
          </div>
          <p>
            Excellent service from start to finish. 100% satisfaction with the
            job, professionalism and overall service.We were delighted with your
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealerProfile;
