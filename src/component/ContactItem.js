import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const ContactItem = ({item}) => {

  const dispatch = useDispatch();

  const Delete = () =>{
    dispatch({ type: 'DELETE_CONTACT', payload: item.name });
  }

  return (
    <Row>
        <Col lg={1}>
            <div><FontAwesomeIcon icon={faUser} size="2x"/></div> 
        </Col>
        <Col lg={9}>
            <div>{item?.name}</div>
            <div><u>{item.phoneNumber}</u></div>
        </Col>
        <Col lg={2}>
          <Button variant="danger" onClick={Delete}>
          <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Col>
    </Row>
  )
}

export default ContactItem