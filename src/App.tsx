import React from 'react';
import UiButton from './components/common/UiButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RandomWheel from './components/RamdomWheel';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Container>
        <Row>
          <Col>
            <RandomWheel />
            <Button as='a' variant='primary'>
              Button as link
            </Button>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
