import React, {useState} from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './Footer.css';

export default function Footer() {


  const [visible, setVisible] = useState(false);

  const toggleVisible = () =>{
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 300){
      setVisible(true);
    } else if (scrolled <= 300){
      setVisible(false);
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    })
  }

  if(typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Company</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">News</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Faq</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Explore</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/">Faq</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Tour Listing</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Destination</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Quick Link</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/">Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Contact Us</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md="3" sm="12" className="location mt-3 mt-md-0">
              <h4 className="mt-lg-0 mt-sm-3">Contact Info</h4>

              <div className="d-flex align-items-center">
                <p className="pb-2"> Dehradun, Uttarakhand, India</p>
              </div>

              <div className="d-flex align-items-top my-2">
                <i className="bi bi-geo-alt me-3"></i>
                <a target="_blank" rel="noreferrer" href="mailto:deepakbisht2777@gmail.com" className="d-block">deepakbisht2777@gmail.com</a>
              </div>

              <div className="d-flex align-items-top ">
                <i className="bi bi-telephone me-3"></i>
                <a target="_blank" rel="noreferrer" href="tel:8810473494" className="d-block" >8810473494</a>
              </div>
            </Col>
          </Row>

          <Row className="py-2 bdr">
            <Col className="col copyright">
              <p>@2025. deepakbisht All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div id="back-top" onClick={scrollTop} className={visible ? "active" : ""}>
        <i class="bi bi-arrow-up"></i>
      </div>
    </>
  );
}
