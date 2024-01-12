// Card.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Card as BootstrapCard, ListGroup, Col, Row } from 'react-bootstrap';
import './banner.css'; // Import the CSS file

const Card = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const cardStyle = {
    height: '45vh',  
    position: 'relative', 
  };

  const bannerStyle = {
    width: '100%', 
    height: '100%',
    background: 'url(https://cdn2.allevents.in/transup/10/6e7c46a7f642a8bdb4fba1ae83a071/Rectangle-293.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute', 
    top: 0,
    left: 0, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 20px', // Adjust padding as needed
    color: 'white', // Set text color
  };

  const textContainerStyle = {
    maxWidth: '70%',
    margin: '0 auto',
  };

  return (
    <BootstrapCard className="card-container" style={cardStyle}>
    <Row >
      <div style={bannerStyle}>
        <div style={textContainerStyle}>
          <h1 style={{ marginBottom: '30px' }}>Live.</h1>
          <h2>Don't Just Exist.</h2>
          <p style={{ fontSize: '1rem' }}>
            Discover The Most Happening Events Around You
          </p>
        </div>
      </div>
      </Row>
      <Row className="h-100" style={{ marginTop: '200px' }}>
        <Col xs={12} className="d-flex justify-content-center align-items-center ">
          <ListGroup>
            <select className="form-select">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </ListGroup>
          <ListGroup className="ml-3">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />
          </ListGroup>
        </Col>
      </Row>
    </BootstrapCard>
  );
};

export default Card;
