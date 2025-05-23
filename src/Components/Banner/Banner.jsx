import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImg from "../../assets/images/slider/2.png";
import sliderImg1 from "../../assets/images/slider/4.png";
import './Banner.css';

export default function Banner() {
  return (
    <>
      <section className='slider'>
        <Carousel variant='black'>
          <Carousel.Item>
            <img src={sliderImg} className='d-block w-100' alt="First slide" />
            <Carousel.Caption>
              <div className='slider_desc'>
                <h5 className='heading'>JOURNEY TO <span>EXPLORE WORLD</span></h5>
                <p className='sub_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>  
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={sliderImg1} className='d-block w-100' alt="First slide" />
            <Carousel.Caption>
              <div className='slider_desc'>
                <h5 className='heading'>BEAUTIFUL PLACE <span>TO VISIT</span></h5>
                <p className='sub_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
