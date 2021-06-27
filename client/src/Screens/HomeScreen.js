import React, { useEffect } from "react";
import DealsCard from "../Components/DealsCard";
import { Carousel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { listDeals } from "../redux/actions/dealActions";
import {deals} from '../deals'
// import axios from "axios";

const HomeScreen = () => {
  const dispatch = useDispatch();
  console.log(deals);
  useEffect(() => {
    dispatch(listDeals);
  }, [dispatch]);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="w-90"
            src="/images/dealcapture1.jpg"
            alt="First slide"
            // width="500px"
            height="400px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Remises jusqu'à 70% </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-90"
            src="/images/dealcapture2.jpg"
            alt="Second slide"
            // width="400px"
            height="400px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              Profitez des meilleurs deals en Tunisie
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 style={{ color: "black" }}>Nos offres </h1>

      <div className="center">
        {deals.map((deal, id) => (
          <DealsCard id={deal._id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
