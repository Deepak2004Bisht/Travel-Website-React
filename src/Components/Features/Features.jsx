import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Features.css";

import feature1 from "../../assets/images/feature/beach-umbrella.png";
import feature2 from "../../assets/images/feature/deal.png";
import feature3 from "../../assets/images/feature/location.png";
import feature4 from "../../assets/images/feature/medal.png";

// Add Slick Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Features() {

  // Slick Slider Start
  
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
        },
      },
    ],
  };

  // Slick Slider End

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Discover the possibilities",
      des: "With nearly half a million attractions, hotels & more, you're sure to find joy.",
    },
    {
      id: 1,
      image: feature2,
      title: "Enjoy deals & delights",
      des: "Quality activities. Great prices. Plus, earn credits to save more.",
    },
    {
      id: 2,
      image: feature3,
      title: "Exploring made easy",
      des: "Book last minute, skip lines &amp; get free cancellation for easier exploring.",
    },

    {
      id: 3,
      image: feature4,
      title: "Travel you can trust",
      des: "Read reviews & get reliable customer support. We're with you at every step.",
    },
  ];

  return (
    <>
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <Card key={inx}>
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                      />
                      <Card.Body>
                        <Card.Title>{feature.title}</Card.Title>
                        <Card.Text>{feature.des}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
