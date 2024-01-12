// HomePage.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/banner';
import EventList from '../components/EventList';

// const fetchEvents = async () => {
//   // Mock API endpoint, replace it with your actual API endpoint
// //   const response = await fetch('https://api.example.com/events');
//   const data = await response.json();
//   return data;
// };

const dummyEvents = [
    {
      event_name: 'Event 1',
      event_date: '2024-01-15',
      price: '$10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      event_name: 'Event 2',
      event_date: '2024-02-20',
      price: '$15',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      event_name: 'Event 3',
      event_date: '2024-03-25',
      price: '$20',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      event_name: 'Event 4',
      event_date: '2024-04-30',
      price: '$25',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      event_name: 'Event 5',
      event_date: '2024-05-05',
      price: '$30',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

const HomePage = () => {
  const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const getEvents = async () => {
//       const eventData = await fetchEvents();
//       setEvents(eventData);
//     };

//     getEvents();
//   }, []);

  return (
    <Container fluid>
      {/* Banner Row */}
      <Row>
        <Col lg={12}>
          <Banner />
        </Col>
      </Row>

      {/* Add space between Banner and EventList */}
      <Row className="mt-4">
        <Col lg={12}>
          <EventList events={dummyEvents} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
