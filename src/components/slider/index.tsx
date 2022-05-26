import React from "react";
import { Carousel } from "react-bootstrap";
import { Banner } from "../../services/commonServices";
import './index.scss'

const Slider = ({list} : any) => {
  return (
    <div>
      <Carousel>
        {list && list.length > 0 && list.map((item: Banner) => (
        <Carousel.Item key={item.id}>
          <img
            // className="d-block"
            src={item.bannerImageUrl}
            alt={item.bannerImageAlt}
          />        
        </Carousel.Item>
       ) )}
      </Carousel> 
    </div>
  );
};

export default Slider;
