import React, {useEffect} from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../../Components/Gallery/Gallery";

export default function PhotoGallery() {

  useEffect(()=>{
        document.title ="Gallery "
        window.scroll(0, 0)
      },[])
  return (
    <>
      <Breadcrumbs title="Gallery" pagename="Gallery" />
      <section className='py-5'>
        <Container>
          <Row>
            <Col>
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
