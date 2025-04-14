import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md='3' sm='12' className='quick_link mt-3 mt-md-0'>
            <h4 className='mt-lg-0 mt-sm-3'>Company</h4>
          </Col>
          <Col md='3' sm='12' className='quick_link mt-3 mt-md-0'></Col>
          <Col md='3' sm='12' className='quick_link mt-3 mt-md-0'></Col>
          <Col md='3' sm='12' className='quick_link mt-3 mt-md-0'></Col>
        </Row>
        
      </Container>
    </footer>
  );
}
