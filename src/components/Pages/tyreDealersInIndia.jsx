import React from "react";
import DealerCard from "../Dealer/dealerCard";
import ServiceCard from "../Dealer/serviceCard";
import DealerProfile from "../Dealer/dealerProfile";
import Footer from "../footer/footer";

const TyreDealersInIndia = () => {
  return (
    <div className=" m-0 px-5 pt-4" style={{ backgroundColor: "#E8E9EE" }}>
      <DealerProfile />
      <div className="card p-4 mt-3">
        <h4 className="mb-3 text-start">Service offered by this dealer</h4>

        <div className="row">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <ServiceCard
              type="Wheel Balancing"
              img="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
            />
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <ServiceCard
              type="Wheel Alignment"
              img="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
            />
          </div>
        </div>
      </div>
      <div className="card p-4 mt-3">
        <h4 className="mb-3 text-start">Tyres sold by this Dealer</h4>
        <div className="d-flex flex-wrap gap-3 justify-content-around">
          {Array(6).fill(
            <div className="p-2">
              <DealerCard />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TyreDealersInIndia;
