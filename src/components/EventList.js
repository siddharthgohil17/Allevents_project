// EventList.js
import React from 'react';
import Card from '../components/card';
import { Row, Col } from 'react-bootstrap';

const EventList = ({ events }) => {
  return (
    <div className="card-list">
      <Row xs={1} sm={2} md={3} lg={3}>
        {events.map((event, index) => {
          console.log(event.event_name); 
          return (
            <Col key={index}>
              <Card
                event_name={event.event_name}
                event_date={event.event_date}
                price={event.price}
                description={event.description}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default EventList;
