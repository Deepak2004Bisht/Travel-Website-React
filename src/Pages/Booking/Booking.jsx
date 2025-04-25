import React, { useState, useEffect } from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Form, Card, ListGroup} from "react-bootstrap";
import DatePicker from "react-datepicker";
import './booking.css';

export default function Booking() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(()=>{
      document.title ="Page Name "
      window.scroll(0, 0)
    },[])
      
    
  return (
    <>
      <Breadcrumbs title="Booking" pagename="Booking" />
      <section className='booking-section py-5'>
        <Container>
          <Row>
            <Col md='8' lg='8'>
              <div className='booking-form-wrap border rounded-3'>
                <div className='form-title px-4 border-bottom py-3'>
                  <h3 className='h4 fw-bold m-0'>Your Details</h3>
                </div>

                <Form className='p-4'>
                  <Row>
                    <Form.Group as={Col} md="6" controlId="firstname" className="mb-4">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="lastname" className="mb-4">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} md="6" controlId="email.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} md="6" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="email" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} md="6" controlId="checkin">
                      <Form.Label className='d-block'>Check In</Form.Label>
                       <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="dd, MMM, yyyy"
                          className='form-control w-100'
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} md="6" controlId="checkout">
                      <Form.Label className='d-block'>Check Out</Form.Label>
                       <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={endDate}
                          endDate={startDate}
                          dateFormat="dd, MMM, yyyy"
                          className='form-control w-100'
                        />
                    </Form.Group>

                    <Col md='12'>
                      <button className='primaryBtn border-0'>Submit Now</button>
                    </Col>
                  </Row>
                </Form>            
              </div>
            </Col>

            <Col md='4' lg='4'>
              <Card className="card-info p-0 shadow-sm bg-white">
                <Card.Header>
                  <h1 className="fw-bold h4 mt-2">Price Summary</h1>
                </Card.Header>

                <Card.Body className='pb-0'>
                  <ListGroup>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Base Price</span> 
                      <strong>$28,660</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Total Discount <span className='badge bg-danger'>10%</span></span> 
                      <strong>$20</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Taxes % Fees</span> 
                      <strong>$28,660</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>

                <Card.Footer className='d-flex justify-content-between py-4'>
                  <span className='fw-bold h5'>Payable Now</span>
                  <strong className='fw-bold h5'>$28,660</strong>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
