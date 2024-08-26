import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { search } });
  };

  const resetSearch = () => {
    setSearch("");
    dispatch({ type: "RESET_CONTACT" });
  };

  return (
    <Form onSubmit={searchByName} className="search-box">
      <Row>
        <Col lg={8} className="search-col">
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Col>
        <Col lg={2} className="search-button-col">
          <Button variant="primary" type="submit" className="search-button">
            Search
          </Button>
        </Col>
        <Col lg={2} className="search-button-col">
          <Button variant="secondary" type="button" onClick={resetSearch} className="reset-button">
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
