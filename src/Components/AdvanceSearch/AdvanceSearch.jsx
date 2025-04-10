import React from "react";
import { useState } from "react";
import "./search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDropDown from "../CustomDropDown/CustomDropDown";

export default function AdvanceSearch() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectedLocation = (value) => {
    console.log("location", value); // Selected Location
  };

  const selectedGuest = (value) => {
    console.log("Guest", value);
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                <div className="item-search">
                  {/* Using Props to Pass Data */}
                  <CustomDropDown
                    label="Location"
                    onSelect={selectedLocation}
                    Options={[
                      "USA, Turkish",
                      "Tokyo, Japan",
                      "Sydney, Australia",
                      "Paris, France",
                      "London, UK",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check in</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMM, yyyy"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check Out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={endDate}
                    endDate={startDate}
                    dateFormat="dd, MMM, yyyy"
                  />
                </div>
                <div className="item-search bd-none">
                  <CustomDropDown
                    label="Guest"
                    onSelect={selectedGuest}
                    Options={[
                      "2 adults, 1 children",
                      "2 adults, 1 children",
                      "2 adults, 3 children",
                    ]}
                  />
                </div>
                <div className="item-search bd-none">
                  <Button className="primaryBtn flex-even d-flex justify-content-center">
                    <i className="bi bi-search me-2"></i>Search
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
