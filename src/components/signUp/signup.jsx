import { useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function Signup () {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4">Sign Up</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <FormControl
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
             
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign Up
            </Button>
          </Form>
          <div className="d-flex justify-content-between">
            <Button variant="link" className="p-0">Forgot Password?</Button>
            <Button variant="link" className="p-0">Login</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};