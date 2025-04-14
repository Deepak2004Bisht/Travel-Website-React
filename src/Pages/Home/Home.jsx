import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AdvanceSearch from '../../Components/AdvanceSearch/AdvanceSearch';
import Features from '../../Components/Features/Features';
import { Container, Row, Col} from "react-bootstrap";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './home.css';
import { destinationsData } from '../../utils/data';
import Cards from '../../Components/Cards/Cards';
import PopularPlace from '../../Components/PopularPlace/PopularPlace';

export default function Home() {

  // Slick Slider Start

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
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
          dots: true,
        },
      },
    ],
  };

  // Slick Slider End


  return (
    <>
      <Banner />
      <AdvanceSearch />
      <Features />


      {/* Tour Section Start :- Top Destination For Your Next Vacation*/}
      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return (
                    <Cards destination={destination} key={inx} />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Tour Section End */}


      <PopularPlace/>


      {/* Call To Action  */}
      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h5 className='title'>CALL TO ACTION</h5>
              <h2 className='heading'>READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h2>
              <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </Col>

            <Col md={4} className='text-center mt-3 mt-md-0'>
              <a href="tel:8810473494" className='secondary_btn bounce' rel='no'>Contact Us!</a>
            </Col>
          </Row>
        </Container>

        <div className="overlay"></div>
      </section>
      {/* Call TO Action End */}


      {/* Photo Gallery */}
      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Photo Gallery End */}

    </>
  );
}
