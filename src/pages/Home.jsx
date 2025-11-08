import React from "react";
import Banner from "../components/Banner/Banner";
import { AdvancSearch } from "../components/AdvanceSearch/AdvancSearch";
import Features from "../components/Features/Features";
import "../components/Features/features.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../pages/home.css";

import Singapore from "../assets/images/populars/Masaai_mara.jpg";
import Kenya from "../assets/images/populars/Amboseli 2.jpg";
import Quito from "../assets/images/populars/Samburu2.jpg";
import Anchorage from "../assets/images/populars/sweetwaters.jpg";
import Cuzoo from "../assets/images/populars/samburu.jpg";
import Ushania from "../assets/images/populars/Tsavo_east.jpg";
import Santiago from "../assets/images/populars/tsavo-west-national-park.jpg";
import Explorer from "../assets/images/populars/explore.jpg";

import Tours5 from "../assets/images/destinations/tours5.jpg";
import Tours4 from "../assets/images/destinations/tours4.jpg";
import Tours6 from "../assets/images/destinations/tours6.jpg";
import Tours7 from "../assets/images/destinations/tours7.jpg";
import Tours8 from "../assets/images/destinations/tours8.jpg";
import Tours9 from "../assets/images/destinations/tours9.jpg";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const destinations = [
    {
      id: 0,
      name: "Kenya",
      tours: "5 tours and activities",
      image: Tours5,
      link: "/tour",
      location: "Dehradun",
    },
    {
      id: 1,
      name: "Tanzania",
      tours: "9 tours and activities",
      image: Tours4,
      link: "/tour",
      location: "Rishikesh",
    },
    {
      id: 2,
      name: "Uganda",
      tours: "5 tours and activities",
      image: Tours6,
      link: "/tour",
      location: "Mussoorie",
    },
    {
      id: 3,
      name: "Rwanda",
      tours: "4 tours and activities",
      image: Tours7,
      link: "/tour",
      location: "Uttarkashi",
    },
    {
      id: 4,
      name: "Botswana",
      tours: "9 tours and activities",
      image: Tours8,
      link: "/tour",
      location: "Manali",
    },
    {
      id: 5,
      name: "South Africa",
      tours: "4 tours and activities",
      image: Tours9,
      link: "/tour",
      location: "Haridwar",
    },
  ];

  const populars = [
    {
      id: 0,
      title: "Masaai Mara",
      image: Singapore,
      location: "Europe way, Southampton, United Kingdom",
      category: ["Escorted Tour", "Rail Tour"],
      days: "3 days - 2 nights",
      price: 100,
      afterDiscount: 92,
      rating: 3,
      reviews: 5,
    },
    {
      id: 1,
      title: "Amboseli",
      image: Kenya,
      location: "Europe way, Southampton, United Kingdom",
      category: ["River Cruise", "Wildlife"],
      days: "2 days - 1 night",
      price: 87,
      afterDiscount: 82,
      rating: 4,
      reviews: 9,
    },
    {
      id: 2,
      title: "Samburu",
      image: Quito,
      location: "Europe way, Southampton, United Kingdom",
      category: ["Escorted Tour", "Rail Cruise"],
      days: "2 days - 1 night",
      price: 87,
      afterDiscount: 82,
      rating: 4,
      reviews: 9,
    },
    {
      id: 3,
      title: "Sweet Waters",
      image: Anchorage,
      location: "Europe way, Southampton, United Kingdom",
      category: ["River Cruise", "Rail Tour"],
      days: "3 days 2 nights",
      price: 434,
      afterDiscount: 0,
      rating: 5,
      reviews: 20,
    },
    {
      id: 4,
      title: "Tsavo East",
      image: Cuzoo,
      location: "Europe way, Southampton, United Kingdom",
      category: ["River Cruise", "Tour & Cruise"],
      days: "4 day - 3 nights",
      price: 395,
      afterDiscount: 0,
      rating: 3,
      reviews: 12,
    },
    {
      id: 5,
      title: "Tsavo West",
      image: Ushania,
      location: "Europe way, Southampton, United Kingdom",
      category: ["Escorted Tour", "Wildlife"],
      days: "5 days - 4 nights",
      price: 93,
      afterDiscount: 0,
      rating: 3,
      reviews: 12,
    },
    {
      id: 6,
      title: "Mombasa",
      image: Santiago,
      location: "Europe way, Southampton, United Kingdom",
      category: ["Escorted Tour", "Wildlife"],
      days: "3 day - 2 night",
      price: 42,
      afterDiscount: 0,
      rating: 5,
      reviews: 18,
    },
    {
      id: 7,
      title: "LA Explorer",
      image: Explorer,
      location: "Europe way, Southampton, United Kingdom",
      category: ["Rail Tour", "Tour & Cruise"],
      days: "1 night",
      price: 99,
      afterDiscount: 0,
      rating: 4,
      reviews: 22,
    },
  ];

  return (
    <>
      <Banner />
      <AdvancSearch />
      <Features />

      {/* tour section starts */}
      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md={12}>
              <div className="main_heading">
                <h1>Top Destination For Your Next Vacation</h1>
              </div>
            </Col>
          </Row>

          {/* Destinations Slider */}
          <Row>
            <Slider {...settings}>
              {destinations.map((destination, inx) => (
                <div key={inx} className="imgBox">
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={destination.image}
                      className="img-fluid"
                      alt={destination.name}
                    />
                    <Card.Body>
                      <Card.Title>{destination.name}</Card.Title>
                      <span className="tours">{destination.tours}</span>
                    </Card.Body>
                  </Card>
                </div>

              ))}
            </Slider>
          </Row>


          {/* Popular Tours Slider */}
          <Row>
            <Slider {...settings}>
              {populars.map((item) => (
                <div key={item.id} className="p-2">
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <span className="tours">{item.days}</span>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
