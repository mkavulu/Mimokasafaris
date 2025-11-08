import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AdvanceSearch/search.css";
import { Container, Row, Col } from "react-bootstrap";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";


export const AdvancSearch = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectedLocation = (value) => {
        console.log("Location", value);
    };

    const selectedGuests = (value) => {
        console.log("Guests", value);
    };

    return (
        <section className="box-search-advance">
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="box-search shadow-sm">
                            <div className="item-search">
                                <CustomDropdown
                                    label="Location"
                                    onSelect={selectedLocation}
                                    options={[
                                        "Kenya, Nairobi",
                                        "Tanzania, Daresalaam",
                                        "Uganda, Kampala",
                                        "Rwanda, Kigali",
                                        "South Africa, Cape Town",
                                    ]}
                                />
                            </div>

                            <div className="item-search-2">
                                <label className="item-search-label">Check in</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsStart
                                    dateFormat="dd, MMMM, yyyy"
                                />
                            </div>

                            <div className="item-search-2">
                                <label className="item-search-label">Check out</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsEnd
                                    dateFormat="dd, MMMM, yyyy"
                                />
                            </div>

                            <div className="item search">
                                <CustomDropdown
                                    label="Guests"
                                    onSelect={selectedGuests}
                                    options={[
                                        "2 adults, 1 child",
                                        "2 adults, 2 children",
                                        "2 adults, 3 children",
                                    ]}
                                />
                            </div>
                            <div className="item search">
                                <button className="primaryBtn flex-even d-flex justify-content-center">
                                    <i className="bi bi-search me-2"></i>Search
                                </button>
 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
