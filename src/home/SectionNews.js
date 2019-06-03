import React from "react";
import Background from "./imgs/bg_news.jpg";
import Background2 from "./imgs/bg_news_2.jpg";
import Background3 from "./imgs/bg_news_3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SectionNews = () => (
  <Carousel
    showArrows={true}
    onChange={() => {}}
    onClickItem={() => {}}
    onClickThumb={() => {}}
    showThumbs={false}
    autoPlay={true}
    infiniteLoop={true}
  >
    <div>
      <img
        src={Background}
        alt="img"
        style={{ height: 500, objectFit: "cover" }}
      />
      <p className="legend" style={{ fontSize: 24, opacity: 0.8 }}>
        Avengers: End Game
      </p>
    </div>
    <div>
      <img
        src={Background2}
        alt="img"
        style={{ height: 500, objectFit: "cover" }}
      />
      <p className="legend" style={{ fontSize: 24, opacity: 0.8 }}>
        Pokemon: Detective Pikachu
      </p>
    </div>
    <div>
      <img
        src={Background3}
        alt="img"
        style={{ height: 500, objectFit: "cover" }}
      />
      <p className="legend" style={{ fontSize: 24, opacity: 0.8 }}>
        Toy Story 4
      </p>
    </div>
  </Carousel>
);

export default SectionNews;
