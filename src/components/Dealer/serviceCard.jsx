import React from "react";

const ServiceCard = (pros) => {
  return (
    <div className="card p-2">
      <img width="100" src={pros.img} alt="" className="m-auto" />
      <h5>{pros.type}</h5>
      <button className="bg-danger w-18rem m-auto">Book now</button>
    </div>
  );
};

export default ServiceCard;
