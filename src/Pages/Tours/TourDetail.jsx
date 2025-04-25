import React, {useEffect} from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import "./tour.css";
import { NavLink } from "react-router-dom";
import { tourDetails } from "../../utils/data";
import ImageGallery from "react-image-gallery";
import { Container, Row, Col, Nav, Tab, ListGroup, Accordion, Card, Stack } from "react-bootstrap";

export default function TourDetail() {
  useEffect(()=>{
    document.title ="Page Name "
    window.scroll(0, 0)
  },[])
  return (
    <>
      <Breadcrumbs title={tourDetails.title} pagename=<NavLink to="/tours">Tours</NavLink>
        childpagename={tourDetails.title}
      />

      <section className="tour_details py-5">
        <Container>
          <Row>
            <h1 className="fs-2 fw-bold mb-4">{tourDetails.title}</h1>
            <ImageGallery
              items={tourDetails.images}
              showNav={false}
              showBullets={false}
              showPlayButton={false}
            />

            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row className="py-5">
                <Col md={8} className='mb-3 mb-md-0'>
                  <Col md={12}>
                    <Nav variant="pills" className="flex-row nav_bars rounded-2">
                      <Nav.Item>
                        <Nav.Link eventKey="1">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Itinerary</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3">Inclusions & Exclusion</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4">Location</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>

                  <Tab.Content className="mt-4">
                    <Tab.Pane eventKey="1">
                      <div className="tour_details">
                        <h1 className="fw-bold mb-2 h3 border-bottom pb-2">Overview</h1>

                        <p className="body_text">{tourDetails.des}</p>

                        <h5 className="fw-bold mb-2 h5 mt-3">Tour Info</h5>
                        <ListGroup>
                          {tourDetails.tourInfo.map((val, index) =>{
                            return (
                              <ListGroup.Item className='border-0 pt-0 body-text' key={index} dangerouslySetInnerHTML={{__html: val}}></ListGroup.Item>
                            )
                          })}
                        </ListGroup>

                        <h5 className="fw-bold mb-2 h5 mt-3">Tour highlights</h5>
                        {tourDetails.highlights.map((val, index) =>{
                          return (
                            <ListGroup.Item key={index} className='border-0 pt-0 body-text'>{val}</ListGroup.Item>
                          )
                        })}
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="2">
                      <div className="tour_details">
                        <h1 className="fw-bold mb-2 h3 border-bottom pb-2">Itinerary</h1>

                        <Accordion defaultActiveKey="0" className="mt-4">
                          {tourDetails.itinerary.map((val ,inx) =>{
                            return (
                              <Accordion.Item eventKey={inx} key={inx} className='mb-4'>
                                <Accordion.Header>
                                  <h1 dangerouslySetInnerHTML={{__html: val.title}}></h1>
                                </Accordion.Header>
                                <Accordion.Body className='body-text'>{val.des}</Accordion.Body>
                              </Accordion.Item>
                            )
                          })}
                          
                        </Accordion>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="3">
                      <div className="tour_details">
                        <h1 className="fw-bold mb-2 h3 border-bottom pb-2">Inclusions & Exclusions</h1>

                        <h5 className="fw-bold mb-3 h5 mt-3">Inclusion</h5>

                        {tourDetails.included.map((val, index) =>{
                          return (
                            <ListGroup.Item key={index} className='border-0 pt-0 body-text d-flex align-items-center'>
                              <i className="bi bi-check-lg me-2 text-success h4 m-0"></i>{val}
                            </ListGroup.Item>
                          )
                        })}

                        <h5 className="fw-bold mb-3 h5 mt-3">Exclusions</h5>

                        {tourDetails.exclusion.map((val, index) =>{
                          return (
                            <ListGroup.Item key={index} className='border-0 pt-0 body-text d-flex align-items-center'>
                              <i className="bi bi-x-lg me-2 text-danger h5 m-0"></i>{val}
                            </ListGroup.Item>
                          )
                        })}
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="4">
                      <div className="tour_details">
                        <h1 className="fw-bold mb-4 h3 border-bottom pb-2">Location</h1>

                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505145.8765158051!2d114.74122142863247!3d-8.455332883678112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1745495507013!5m2!1sen!2sin" 
                          width="100%"
                          height="400px" 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Map of Bali, Indonesia">       
                        </iframe>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>

                <Col md={4}>
                  <aside>
                    <Card className="shadow-sm price-info rounded-3 mb-4">
                      <Card.Body>
                        <Stack gap={2} direction='horizontal'>
                          <h1 className='fw-bold mb-0 h2'>${tourDetails.price}</h1>
                          <span className='fs-4'>/person</span>
                        </Stack>

                        <div className='d-flex justify-content-between align-items-center mb-3'>
                          <ListGroup horizontal>
                            <ListGroup.Item className='border-0 me-2 fw-bold'>{tourDetails.rating}</ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'>
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'>
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'>
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'>
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'>
                              <i className="bi bi-star-half"></i>
                            </ListGroup.Item>
                          </ListGroup>

                          <h5 className='h6'>({tourDetails.reviews})</h5>
                        </div>

                        <NavLink className='primaryBtn w-100 d-flex justify-content-center fw-bold' to='/booking'>Book Now</NavLink>
                      </Card.Body>
                    </Card>

                    <Card className="card-info p-2 shadow-sm">
                      <Card.Body>
                        <h1 className="fw-bold mb-2 h3">Need Help?</h1>

                        <ListGroup>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-telephone me-1"></i>Call us on: 
                            <strong>+91 8810473494</strong>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-alarm me-1"></i>Timing: 
                            <strong>10AM to 7PM</strong>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-headset me-1"></i>
                            <strong>Let us call you</strong>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0"> 
                            <i className="bi bi-calendar-check me-1"></i>
                            <strong>Book Appointments</strong>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                    
                  </aside>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </section>
    </> 
  );
}
