import React, {useState, useEffect} from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import {popularsData} from '../../utils/data';
import PopularCard from '../../Components/Cards/PopularCard'
import Filter from "./Filter";


export default function Tours() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    document.title ="Tours "
    window.scroll(0, 0)
  },[])


  return (
    <>
      <Breadcrumbs title="Tours" pagename="Tours" />

      <section className="py-5 tour_list">
        <Container>
          <Row>
            <Col xl='3' lg='4' md='12' sm='12'>

            <div className="d-lg-none d-block mb-4">
              <button className="primaryBtn border-0" onClick={handleShow}>
                <i className="bi bi-funnel">Filters</i>
              </button>
            </div>

            <div className="d-lg-block d-none filter">
              <Filter />

            </div>
            </Col>

            <Col xl='9' lg='8' md='12' sm='12'>
              <Row>
                {popularsData.map((val, inx) => (
                  <Col xl={4} lg={6} md={6} sm={6} className="mb-5" key={inx}>
                    <PopularCard val={val} />
                  </Col>
                ))}
              </Row>
            </Col>

          </Row>
        </Container>
      </section>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Filter />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
