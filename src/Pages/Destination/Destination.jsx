import React, {useEffect} from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import { destinationsData } from "../../utils/data";
import Cards from "../../Components/Cards/Cards";

export default function Destination() {

  useEffect(()=>{
    document.title ="Destinations"
    window.scroll(0, 0)
  },[])

  return (
    <>
      <Breadcrumbs title="Destinations" pagename="Destinations" />

      <section className="py-5 tours_section">
        <Container>
          <Row>
            {destinationsData.map((destination, inx) => {
              return (
                <Col md="3" sm="6" key={inx} className="pb-4">
                  <Cards destination={destination} key={inx} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
