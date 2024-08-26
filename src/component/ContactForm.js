import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };

  return (
    <div className="contact-form-container">
      <Form onSubmit={addContact} className="contact-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요."
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력하세요."
            onChange={(event) => setNumber(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="form-button">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
