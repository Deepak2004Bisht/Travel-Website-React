import React,{ useEffect } from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import aboutImg from "../../assets/images/about/aboutimg.png";
import './about.css';
import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";


export default function About() {

  useEffect(()=>{
    document.title ="About us "
    window.scroll(0, 0)
  },[])

  return (
    <>
      <Breadcrumbs title="About us" pagename="About us" />
      <section className='py-5'>
        <Container>
          <Row>
            <Col md='8'>
              <div className="about-content">
                <div className="about-image position-relative">
                  <img src={aboutImg} alt="about" className='img-fluid rounded-5' />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                    <h3 className='h2 fw-bold text-white'>HOW WE ARE BEST FOR TRAVEL!</h3>
                  </div>
                </div>
              </div>
              
              <h2 className='h2 fw-bold pt-4 pb-2'>
                HOW WE ARE BEST FOR TRAVEL!
              </h2>
              <p className='body-text mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className='body-text mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className='body-text mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </Col>

            <Col md='4'>
              <Card className='border-0 shadow rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className='d-flex justify-content-center align-items-center my-2'>
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={icons1} alt="icon" className='img-fluid'/>
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'>50+ Destination</Card.Title>
                  <p className='mb-2 body-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Card.Body>
              </Card>

              <Card className='border-0 shadow rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className='d-flex justify-content-center align-items-center my-2'>
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={icons2} alt="icon" className='img-fluid'/>
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'>Best Price In The Industry</Card.Title>
                  <p className='mb-2 body-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Card.Body>
              </Card>

              <Card className='border-0 shadow rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className='d-flex justify-content-center align-items-center my-2'>
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={icons3} alt="icon" className='img-fluid'/>
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'>Super Fast Booking</Card.Title>
                  <p className='mb-2 body-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
