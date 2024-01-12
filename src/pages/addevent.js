import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const AddEventForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventName: '',
    startTime: '',
    endTime: '',
    description: '',
    organizerName: '',
    eventBanner: null,
  });
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, eventBanner: file });
  };

  const handleNextStep = () => {
    // Validation check
    if (
      formData.eventName.trim() === '' ||
      formData.startTime.trim() === '' ||
      formData.endTime.trim() === '' ||
      formData.description.trim() === '' ||
      formData.organizerName.trim() === '' ||
      formData.eventBanner === null
    ) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setStep(step + 1);
  };

  const handleConfirm = () => {
    // Validation check
    if (
      formData.eventName.trim() === '' ||
      formData.startTime.trim() === '' ||
      formData.endTime.trim() === '' ||
      formData.description.trim() === '' ||
      formData.organizerName.trim() === '' ||
      formData.eventBanner === null
    ) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    
    // Simulate loading for 5 seconds
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowConfirmation(true);
      setFormData({
        eventName: '',
        startTime: '',
        endTime: '',
        description: '',
        organizerName: '',
        eventBanner: null,
      });
    }, 5000);
  };

  const handleRestart = () => {
    setStep(1);
    setShowConfirmation(false);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <div className="mt-4">
            {step === 1 && (
              <div>
                <h3>Step 1: Event Details</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group controlId="eventName">
                    <Form.Label>Event Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="startTime">
                    <Form.Label>Start Time:</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="endTime">
                    <Form.Label>End Time:</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="organizerName">
                    <Form.Label>Organizer Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="organizerName"
                      value={formData.organizerName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="eventBanner">
                    <Form.Label>Event Banner:</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      name="eventBanner"
                      onChange={handleFileChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="button" onClick={handleNextStep}>
                    Next
                  </Button>
                </Form>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3>Step 2: Confirm Details</h3>
                <p>Review your event details before confirming:</p>
                {/* Display the entered event details */}
                <pre>{JSON.stringify(formData, null, 2)}</pre>
                {error && <Alert variant="danger">{error}</Alert>}
                <Button variant="primary" type="button" onClick={handleConfirm}>
                  Confirm
                </Button>
              </div>
            )}

            {loading && (
              <div className="text-center mt-4">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                <p>Creating event...</p>
              </div>
            )}

            {showConfirmation && (
              <div className="mt-4">
                <Alert variant="success">
                  <Alert.Heading>Event Created!</Alert.Heading>
                  <p>Your event is live. Go to the home page.</p>
                  <Button variant="primary" onClick={handleRestart}>
                    Create Another Event
                  </Button>
                  <Button variant="primary" href="/" className="ml-2">
                    Go to Your Event
                  </Button>
                </Alert>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEventForm;
