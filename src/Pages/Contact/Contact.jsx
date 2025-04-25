import React, {useEffect} from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import {Container,Row, Col, Card, ListGroup, Form, FloatingLabel} from "react-bootstrap";
import image from "../../assets/images/new/contact-us.png";

export default function Contact() {

  useEffect(()=>{
        document.title ="Contact us"
        window.scroll(0, 0)
      },[])

  return (
    <>
      <Breadcrumbs title="Contact us" pagename="Contact us" />
      <section className="contact pt-5">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="mb-2 h1 fw-bold">
                Let's connect and get to know each other
              </h1>
              <p className="body-text mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </Col>
          </Row>

          <Row className="py-5">
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="bg-info rounded-circle text-info shadow-sm bg-opacity-10 p-2">
                      <i class="bi bi-headset h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Call Us</Card.Title>
                  <p className="mb-2 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                  <div className="d-block justify-content-between">
                    <button type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-telephone me-1"></i>+12 3456789
                    </button>
                    <button type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-phone me-1"></i>+12 3456789
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="bg-danger rounded-circle text-danger shadow-sm bg-opacity-10 p-2">
                      <i className="bi bi-envelope h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Email Us</Card.Title>
                  <p className="mb-2 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                  <div className="d-block justify-content-between">
                    <button type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-envelope me-2"></i>demo@gmail.com
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="12" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="bg-warning rounded-circle text-warning shadow-sm bg-opacity-10 p-2">
                      <i class="bi bi-globe h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Social Media</Card.Title>
                  <p className="mb-2 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                  <div className="d-block justify-content-center">
                    <ListGroup horizontal className="justify-content-center">
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-youtube"></i>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-facebook"></i>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-instagram"></i>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-twitter"></i>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="py-5 align-items-center">
            <Col xl="6" md="6" className="d-none d-md-block">
              <img src={image} alt="" className="img-fluid me-3" />
            </Col>

            <Col xl="6" md="6">
              <Card className="bg-light p-4 border-0 shadow-sm">
                <div className="form-box">
                  <h1 className="h3 fw-bold mb-4">Send us message</h1>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FloatingLabel
                          controlId="name"
                          label="Full Name"
                          className="mb-4"
                        >
                          <Form.Control type="text" placeholder="Full Name" />
                        </FloatingLabel>
                      </Col>

                      <Col md="6">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address"
                          className="mb-4"
                        >
                          <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                      </Col>

                      <Col md="12">
                        <FloatingLabel
                          controlId="phone"
                          label="Phone Number"
                          className="mb-4"
                        >
                          <Form.Control type="number" placeholder="Phone Number" />
                        </FloatingLabel>
                      </Col>

                      <Col md="12">
                        <FloatingLabel controlId="message" label="Message">
                          <Form.Control
                            as="textarea"
                            placeholder="message"
                            style={{ height: '120px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>

                    <button className="primaryBtn border-0 mt-3" type="button">Send Message</button>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
