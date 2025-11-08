import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./features.css"; // ✅ Make sure path matches case exactly

import feature1 from "../../assets/images/features/migrations.jpg";
import feature2 from "../../assets/images/features/ngorongoro.jpg";
import feature3 from "../../assets/images/features/location.jpg";
import feature4 from "../../assets/images/features/medal.jpg";

import { Card, Container } from "react-bootstrap";

const Features = () => {
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};


  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Enjoy Deals & Delights",
      des: "Quality activities, great prices. Plus, earn credit to earn more",
    },
    {
      id: 1,
      image: feature2,
      title: "Explore Made Easy",
      des: "Book last minute, skip the line & get free cancellation for easier exploring",
    },
    {
      id: 2,
      image: feature3,
      title: "Travel You Can Trust",
      des: "Read reviews & get reliable customer support. We are with you every step",
    },
    {
      id: 3,
      image: feature4,
      title: "Discover The Possibilities",
      des: "With nearly half a million attractions, hotels & more, you’re sure to find joy",
    },
  ];

  return (
    <section className="feature-section py-5">
      <Container>
        <Slider {...settings}>
          {featureList.map((feature) => (
            <div key={feature.id} className="feature-slide p-2">
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={feature.image}
                  alt={feature.title}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.des}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Features;
