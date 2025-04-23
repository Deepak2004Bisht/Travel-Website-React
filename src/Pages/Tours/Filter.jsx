import React from "react";
import { Accordion, Form } from "react-bootstrap";
import { location, Categories, Duration, PriceRange, Rating } from "../../utils/data";
import './tour.css';

export default function Filter() {
  return (
    <div className="side_bar shadow-sm rounded-2">
      <div className="filter_box">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Location</Accordion.Header>
            <Accordion.Body>
              {location.map((location, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={location}
                    label={location}
                    value={location}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Categories</Accordion.Header>
            <Accordion.Body>
              {Categories.map((Categories, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={Categories}
                    label={Categories}
                    value={Categories}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Duration</Accordion.Header>
            <Accordion.Body>
              {Duration.map((Duration, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={Duration}
                    label={Duration}
                    value={Duration}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
              {PriceRange.map((PriceRange, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={PriceRange}
                    label={PriceRange}
                    value={PriceRange}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Rating</Accordion.Header>
            <Accordion.Body>
              {Rating.map((Rating, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={Rating}
                    label={Rating}
                    value={Rating}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
